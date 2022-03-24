---
id: byo-rate-limiter-middleware
title: Configurable Sliding Window Rate Limiting Middleware for Redis & ASP.NET Core
sidebar_label: Rate Limiting Middleware
slug: /develop/dotnet/aspnetcore/rate-limiting/middleware
authors: [steve]
---

Let's consider the case (which is probably most cases) where we have multiple endpoints we want to rate limit; it doesn't make an awful lot of sense to embed rate-limiting in those cases in the logic of the routes themselves. Instead, have something that will intercept requests and check to see if the request is rate-limited before moving onto the appropriate endpoint. To accomplish this, we'll build some middleware for just this purpose. And with some light configuration work, we'll be able to build some middleware to handle a configurable set of limits.

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
dotnet new webapi -n RateLimitingMiddleware --no-https
```

Cd into the `RateLimitingMiddleware` folder and run the command `dotnet add package StackExchange.Redis`.

Open `RateLimitingMiddleware.csproj` in Rider, Visual Studio, or open the folder in VS Code. Then, in the `Controllers` folder, add an API controller called `RateLimitedController`. When all this is complete, `RateLimitedController.cs` should look like the following:

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

## Create Configuration Object

Now it's time to dig into the logic behind this middleware. The first thing we ought to do is consider the configurations we will use to configure our middleware. We'll consider configuration objects to contain the following form in our application configuration:

```json
{
    "RedisRateLimits":[
        {
            "Path":"/api/ratelimited/limited",
            "Window":"30s",
            "MaxRequests": 5
        },
        {
            "PathRegex": "\/api\/*",
            "Window":"1d",
            "MaxRequests":1000
        }
    ]
}
```

In other words, we have four parameters.

|Parameter Name| Description |
|--------------|-------------|
|Path|literal path to be rate-limited if the path matches completely, it will trigger a rate limit check|
|PathRegex|Path regex to be rate-limited; if path matches, it will trigger a rate limit check|
|Window|The Sliding Window to Rate Limit on should match the pattern `([0-9]+(s|m|d|h))`|
|MaxRequests|The maximum number of requests allowable over the period|

And those parameters are going to be stored under the configuration node `RedisRateLimits` in our configuration.

### Build Config Object

The configuration objects we'll use for this will contain the logic of the rule and some parsing logic to handle parsing the timeouts from the window pattern. So we'll create a new class called `RateLimitRule` In this class, we'll add a regex to do the pattern matching for our window:

```csharp
public class RateLimitRule
{

}
```

#### Time Regex

```csharp
private static readonly Regex TimePattern = new ("([0-9]+(s|m|d|h))");
```

#### Time Unit Enum

Then we'll create an enum that we'll store the unit half of the window size in:

```csharp
private enum TimeUnit
{
    s = 1,
    m = 60,
    h = 3600,
    d = 86400
}
```

#### Parse Time

We are going to measure time windows in seconds (as that will be the most native thing for Redis), so we will now need to have a method to convert our time window to seconds:

```csharp
private static int ParseTime(string timeStr)
{
    var match = TimePattern.Match(timeStr);
    if (string.IsNullOrEmpty(match.Value))
        throw new ArgumentException("Rate limit window was not provided or was not " +
                                    "properly formatted, must be of the form ([0-9]+(s|m|d|h))");
    var unit = Enum.Parse<TimeUnit>(match.Value.Last().ToString());
    var num = int.Parse(match.Value.Substring(0, match.Value.Length - 1));
    return num * (int) unit;
}
```

#### Add properties

Next, we'll need to add the Properties of this class so that we don't have to repeat computation. We'll store `_windowSeconds` in a separate private field:

```csharp
public string Path { get; set; }
public string PathRegex { get; set; }
public string Window { get; set; }
public int MaxRequests { get; set; }
internal int _windowSeconds = 0;
internal string PathKey => string.IsNullOrEmpty(Path) ? Path : PathRegex;
internal int WindowSeconds
{
    get
    {
        if (_windowSeconds < 1)
        {
            _windowSeconds = ParseTime(Window);
        }
        return _windowSeconds;
    }
}
```

#### Match Path

Finally, we'll perform the pattern matching against the path:

```csharp
public bool MatchPath(string path)
{
    if (!string.IsNullOrEmpty(Path))
    {
        return path.Equals(Path, StringComparison.InvariantCultureIgnoreCase);
    }
    if (!string.IsNullOrEmpty(PathRegex))
    {
        return Regex.IsMatch(path, PathRegex);
    }
    return false;
}
```

## Writing our Lua Script

We need to write a Lua script that will consider all the rules applicable to a particular user on a specific endpoint. We'll use sorted sets to check the rate limits for each rule and user. On each request, it will take each applicable rule and:

1. Check the current time
2. Trim off entries that fall outside the window
3. Check if another request violates the rule
    * If the request would violate any rules return 1
4. For each applicable rule
5. Add a new entry to the sorted set with the score of the current time in seconds, and a member name of the current time in microseconds
6. Return 0

As we have an undetermined number of rules ahead of time, it's impossible to use the StackExchange.Redis Library's, but we can still use a Lua script to accomplish this.

```text
local current_time = redis.call('TIME')
local num_windows = ARGV[1]
for i=2, num_windows*2, 2 do
    local window = ARGV[i]
    local max_requests = ARGV[i+1]
    local curr_key = KEYS[i/2]
    local trim_time = tonumber(current_time[1]) - window
    redis.call('ZREMRANGEBYSCORE', curr_key, 0, trim_time)
    local request_count = redis.call('ZCARD',curr_key)
    if request_count >= tonumber(max_requests) then
        return 1
    end
