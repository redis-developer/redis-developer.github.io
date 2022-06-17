---
id: index-basic-caching
title: How to add a basic API Cache to your ASP.NET Core application
sidebar_label: Basic API Caching using ASP.NET Core
slug: /develop/dotnet/aspnetcore/caching/basic-api-caching
authors: [steve]
---

Redis is synonymous with caching, and for a good reason, Redis is fast and easy to get up and running with and does an excellent job as a cache.

There are two big reasons to use a cache over the source of truth.

1. Time - caches are much faster
2. Cost - sometimes going to a source of truth has a monetary cost. For example, API endpoints sometimes charge per request. This means that we want to limit unnecessary requests to a particular endpoint.

In the second case, unnecessary requests to the API endpoint are wasteful and can add up to a high financial cost to the application over time. Therefore, in this tutorial, we will look at caching the results of API requests to prevent us from having to make round trips to an API.

For our example, we will use the US National Weather Service's (NWS) Weather API - which is free and requires no authentication beyond a user-agent. We will build an API to get a weather forecast based on latitude and longitude using ASP.NET Core.

## Prerequisites

- IDE to write C# code - Visual Studio, Rider, VS Code, etc. . .
- [.NET 6 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
- [Docker](https://www.docker.com/products/docker-desktop)

## Start Redis

Let's start out by starting redis; for development purposes, you can just use docker:

```bash
docker run -p 6379:6379 redis
```

If you are getting ready to deploy to production, you may want to make use of the [Redis Cloud](https://app.redislabs.com/)

## Create the Project

Next, we'll create the ASP.NET Core API project using the .NET CLI.

```bash
dotnet new webapi -n BasicWeatherCacheApp
```

Then we'll cd into the `BasicWeatherCacheApp` directory that we just created, and we will add the `StackExchange.Redis` package to the project:

```bash
dotnet add package StackExchange.Redis
```

## Add Redis Cache to ASP.NET Core app

Open up the `program.cs` file. This is where the services are all defined and injected into the project. Add the following to add the StackExchange.Redis `ConnectionMultiplexer` Redis to the ASP.NET Core application as well as an HttpClient:

```csharp
builder.Services.AddSingleton<IConnectionMultiplexer>(ConnectionMultiplexer.Connect("localhost"));
builder.Services.AddHttpClient();
```

## Create Data Structures to Hold Results

The resulting structure from the NWS is a bit verbose, but we will endeavor to just capture the future forecasts for a particular area.

We'll create two structures, the first will contain the actual forecast, and the second will have the list of forecasts from a given request, as well as the time it took to accumulate the forecasts. For the first, we'll use the default `WeatherForecast` class that's created in the template, open up `WeatherForecast.cs`, and replace its contents with:

```csharp
public class WeatherForecast
{
    [JsonPropertyName("number")]
    public int Number { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; }

    [JsonPropertyName("startTime")]
    public DateTime StartTime { get; set; }

    [JsonPropertyName("endTime")]
    public DateTime EndTime { get; set; }

    [JsonPropertyName("isDayTime")]
    public bool IsDayTime { get; set; }

    [JsonPropertyName("temperature")]
    public int Temperature { get; set; }

    [JsonPropertyName("temperatureUnit")]
    public string? TemperatureUnit { get; set; }

    [JsonPropertyName("temperatureTrend")]
    public string? TemperatureTrend { get; set; }

    [JsonPropertyName("windSpeed")]
    public string? WindSpeed { get; set; }

    [JsonPropertyName("windDirection")]
    public string? WindDirection { get; set; }

    [JsonPropertyName("shortForecast")]
    public string? ShortForecast { get; set; }

    [JsonPropertyName("detailedForecast")]
    public string? DetailedForecast { get; set; }
}
```

Next, create the file `ForecastResult.cs` and add the following to it:

```csharp
public class ForecastResult
{
    public long ElapsedTime { get; }
    public IEnumerable<WeatherForecast> Forecasts { get; }

    public ForecastResult(IEnumerable<WeatherForecast> forecasts, long elapsedTime)
    {
        Forecasts = forecasts;
        ElapsedTime = elapsedTime;
    }
}
```

## Dependency Injection Into the Weather Forecast Controller

Now that we've set up our app, we need to configure our controller. First, open the `Controllers/WeatherForecastController` (this controller is automatically created along with the template) and add the following code to inject what we need into it.

```csharp
private readonly HttpClient _client;
private readonly IDatabase _redis;

public WeatherForecastController(HttpClient client, IConnectionMultiplexer muxer)
{
    _client = client;
    _client.DefaultRequestHeaders.UserAgent.Add(new ProductInfoHeaderValue("weatherCachingApp","1.0") );
    _redis = muxer.GetDatabase();
}
```

## Query the API

To query the Weather API to find the forecast for a particular latitude and longitude, we need to go through a 2 step process. First, there's no natural API for querying the forecast based on geolocation. Instead, every geolocation is assigned a particular office out of which it's monitored, and each office has a grid 2D grid that a specific latitude and longitude will map to. Fortunately, there's a `points` API endpoint to which you can pass your latitude and longitude. This will give you the particular office out of which the point is valid and the x/y grid coordinates for that point. You need to query the forecast endpoint for that grid points for that office and then pull out the forecasted periods. The following accomplishes all this.

```csharp
private async Task<string> GetForecast(double latitude, double longitude)
{
    var pointsRequestQuery = $"https://api.weather.gov/points/{latitude},{longitude}"; //get the URI
    var result = await _client.GetFromJsonAsync<JsonObject>(pointsRequestQuery);
    var gridX = result["properties"]["gridX"].ToString();
    var gridY = result["properties"]["gridY"].ToString();
    var gridId = result["Properties"]["gridId"].ToString();
    var forecastRequestQuery = $"https://api.weather.gov/gridpoints/{gridId}/{gridX},{gridY}/forecast";
    var forecastResult = await _client.GetFromJsonAsync<JsonObject>(forecastRequestQuery);
    var periodsJson = forecastResult["properties"]["periods"].ToJsonString();
    return periodsJson;
}
```

## Write the Forecast Action

Given the multiple API Calls, it's clear why using a cache is critical for our application. These forecasts do not update very often, every 1-3 hours. That means making two back-to-back API requests can be expensive in both time and money. In the case of this API, there's no financial cost associated with the requests. However, with a commercial API, there often times will be per-request costs. When we are writing this action, we will check the cache. If the cache contains the relevant forecast, we will return that. Otherwise, we will hit the API, save the result, and set the key to expire. We'll time it and then reply back with the result and time it took.

```csharp
[HttpGet(Name = "GetWeatherForecast")]
public async Task<ForecastResult> Get([FromQuery] double latitude, [FromQuery] double longitude)
{
    string json;
    var watch = Stopwatch.StartNew();
    var keyName = $"forecast:{latitude},{longitude}";
    json = await _redis.StringGetAsync(keyName);
    if (string.IsNullOrEmpty(json))
    {
        json = await GetForecast(latitude, longitude);
        var setTask = _redis.StringSetAsync(keyName, json);
        var expireTask = _redis.KeyExpireAsync(keyName, TimeSpan.FromSeconds(3600));
        await Task.WhenAll(setTask, expireTask);
    }

    var forecast =
        JsonSerializer.Deserialize<IEnumerable<WeatherForecast>>(json);
    watch.Stop();
    var result = new ForecastResult(forecast, watch.ElapsedMilliseconds);

    return result;
}
```

## Run the App

All that's left to do now is run the app. Run `dotnet run` in your console, and open up to `https://localhost:PORT_NUMBER/swagger/index.html` and use the GUI to send a request. Otherwise, you can use a cURL to send the request. The first time you send a new latitude and longitude, you'll notice that it takes pretty long to send the request, ~1 second. When you make the request again, and it hits the cache, it will drop dramatically to ~1-5ms.

## Resources

- Source code for this demo is located in [GitHub](https://github.com/redis-developer/basic-aspnetcore-api-caching)
- More documentation for the StackExchange.Redis library is located on it's [docs site](https://stackexchange.github.io/StackExchange.Redis/)
