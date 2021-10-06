---
id: sliding-window-rate-limiting
title: How to implement Sliding Window Rate Limiting app using ASP.NET Core & Redis
sidebar_label: Sliding Window Rate Limiting app  using ASP.NET
slug: /develop/dotnet/aspnetcore/rate-limiting/sliding-window
---

In this tutorial, we'll learn how to build a sliding window rate limiter for ASP.NET Core using Redis.

## What is A Sliding Window Rate Limiter

The pattern that we are implementing here is a sliding window rate limiter. A sliding window rate limiter, unlike a fixed window, restricts requests for a discrete window prior to the current request under evaluation. As opposed to a fixed window rate limiter which groups the requests into a bucket based on a very definitive time window. For example, if you have a 10 req/minute rate limiter, on a fixed window, you could encounter a case where the rate-limiter allows 20 requests inside of a minute. That's because if first 10 requests are on the left hand side of the current window, and the next 20 requests are on the right hand side of the window, both have enough space in their respective buckets to be allowed through. If you sent those same 20 requests through a sliding window limited rate limiter on the other hand, if they are all sent within 60 seconds of each other, only 10 will make it through. Using Sorted Sets and Lua scripts, implementing one of these rate limiters is a breeze.

## Prerequisites

* Must have the [.NET 5+ SDK](https://dotnet.microsoft.com/download/dotnet/5.0) installed
* Some way of running Redis, for this tutorial we'll use [Docker Desktop](https://www.docker.com/products/docker-desktop)
* IDE for writing C# [VS Code](https://code.visualstudio.com/download), [Visual Studio](https://visualstudio.microsoft.com/), or [Rider](https://www.jetbrains.com/rider/)

## Startup Redis

Before we begin, startup Redis. For this example, we'll use the [Redis docker image](https://hub.docker.com/_/redis):

```bash
docker run -p 6379:6379 redis
```

## Create Project

In your terminal, navigate to where you want the app to live and run:

```bash
dotnet new webapi -n SlidingWindowRateLimiter --no-https
```

Cd into the `SlidingWindowRateLimiter` folder and run the command `dotnet add package StackExchange.Redis`.

Open `SlidingWindowRateLimiter.csproj` in Rider, Visual Studio, or open the folder in VS Code. In the `Controllers` folder, add an API controller called `RateLimitedController`, when all this is complete, `RateLimitedController.cs` should look like the following:

```csharp
namespace SlidingWindowRateLimiter.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RateLimitedController : ControllerBase
    {        
    }
}
```

## Initialize The Multiplexer

To use Redis, we're going to initialize an instance of the ConnectionMultiplexer from `StackExchange.Redis`, to do so, go to the `ConfigureServices` method inside of `Startup.cs` and add the following line:

```csharp
services.AddSingleton<IConnectionMultiplexer>(ConnectionMultiplexer.Connect("localhost"));
```

## Inject the ConnectionMultiplexer

In `RateLimitedController.cs` inject the ConnectionMultiplexer into the controller and pull out an `IDatabase` object from it with the following:

```csharp
private readonly IDatabase _db;
public RateLimitedController(IConnectionMultiplexer mux)
{
    _db = mux.GetDatabase();
}
```

## Add a Simple Route

We will add a simple route that we will Rate Limit; it will be a POST request route on our controller. This POST request will use [Basic auth](https://en.wikipedia.org/wiki/Basic_access_authentication) - this means that each request is going to expect a header of the form `Authorization: Basic <base64encoded>` where the `base64encoded` will be a string of the form `apiKey:apiSecret` base64 encoded, e.g. `Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==`. This route will parse the key out of the header and return an OK result.

```csharp
[HttpPost]
[HttpGet]
[Route("sliding")]
public async Task<IActionResult> Sliding([FromHeader]string authorization)
{
    var encoded = string.Empty;
    if(!string.IsNullOrEmpty(authorization)) encoded = AuthenticationHeaderValue.Parse(authorization).Parameter;
    if (string.IsNullOrEmpty(encoded)) return new UnauthorizedResult();
    var apiKey = Encoding.UTF8.GetString(Convert.FromBase64String(encoded)).Split(':')[0];
    return Ok();
}
```

With that setup, you should run the project with a `dotnet run`, and if you issue a POST request to `https://localhost:5001/api/RateLimited/sliding` - with apiKey `foobar` and password `password`, you will get a 200 OK response back.

You can use this cURL request to elicit that response:

```bash
curl -X POST -H "Content-Length: 0" --user "foobar:password" http://localhost:5000/api/RateLimited/single
```

## Sliding Window Rate Limiter Lua Script

To implement this pattern we will need to do the following:

1. The client will create a key for the server to check, this key will be of the format `route:apikey`
2. That key will map to a sorted set in Redis, we will check the current time, and shave off any requests in the sorted set that are outside of our window
3. We will then check the cardinality of the sorted set
4. If the cardinality is less than our limit, we will
    1. Add a new member to our sorted set with a score of the current time in seconds, and a member of the current time in microseconds
    2. Set the expiration for our sorted set to the window length
    3. return 0
5. If the cardinality is greater than or equal to our limit we will return 1

The trick here is that everything needs to happen atomically, we want to be able to trim the set, check its cardinality, add an item to it, and set it's expiration, all without anything changing in the interim. Fortunately this is a perfect place to use a [Lua Script](https://redis.io/commands/eval). Specifically we are going to be using the StackExchange script preparation engine to drive our lua script, meaning we can use `@variable_name` in place of a particular position in `ARGV` or `KEYS` in the script. Our Lua script will be: 

```
local current_time = redis.call('TIME')
local trim_time = tonumber(current_time[1]) - @window
redis.call('ZREMRANGEBYSCORE', @key, 0, trim_time)
local request_count = redis.call('ZCARD',@key)

if request_count < tonumber(@max_requests) then
    redis.call('ZADD', @key, current_time[1], current_time[1] .. current_time[2])
    redis.call('EXPIRE', @key, @window)
    return 0
end
return 1
```

In order to use that in our app, we will create a new static class called `Scripts` which will hold the text of the script, and prepare the script to run with `StackExchange.Redis`. Create a new file called `Scripts.cs` and add the following to it.

```csharp
using StackExchange.Redis;

namespace SlidingWindowRateLimiter
{
    public static class Scripts
    {
        public static LuaScript SlidingRateLimiterScript => LuaScript.Prepare(SlidingRateLimiter);
        private const string SlidingRateLimiter = @"
            local current_time = redis.call('TIME')
            local trim_time = tonumber(current_time[1]) - @window
            redis.call('ZREMRANGEBYSCORE', @key, 0, trim_time)
            local request_count = redis.call('ZCARD',@key)

            if request_count < tonumber(@max_requests) then
                redis.call('ZADD', @key, current_time[1], current_time[1] .. current_time[2])
                redis.call('EXPIRE', @key, @window)
                return 0
            end
            return 1
            ";
    }
}
```

## Update the Controller for rate limiting

Back in our `RateLimitedController` Sliding method, we will add a few lines of code to check if we should throttle the API request, replace the return statement with the following:

```csharp
var limited = ((int) await _db.ScriptEvaluateAsync(Scripts.SlidingRateLimiterScript,
    new {key = new RedisKey($"{Request.Path}:{apiKey}"), window = 30, max_requests = 10})) == 1;
return limited ? new StatusCodeResult(429) : Ok();
``` 

The whole method should look like this now:

```csharp
[HttpPost]
[HttpGet]
[Route("sliding")]
public async Task<IActionResult> Sliding([FromHeader] string authorization)
{
    var encoded = string.Empty;
    if(!string.IsNullOrEmpty(authorization)) encoded = AuthenticationHeaderValue.Parse(authorization).Parameter;
    if (string.IsNullOrEmpty(encoded)) return new UnauthorizedResult();
    var apiKey = Encoding.UTF8.GetString(Convert.FromBase64String(encoded)).Split(':')[0];
    var limited = ((int) await _db.ScriptEvaluateAsync(Scripts.SlidingRateLimiterScript,
        new {key = new RedisKey($"{Request.Path}:{apiKey}"), window = 30, max_requests = 10})) == 1;
    return limited ? new StatusCodeResult(429) : Ok();
}
```

Now, if we start our server back up with `dotnet run` and try running the following command:

```bash
for n in {1..20}; do echo $(curl -s -w " HTTP %{http_code}, %{time_total} s" -X POST -H "Content-Length: 0" --user "foobar:password" http://localhost:5000/api/ratelimited/sliding); sleep 0.5; done
```

You will see some of your requests return a `200`, and 10 will return a `429`. If you wait for some and run the above command again you may see some behavior where every other request goes through. That's because the window slides every second and only the previous 30 seconds requests are considered when determining whether to throttle the request. The above command the first time will produce an output something like this:

```text
HTTP 200, 0.081806 s
HTTP 200, 0.003170 s
HTTP 200, 0.002217 s
HTTP 200, 0.001632 s
HTTP 200, 0.001508 s
HTTP 200, 0.001928 s
HTTP 200, 0.001647 s
HTTP 200, 0.001656 s
HTTP 200, 0.001699 s
HTTP 200, 0.001667 s
{"status":429,"traceId":"00-4af32d651483394292e35258d94ec4be-6c174cc42ca1164c-00"} HTTP 429, 0.012612 s
{"status":429,"traceId":"00-7b24da2422f5b144a1345769e210b78a-75cc1deb1f260f46-00"} HTTP 429, 0.001688 s
{"status":429,"traceId":"00-0462c9d489ce4740860ae4798e6c4869-2382f37f7e112741-00"} HTTP 429, 0.001578 s
{"status":429,"traceId":"00-127f5493caf8e044a9f29757fbf91f0a-62187f6cf2833640-00"} HTTP 429, 0.001722 s
{"status":429,"traceId":"00-89a4c2f7e2021a4d90264f9d040d250c-34443a5fdb2cff4f-00"} HTTP 429, 0.001718 s
{"status":429,"traceId":"00-f1505b800f30da4b993bebb89f902401-dfbadcb1bc3b8e45-00"} HTTP 429, 0.001663 s
{"status":429,"traceId":"00-621cf2b2f32c184fb08d0d483788897d-1c01af67cf88d440-00"} HTTP 429, 0.001601 s
{"status":429,"traceId":"00-e310ba5214d7874dbd653a8565f38df4-216f1a4b8c4b574a-00"} HTTP 429, 0.001456 s
{"status":429,"traceId":"00-52a7074239a5e84c9ded96166c0ef042-4dfedf1d60e3fd46-00"} HTTP 429, 0.001550 s
{"status":429,"traceId":"00-5e03e785895f2f459c85ade852664703-c9ad961397284643-00"} HTTP 429, 0.001535 s
{"status":429,"traceId":"00-ba2ac0f8fd902947a4789786b0f683a8-be89b14fa88d954c-00"} HTTP 429, 0.001451 s
```

## Resources

* You can find the code used for this tutorial in [GitHub](https://github.com/redis-developer/sliding-window-rate-limiter-aspnet)
