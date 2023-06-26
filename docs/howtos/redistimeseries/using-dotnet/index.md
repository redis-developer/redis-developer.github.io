---
id: index-usingdotnet
title: Processing Time Series data with Redis and .NET
sidebar_label: Using Time Series with Redis and .NET
slug: /howtos/redistimeseries/using-dotnet
authors: [steve]
---

Time Series data can be used to measure anything from remote sensor readings to stock market feeds. Working with time series data in .NET is a snap with Redis and [NRedisTimeSeries](https://github.com/RedisTimeSeries/NRedisTimeSeries). In this tutorial, we'll explore how to use them together.

## Create your Project

Start out by creating a project with the command:

```bash
dotnet new console -n TimeSeriesDemoApp
```

Next, inside the `TimeSeriesDemoApp` directory, run the command:

```bash
dotnet add package NRedisTimeSeries
```

## Get a Redis Database

The next step is to get a Redis database up and running. The easiest way to do that for development purposes is to use Docker:

```
docker run -p 6379:63379 redis/redis-stack-server:latest
```

If you are well past getting started and want to get something into your production, your best bet is to run it in [Redis Enterprise](/howtos/redistimeseries/getting-started).

## Connecting to Redis

Open the `Program.cs` file, in here, create a new ConnectionMultiplexer using a connection string (which will vary based on what deployment you're using). Then, for our basic Docker setup, you'll just run:

```csharp
var muxer = ConnectionMultiplexer.Connect("localhost");
var db = muxer.GetDatabase();
```

## Create a Time Series

Now that you've gotten a handle to Redis, your next step is to initialize a time series. This will be a bit of a toy example. We are going to start off by just creating a time series called `sensor`, we will set its retention period to 1 minute, and we just give it an `id` label of `sensor-1`:

```csharp
await db.TimeSeriesCreateAsync("sensor", 60000, new List<TimeSeriesLabel>{new TimeSeriesLabel("id", "sensor-1")});
```

## Producer Task

Next, we'll create a task that will run a consumer in the background. Every second it will send a random integer between 1 and 50 into our time series.

```csharp
var producerTask = Task.Run(async()=>{
    while(true)
    {
        await db.TimeSeriesAddAsync("sensor", "*", Random.Shared.Next(50));
        await Task.Delay(1000);
    }
});
```

## Consumer Task

With the Producer created, we'll create a consumer loop that will do the opposite. Every second it will pull the most recent item in the time series off and print it out.

```csharp
var consumerTask = Task.Run(async()=>{
    while(true)
    {
        await Task.Delay(1000);
        var result = await db.TimeSeriesGetAsync("sensor");
        Console.WriteLine($"{result.Time.Value}: {result.Val}");
    }
});

await Task.WhenAll(producerTask, consumerTask);
```

## Run the App

Now that we produce and consume data run the app with `dotnet run`. This will run a continuous loop in the time series as it continually produces and consumes data points.

## Run Aggregations in the Time Series

Now what we've done so far is produce a time series of random integer data for our .NET app to consume. What if we wanted to do something a bit more interesting with it, though? Let's say we wanted to calculate a moving average every 5 seconds. We can do that with ease using Time Series.

### Create Rules to Store Aggregations

Let's run min, max, and average every 5 seconds on our Time Series. Redis will do this passively in the background after we set up some keys to store them in and set up the rules.

```csharp
var aggregations = new TsAggregation[]{TsAggregation.Avg, TsAggregation.Min, TsAggregation.Max};
foreach(var agg in aggregations)
{
    await db.TimeSeriesCreateAsync($"sensor:{agg}", 60000, new List<TimeSeriesLabel>{new ("type", agg.ToString()), new("aggregation-for", "sensor-1")});
    await(db.TimeSeriesCreateRuleAsync("sensor", new TimeSeriesRule($"sensor:{agg}", 5000, agg)));
}
```

### Process Results from Aggregations

With the rules established, we can consume the relevant time series to get the results. When we were creating the time series for our aggregations, we added a label to all of them: `new TimeSeriesLabel("aggregation-for", "sensor-1")`. We essentially told Redis that this time series would be an aggregation for `sensor-1`. We can then use that label to find just the time series aggregations of `sensor-1`. With this in mind, we can grab all the sensor aggregations in one command to Redis using `MGET`.

```csharp
var aggregationConsumerTask = Task.Run(async()=>
{
    while(true)
    {
        await Task.Delay(5000);
        var results = await db.TimeSeriesMGetAsync(new List<string>(){"aggregation-for=sensor-1"}, true);
        foreach(var result in results)
        {
            Console.WriteLine($"{result.labels.First(x=>x.Key == "type").Value}: {result.value.Val}");
        }

    }
});
```

With all these sets, you can now just update the `Task.WhenAll` call at the end to include the new consumer task:

```csharp
await Task.WhenAll(producerTask, consumerTask, aggregationConsumerTask);
```

When we run the application with `dotnet run`, you will see that the application will also print out the average, min, and max for the last 5 seconds of the time series, in addition to the regular ticks of the time series.

## Resources

- The Source Code for this demo is located in [GitHub](https://github.com/redis-developer/redis-time-series-demo-dotnet)
- The source code for NRedisTimeSeries is also located in [GitHub](https://github.com/redistimeseries/nredistimeseries)
- More information about Time Series with Redis can be found at [redistimeseries.io](https://redistimeseries.io/)
