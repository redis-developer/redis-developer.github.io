---
id: service-stack
title: How to handle blocking stream reads with ServiceStack.Redis
sidebar_label: Blocking Stream Reads with ServiceStack.Redis
slug: /develop/dotnet/streams/blocking-reads/service-stack
---

[ServiceStack.Redis](https://github.com/ServiceStack/ServiceStack.Redis) is part of the ServiceStack suite, it has some restrictions when used for commercial purposes - see their [license](https://github.com/ServiceStack/ServiceStack.Redis/blob/master/license.txt)

## Start Redis

If you're developing locally (which is what we will assume for the balance of this tutorial), you can start Redis fairly quickly with docker:

```bash
docker run -p 6379:6379 redis
```

## Create the app

We will build a simple console application for streaming telemetry using the library. To do so, use the `dotnet new` command:

```bash
dotnet new console -n StreamsWithServiceStack
```

### Add the package to your app

You can add this package to your app with:

```bash
dotnet add package ServiceStack.Redis
```

### Initialize the client manager

To initialize a client with ServiceStack, you'll need to create a [`RedisClientManager`](https://github.com/ServiceStack/ServiceStack.Redis#redis-client-managers). Then, add the following to `Program.cs`.

```csharp
var manager = new BasicRedisClientManager("localhost");
```

### Add items to streams

Redis streams are not yet fully supported by ServiceStack.Redis, however, you can run raw commands easily with the `CustomAsync` method. So let's create a new class called `Producer.cs` and add the following to it.

```csharp
public static class Producer
{
    public static async Task Produce(BasicRedisClientManager manager, CancellationToken token)
    {
        var client = await manager.GetClientAsync(token);
        var random = new Random();
        while (!token.IsCancellationRequested)
        {
            await client.CustomAsync("XADD", "telemetry", "*", "temp",random.Next(50,65), "time", DateTimeOffset.Now.ToUnixTimeSeconds());
            await Task.Delay(10000, token);
        }
    }
}
```

This code will send new telemetry every 10 seconds to the `telemetry` stream, with a `temp` record and a `time` record. 

### Reading messages

As mentioned earlier, ServiceStack does not have native support for the Streams API, so we need to do a bit of work after retrieving a record from a stream. However, this isn't a complex operation since the resulting structure is a predictable set of nested arrays going from an array of the streams requested to an array of messages retrieved from each stream to the message itself split between its id and its attributes. Finally, the field value pairs within a message; this looks something like this:

```
127.0.0.1:6379> XREAD COUNT 1 BLOCK 20000 STREAMS telemetry $
1) 1) "telemetry"
   2) 1) 1) "1642857504469-0"
         2) 1) "temp"
            2) "57"
            3) "time"
            4) "1642857504"
```

This data structure is pretty predictable to parse, so we'll add a little parsing method. First, Create `Consumer.cs` and add the following to it:

```csharp
using ServiceStack.Redis;

namespace StreamsWithServicestack;

public static class Consumer
{
    public static IDictionary<string, string> ParseStreamResult(RedisText text, out string id)
    {
        var result = new Dictionary<string, string>();

        var fieldValPairs = text.Children[0].Children[1].Children[0].Children[1].Children;
        id = text.Children[0].Children[1].Children[0].Children[0].Text;
        for (var i = 0; i < fieldValPairs.Count; i += 2)
        {
            result.Add(fieldValPairs[i].Text, fieldValPairs[i+1].Text);
        }

        return result;
    }
}
```

`ParseStreamResult` will yield the first message from the first stream of an `XREAD` or `XREADGROUP`, this isn't a fully generalized solution but will serve our purposes here.

### Reading a stream outside a group with XREAD

To read the next message in a stream, which is necessarily a blocking operation, you will use the `XREAD` command with the `BLOCK` option and the special `$` id. Then, in the `Consumer` class, add the following, which will read off the stream in a continuous loop, blocking for 20 seconds at each request.

```csharp
public static async Task Consume(IRedisClientsManagerAsync manager, CancellationToken token)
{
    var client = await manager.GetClientAsync(token);
    while (!token.IsCancellationRequested)
    {
        string id;
        var result = await client.CustomAsync("XREAD", "COUNT", 1, "BLOCK", 20000, "STREAMS", "telemetry", "$");
        var fvp = ParseStreamResult(result, out id);
        Console.WriteLine($"read: result {id} - temp: {fvp["temp"]} time: {fvp["time"]}");
    }
}
```

### Reading with consumer groups

Reading messages in a consumer group can be helpful in cases where you have a common task that you want to distribute across many consumers in a high-throughput environment. It's a two-step process:

1. Read the stream
2. Acknowledge receipt of the message

This task can be done by running an `XREADGROUP` and a `XACK` back to back. The `XREADGROUP` will take, in addition to the parameters we spoke about for the `XREAD`, the `GROUP` name, the consumer's name, and instead of taking the special `$` id, it will take the special `>` id, which will have it take the next unassigned id for the group. We'll then extract the information from it, update our average, and then acknowledge the receipt of the message.

```csharp
public static async Task ConsumeFromGroup(IRedisClientsManagerAsync manager, CancellationToken token)
{
    var client = await manager.GetClientAsync(token);
    var total = 0;
    var num = 0;
    while (!token.IsCancellationRequested)
    {
        string id;
        var result = await client.CustomAsync("XREADGROUP", "GROUP", "avg", "avg-1", "COUNT", "1", "BLOCK",
            20000, "STREAMS", "telemetry", ">");
        var fvp = ParseStreamResult(result, out id);
        total += int.Parse(fvp["temp"]);
        num++;
        Console.WriteLine(
            $"Group-read: result {id} - temp: {fvp["temp"]} time: {fvp["time"]}, current average: {total / num}");
        await client.CustomAsync("XACK", "telemetry", "avg", id);
    }
}
```

### Create the group and start the tasks

The final bit we need is to create the group and start up all the tasks. We'll use the `XGROUP` command with the `MKSTREAM` option to create the group. We'll then start up all the tasks we need for our producer and consumers, and we'll await everything. Add the following to your `Program.cs` file:

```csharp
using ServiceStack.Redis;
using StreamsWithServicestack;

var manager = new BasicRedisClientManager("localhost");
var asyncClient = await manager.GetClientAsync();

var tokenSource = new CancellationTokenSource();
var token = tokenSource.Token;

try
{
    await asyncClient.CustomAsync("XGROUP", "CREATE", "telemetry", "avg", "0-0", "MKSTREAM");
}
catch (Exception ex)
{
    Console.WriteLine(ex);
}

var writeTask = Producer.Produce(manager, token);
var readTask = Consumer.Consume(manager, token);
var groupReadTask = Consumer.ConsumeFromGroup(manager, token);

await Task.WhenAll(writeTask, readTask, groupReadTask);

```

## Run the app

All that's left to do is to run the app, and you'll see a continuous stream of messages coming in every 10 seconds. You can run the app by running:

```bash
dotnet run
```

## Resources:

* The source for this tutorial is in [GitHub](https://github.com/redis-developer/redis-streams-with-dotnet/tree/main/StreamsWithServicestack)
* Redis University has an extensive [course](https://university.redis.com/courses/ru202/) on Redis Streams where you can learn everything you need to know about them.
* You can learn more about Redis Streams in the [Streams Info](https://redis.io/topics/streams-intro) article on redis.io