end
for i=2, num_windows*2, 2 do
    local curr_key = KEYS[i/2]
    local window = ARGV[i]
    redis.call('ZADD', curr_key, current_time[1], current_time[1] .. current_time[2])
    redis.call('EXPIRE', curr_key, window)                
end
return 0
```

The above script has an undetermined number of arguments and an undetermined number of keys ahead of time. As such, it's essential to make sure that all the keys are on the same shard, so when we build the keys, which will be of the form `path_pattern:apiKey:window_size_seconds`, we will surround the common part of the key `apiKey` with braces `{apiKey}`.

## Build The Middleware

Now it's time to actually build the middleware. Add a new file `SlidingWindowRateLimiter.cs` Inside that file, add two classes `SlidingWindowRateLimiter` and `SlidingWindowRateLimiterExtensions`

In the `SlidingWindowRateLimiterExtensions` class, add one method to add the SlidingWIndowRateLimiter to the middleware pipeline, that class will look like this when completed:

```csharp
public static class SlidingWindowRateLimiterExtensions
{
    public static void UseSlidingWindowRateLimiter(this IApplicationBuilder builder)
    {
        builder.UseMiddleware<SlidingWindowRateLimiter>();
    }
}
```

In the `SlidingWindowRateLimiter` class, start by adding the script mentioned above as a const string for the class:

```csharp
private const string SlidingRateLimiter = @"
    local current_time = redis.call('TIME')
    local num_windows = ARGV[1]
    for i=2, num_windows*2, 2 do
        local window = ARGV[i]
        local max_requests = ARGV[i+1]
        local curr_key = KEYS[i/2]
        local trim_time = tonumber(current_time[1]) - window
        redis.call('ZREMRANGEBYSCORE', curr_key, 0, trim_time)
        local request_count = redis.call('ZCARD',curr_key)
        if request_count >= tonumber(max_requests) then
            return 1
        end
    end
    for i=2, num_windows*2, 2 do
        local curr_key = KEYS[i/2]
        local window = ARGV[i]
        redis.call('ZADD', curr_key, current_time[1], current_time[1] .. current_time[2])
        redis.call('EXPIRE', curr_key, window)                
    end
    return 0
    ";
```

### Constructor

We need to seed this class with an `IDatabase` to access redis, an `IConfiguration` to access the configuration, and of course, the next chain in the pipeline to continue. So consequentially, we'll dependency inject all this into our middleware:

```csharp
private readonly IDatabase _db;
private readonly IConfiguration _config;
private readonly RequestDelegate _next;

