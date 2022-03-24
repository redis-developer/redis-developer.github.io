---
id: cs-redis
title: Blocking Stream reads with CSRedis
sidebar_label: Blocking Stream Reads with CSRedis
slug: /develop/dotnet/streams/blocking-reads/cs-redis
authors: [steve]
---

[CSRedis](https://github.com/2881099/csredis) is an MIT Licensed Open source project which provides a straightforward interface for executing commands. CSRedis can be used effectively for performing blocking stream reads with the one major downside that it does not support any async API for them.

## Start Redis

Before we begin, we'll start up Redis. If you are developing locally, which we'll assume you are for the duration of this tutorial, you can start Redis with a simple docker command.

```bash
docker run -p 6379:6379 redis
```

## Create the app

We will build a simple console application for streaming telemetry using the library. To do so, use the `dotnet new` command:

```bash
dotnet new console -n StreamsWithCSRedis
```

## Add the package to your app

Run the `cd StreamsWithCSRedis` command to change directories into the application's directory and run the following to add the CSRedis package

```bash
dotnet add package CSRedisCore
```

## Create group

When we start up our app, the first thing we'll do is create our `avg` group. To make this group, open up `Program.cs` and add to it the following:

```csharp
var cancellationTokenSource = new CancellationTokenSource();
var token = cancellationTokenSource.Token;

var client = new CSRedisClient("localhost");
if (!client.Exists("stream") || client.XInfoStream("stream").groups == 0)
{
    client.XGroupCreate("stream", "avg", "$", MkStream: true);
}
```

This code will create a cancellation token for the threads we'll spin up to do the writes/reads to the stream, create a client, check if our `avg` group already exists, and finally create the `avg` group if it doesn't.

## Write to the stream

Next, we'll write out to the stream. We'll call the stream `stream`, and send a `temp` and `time` field along with the stream. We'll do this every 2 seconds. We'll put this on its own thread, since this operation isn't actually 'blocking' in the Redis sense, it may be alright to spin it out on its task, but as the other two operations in here are blocking, it's better to spin it off on its own thread as well. Add the following to your `Program.cs` file:

```csharp
var writeThread = new Thread(() =>
{
    var writeClient = new CSRedisClient("localhost");
    var random = new Random();
    while (!token.IsCancellationRequested)
    {
        writeClient.XAdd("stream", new (string, string)[]{new ("temp", random.Next(50,65).ToString()), new ("time", DateTimeOffset.Now.ToUnixTimeSeconds().ToString())});
        Thread.Sleep(2000);
    }
});
```

## Parsing read results

The next issue we'll need to dispose of is parsing the read results from the `XREAD` and `XREADGROUP` commands. CSRedis handles return types generally as tuples in a reply, so we'll need a way to parse the result into something more useable. In this case, we'll parse the results into a dictionary. For the sake of brevity, we will keep everything in this project in `Program.cs` on the top-level method, so we'll declare a `Func` to handle the parsing. This function will pull the first message from the first stream and arrange the values returned into a dictionary. A couple of things to consider here if you wanted to expand this further is that you could reply with a dictionary of dictionaries if you were pulling back multiple messages from multiple streams. This complexity is intentionally left out.


```csharp
Func<(string key, (string id, string[] items)[] data), Dictionary<string,string>> parse = delegate((string key, (string id, string[] items)[] data) streamResult)
{
    var message = streamResult.data.First().items;
    var result = new Dictionary<string, string>();
    for (var i = 0; i < message.Length; i += 2)
    {
        result.Add(message[i], message[i+1]);
    }

    return result;
};
```

## Blocking XREAD

There are two primary types of 'read' methods, `XREAD` and `XREADGROUP`, this is in addition to the various range methods, which are their category and operate semantically differently from the read operations. `XREAD` lets you read off a given stream and read the *next* item that hit's the stream. You can do this with the special `$` id. For our purposes here, we are going to block for two seconds, or whenever we get a response back from redis, whichever comes first:

```csharp
var readThread = new Thread(() =>
{
    var readClient = new CSRedisClient("localhost");
    while (!token.IsCancellationRequested)
    {
        var result = readClient.XRead(1, 5000, new (string key, string id)[] {new("stream", "$")});
        if (result != null)
        {
            var dictionary = parse(result[0]);
            Console.WriteLine($"Most recent message, time: {dictionary["time"]} temp: {dictionary["temp"]}");
        }
    }
});
```

## Blocking XREADGROUP

Blocking `XREADGROUP` commands operate very similarly to `XREAD`. In this case, however, the creation of the group told us what id to start at, and by passing in the `>` we necessarily start off at the next message in the queue. Because we are reading out of a group, we'll also want to `XACK` to any messages that we pull down. Also, since this is our average group, we'll maintain an average for our stream's temperatures.

```csharp
var total = 0;
var count = 0;
var groupReadThread = new Thread(() =>
{
    var groupReadClient = new CSRedisClient("localhost");
    var id = string.Empty;
    while (!token.IsCancellationRequested)
    {
        if (!string.IsNullOrEmpty(id))
        {
            client.XAck("stream", "avg", id);
        }
        var result =
            groupReadClient.XReadGroup("avg", "avg-1", 1, 5000, new (string key, string id)[] {new("stream", ">")});
        if (result != null)
        {
            id = result.First().data.First().id;
            var dictionary = parse(result[0]);
            if (dictionary.ContainsKey("temp"))
            {
                count++;
                total += int.Parse(dictionary["temp"]);
                double avg = (double) total / count; 
                Console.WriteLine($"Most recent group message, time: {dictionary["time"]} temp: {dictionary["temp"]} avg: {avg:00.00}");
            }
        }
    }
});
```

## Spin up threads

The last thing we'll need to do is start up all the threads, set a cancellation timeout (so the app doesn't run forever), and join all the threads back together:

```csharp
readThread.Start();
writeThread.Start();
groupReadThread.Start();

cancellationTokenSource.CancelAfter(TimeSpan.FromSeconds(10));

readThread.Join();
writeThread.Join();
groupReadThread.Join();
```

## Run the app

Now that the app is written, all that's left to do is run it. You can do so by running `dotnet run in your terminal.

## Resources:

* The source for this tutorial is in [GitHub](https://github.com/redis-developer/redis-streams-with-dotnet/tree/main/StreamsWithCSRedis)
* Redis University has an extensive [course](https://university.redis.com/courses/ru202/) on Redis Streams where you can learn everything you need to know about them.
* You can learn more about Redis Streams in the [Streams Info](https://redis.io/topics/streams-intro) article on redis.io