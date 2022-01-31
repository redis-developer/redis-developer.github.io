---
id: stream-basics
title: How to use Redis Streams with .NET
sidebar_label: Using Redis Streams with .NET
slug: /develop/dotnet/streams/stream-basics
---

Redis Streams are a powerful data structure that allows you to use Redis as a sort of Message bus to transport messages between different application components. The way streams operate in Redis is very fast and memory efficient. This article will not go over the minutia of every command available for Redis Streams, but rather it's aimed to provide a high-level tutorial for how you can use Redis Streams with .NET.

## Start Redis

The first thing we'll want to do is start Redis. If you already have an instance of Redis, you can ignore this bit and adjust the connection step below to connect to your instance of Redis. Redis is straightforward to get up and running; you can do so using docker:

```bash
docker run -p 6379:6379 redis
```

## Create your .NET app

For simplicity's sake, we'll stick to a simple console app, from which we'll spin out a few tasks that will perform the various add/read operations that we'll use. Create a new console app with the `dotnet new` command:

```bash
dotnet new console -n RedisStreamsBasics
```

## Add StackExchange.Redis package

Next, we'll need to add the client library that we will use to interface with Redis StackExchange.Redis is the canonical package, thus, we will use that in this example. First cd into the RedisStreamsBasics directory and then run the `dotnet add package` directory:


```bash
cd RedisStreamsBasics
dotnet add package StackExchange.Redis
```

## Initialize the Multiplexer

StackExchange.Redis centers more or less around the `ConnectionMultiplexer`, which handles the routing and queuing of all commands that you send to Redis. So our first step that's code-related is to initialize the Multiplexer. Creating the Multiplexer is pretty straightforward; open up `Program.cs` in your IDE and add the following bit to it:

```csharp
using StackExchange.Redis;

var tokenSource = new CancellationTokenSource();
var token = tokenSource.Token;

var muxer = ConnectionMultiplexer.Connect("localhost");
var db = muxer.GetDatabase();

const string streamName = "telemetry";
const string groupName = "avg";
```

We're also initializing a `CancellationToken` and `CancellationTokenSource` here. We'll set these up towards the end of this tutorial so that this application does not run endlessly. Also, we're creating a couple of constants, the stream's name and the group's name, that we'll use later, and we are also grabbing an `IDatabase` object from the Multiplexer to use

## Create the consumer group

A Consumer Group in a Redis Stream allows you to group a bunch of consumers to pull messages off the stream for the group. This functionality is excellent when you have high throughput workloads, and you want to scale out the workers who will process your messages. To use a consumer group, you first need to create it. To create a consumer group, you'll use the `StreamCreateConsumerGroupAsync` method, passing in the `streamName` and `groupName`, as well as the starting id - we'll use the `0-0` id (the lowest id allowable in Redis Streams). Before invoking this call, it's wise to validate that the group doesn't exist yet, as creating an already existing user group will result in an error. So first, we'll check if the stream exists; if it doesn't, we can create the group. Next, we'll use the stream info method to see if any groups match the `avg` `groupName`.

```csharp
if (!(await db.KeyExistsAsync(streamName)) || 
    (await db.StreamGroupInfoAsync(streamName)).All(x=>x.Name!=groupName))
{
    await db.StreamCreateConsumerGroupAsync(streamName, groupName, "0-0", true);
}
```

## Spin up producer task

Three tasks will run in parallel for our program. The first is the `producerTask`. This Task will write a random number between 50 and 65 as the `temp` and send the current time as the `time`. 

```csharp
var producerTask = Task.Run(async () =>
{
    var random = new Random();
    while (!token.IsCancellationRequested)
    {
        await db.StreamAddAsync(streamName,
            new NameValueEntry[]
                {new("temp", random.Next(50, 65)), new NameValueEntry("time", DateTimeOffset.Now.ToUnixTimeSeconds())});
        await Task.Delay(2000);
    }
});
```

## Parser helper function for reading results

The results retrieved from Redis will be in a reasonably readable form; all the same, it is helpful for our purposes to parse the result into a dictionary. To do this, add an inline function to handle the parsing:

```csharp
Dictionary<string, string> ParseResult(StreamEntry entry) => entry.Values.ToDictionary(x => x.Name.ToString(), x => x.Value.ToString());
```

> Note: Stream messages enforce no requirement that field names be unique. We use a dictionary for clarity sake in this example, but you will need to ensure that you are not passing in multiple fields with the same names in your usage to prevent an issue using a dictionary.


## Spin up most recent element task

Next, we'll need to spin up a task to read the most recent element off of the stream. To do this, we'll use the `StreamRangeAsync` method passing in two special ids, `-` which means the lowest id, and `+`, which means the highest id. Running this command will result in some duplication. This redundancy is necessary because the `StackExchange.Redis` library does not support blocking stream reads and does not support the special `$` character for stream reads. Overcoming this behavior is explored in-depth in the [Blocking Reads](blocking-reads) tutorial. For this tutorial, you can manage these most-recent reads with the following code:

```csharp
var readTask = Task.Run(async () =>
{
    while (!token.IsCancellationRequested)
    {
        var result = await db.StreamRangeAsync(streamName, "-", "+", 1, Order.Descending);
        if (result.Any())
        {
            var dict = ParseResult(result.First());
            Console.WriteLine($"Read result: temp {dict["temp"]} time: {dict["time"]}");
        }

        await Task.Delay(1000);
    }
});
```

## Spin up consumer group read Task

The final Task we'll spin up is the read task for the consumer group. Due to the nature of consumer groups, you can spin this Task up multiple times to scale out the processing as needed. It's the responsibility of Redis to keep track of which messages it's distributed to the consumer group. As well as tracking which messages Consumers have acknowledged. Acknowledging messages adds a layer of validation that all messages were processed. If something happens to one of your processing tasks or processes, you can more easily know what messages you missed. 

We'll check to see if we have a recent message-id to handle all of this. If we do, we will send an acknowledgment to the server that the id was processed. Then we will grab the next message to be processed from the stream, pull out the data and the id and print out the result.

```csharp
double count = default;
double total = default;

var consumerGroupReadTask = Task.Run(async () =>
{
    string id = string.Empty;
    while (!token.IsCancellationRequested)
    {
        if (!string.IsNullOrEmpty(id))
        {
            await db.StreamAcknowledgeAsync(streamName, groupName, id);
            id = string.Empty;
        }
        var result = await db.StreamReadGroupAsync(streamName, groupName, "avg-1", ">", 1);
        if (result.Any())
        {
            id = result.First().Id;
            count++;
            var dict = ParseResult(result.First());
            total += double.Parse(dict["temp"]);
            Console.WriteLine($"Group read result: temp: {dict["temp"]}, time: {dict["time"]}, current average: {total/count:00.00}");
        }
        await Task.Delay(1000);
    }
});
```

## Set timeout and await tasks

Finally, we need to set the timeout and await the tasks at the end of our program:

```csharp
tokenSource.CancelAfter(TimeSpan.FromSeconds(20));
await Task.WhenAll(producerTask, readTask, consumerGroupReadTask);
```

## Run the app

You can now run this app with the `dotnet run` command.

## Resources:

* The source for this tutorial is in [GitHub](https://github.com/redis-developer/redis-streams-with-dotnet/tree/main/RedisStreamsStackExchange)
* Redis University has an extensive [course](https://university.redis.com/courses/ru202/) on Redis Streams where you can learn everything you need to know about them.
* You can learn more about Redis Streams in the [Streams Info](https://redis.io/topics/streams-intro) article on redis.io