public SlidingWindowRateLimiter(RequestDelegate next, IConnectionMultiplexer muxer, IConfiguration config)
{
    _db = muxer.GetDatabase();
    _config = config;
    _next = next;
}
```

### Extract Api Key

In this case, we will use [basic auth](https://en.wikipedia.org/wiki/Basic_access_authentication), so we will be using the username from the basic auth structure as our `apiKey`. We will need a method to extract it consequentially:

```csharp
private static string GetApiKey(HttpContext context)
{
    var encoded = string.Empty;
    var auth = context.Request.Headers["Authorization"];
    if (!string.IsNullOrEmpty(auth)) encoded = AuthenticationHeaderValue.Parse(auth).Parameter;
    if (string.IsNullOrEmpty(encoded)) return encoded;
    return Encoding.UTF8.GetString(Convert.FromBase64String(encoded)).Split(':')[0];
}
```

### Extract Applicable Rules

From the configuration structure we generated before, we will pull out the `RedisRateLimits` section and stuff it into an array of `RateLimitRule` objects. We then need to pull out the rules that apply to the current path, group them by the number of seconds in their windows and by the path key component that's relevant for them. If we have identical path keys, e.g., two instances of `^/api/*`, we'll take the more restrictive one(fewest allowable requests). We can pull the  with a LINQ query:

```csharp
public IEnumerable<RateLimitRule> GetApplicableRules(HttpContext context)
{
    var limits = _config.GetSection("RedisRateLimits").Get<RateLimitRule[]>();
    var applicableRules = limits
        .Where(x => x.MatchPath(context.Request.Path))
        .OrderBy(x => x.MaxRequests)
        .GroupBy(x => new{x.PathKey, x.WindowSeconds})
        .Select(x=>x.First());
    return applicableRules;
}
```

### Check Limitation

Our next step is to check to see if the key is currently under a limitation. Our script expects an array of redis keys of the pattern mentioned above `path_pattern:{apiKey}:window_size_seconds`, then it needs the number of rules to be enforced, and finally, it needs the rules appended in `window_size` `num_requests` order. With the arguments all generated for the script, all we need to do is to evaluate the script and check if it returns one or not:

```csharp
private async Task<bool> IsLimited( IEnumerable<RateLimitRule> rules, string apiKey)
{
    var keys = rules.Select(x => new RedisKey($"{x.PathKey}:{{{apiKey}}}:{x.WindowSeconds}")).ToArray();
    var args = new List<RedisValue>{rules.Count()};
    foreach (var rule in rules)
    {
        args.Add(rule.WindowSeconds);
        args.Add(rule.MaxRequests);
    }
    return (int) await _db.ScriptEvaluateAsync(SlidingRateLimiter, keys,args.ToArray()) == 1;
}
```

### Block or Allow

Finally, in the `InvokeAsync` method for our middleware, we will glue all this together. First, we'll parse out the apiKey. If the apiKey isn't present, we'll return a 401. Otherwise, we will perform the rate-limiting checks and either throttle or proceed as appropriate. 

```csharp
public async Task InvokeAsync(HttpContext httpContext)
{
    var apiKey = GetApiKey(httpContext);
    if (string.IsNullOrEmpty(apiKey))
    {
        httpContext.Response.StatusCode = 401;
        return;
    }
    var applicableRules = GetApplicableRules(httpContext);
    var limited = await IsLimited(applicableRules, apiKey);
    if (limited)
    {
        httpContext.Response.StatusCode = 429;
        return;
    }
    await _next(httpContext);
}
```

## Build Controller

Under the `Controllers` Folder, add a class named `RateLimitedController`. Then, in this controller, declare a new ApiController.

```csharp
[ApiController]
[Route("api/[controller]")]
public class RateLimitedController : ControllerBase
{
}
```

In this class, add two new routes, one to `limited` and `indirectly-limited`

```csharp
[HttpGet]
[HttpPost]
[Route("limited")]
public async Task<IActionResult> Limited()
{
    return new JsonResult(new {Limited = false});
}

[HttpGet]
[HttpPost]
[Route("indirectly-limited")]
public async Task<IActionResult> IndirectlyLimited()
{
    return new JsonResult(new {NeverLimited = true});
}
```

## Add Middleware to App

Open up `startup.cs`

In the `ConfigureServices` method, add the following line:

```csharp
services.AddSingleton<IConnectionMultiplexer>(ConnectionMultiplexer.Connect("localhost"));
```

In the method `Configure` method, add the following line:

```csharp
app.UseSlidingWindowRateLimiter();
```

## Configure the App

In `appsettings.json`, or `appsettings.Development.json`, add a configuration item for the rate limits:

```json
"RedisRateLimits":[
    {
      "Path":"/api/RateLimited/limited",
      "Window":"30s",
      "MaxRequests": 5
    },
    {
      "PathRegex":"^/api/*",
      "Window":"1h",
      "MaxRequests": 50
    }
]
```

## Test it Out

All that's left is to test it out. If you go to your terminal and run `dotnet run` you can try out each of the two endpoints they are available at

`http://localhost:5000/api/ratelimited/limited` and `http://localhost:5000/api/ratelimited/indirectly-limited`

You can hit these endpoints repeatedly using:

```bash
for n in {1..7}; do echo $(curl -s -w " HTTP %{http_code}, %{time_total} s" -X POST -H "Content-Length: 0" --user "foobar:password" http://localhost:5000/api/ratelimited/limited); sleep 0.5; done
```

Which will send seven requests, two of which will be rejected after that if you run

```bash
for n in {1..47}; do echo $(curl -s -w " HTTP %{http_code}, %{time_total} s" -X POST -H "Content-Length: 0" --user "foobar:password" http://localhost:5000/api/ratelimited/indirectly-limited); sleep 0.5; done
```

It should reject another two as throttled.

## Resources

* The source code for this tutorial is located in [GitHub](https://github.com/redis-developer/rate-limiting-middleware-aspnetcore)
