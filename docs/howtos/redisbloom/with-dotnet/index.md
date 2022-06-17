---
id: redisbloom-withdotnet
title: Using RedisBloom with .NET
sidebar_label: Using RedisBloom with .NET
slug: /howtos/redisbloom/with-dotnet/redisbloom-withdotnet
authors: [steve]
---

Using RedisBloom allows you to efficiently keep track of presence, heavy hitters, and counts on large streams of data. To use RedisBloom in .NET, you should use the [StackExchange.Redis](https://github.com/stackexchange/stackexchange.redis) library. To get started with that package, follow our [getting started guide](https://developer.redis.com/develop/dotnet/). Once you have a reference to an `IDatabase` object, you will need to use the `db.Execute` and `db.ExecuteAsync` methods to run the custom commands you want against redis bloom.

## Bloom Filters

Bloom Filters are a powerful data structure that can tell if an item is in a set, think a username on a sign-up form. They're incredibly compact, requiring only 10-20 bits per item you want to add, and extremely quick to add items to, and equally fast to determine if an item is in a set or not.

### Create a Filter

You don't need to create a Bloom Filter explicitly as any call of `BF.ADD` to a non-existent key will automatically create a Bloom Filter for you. However, if you want to tell Redis ahead of time how much data the Bloom Filter can expect and the error rate that you want for that data (the number of false positives it will report), You can use the `BF.RESERVE` command:

```csharp
await db.ExecuteAsync("BF.RESERVE", "bf:username", .01, 10000);
```

The above command will reserve a Bloom Filter on the key `bf:username` that expects 10000 records and will have an error rate of 1%.

### Adding to a Filter

To add to a Bloom Filter, all you need is to use the `BF.ADD` command:

```csharp
await db.ExecuteAsync("BF.ADD", "bf:username", "Kermit");
```

The preceding code will add the username `Kermit` to the `bf:username` filter.

### Check if an Item is in a Filter

To check if an item has been added to a Bloom Filter yet, you will use the `BF.EXISTS` command:

```csharp
var exists = await db.ExecuteAsync("BF.EXISTS", "bf:username", "Kermit") == 1;
```

After running that command, if the Bloom Filter reports that it contains the item, `exists` will be true; otherwise, `exists` will be false.

## Count-Min Sketch

You can use Count-Min Sketches to count the number of times an item has been added to a set quickly and compactly. Although, of course, like other probabilistic data structures, it has some margin of error. In this case, it can over count the number of occurrences. The dimensions of the sketch determine the likelihood of this.

### Creating a Count-Min Sketch

There are two ways to create a Count-Min Sketch, by probability and by dimension. Creating a Count-Min Sketch by probability will automatically generate a Count-Min Sketch based on the amount of overestimation you want to allow and the likelihood of overestimating a given element. If you want to initialize by dimensions, a Count-Min Sketch will initialize with the provided width and depth.

```csharp
await db.ExecuteAsync("CMS.INITBYPROB", "cms:views", .1, .01);
```

This code will initialize a Count-Min Sketch. The sketch will have an acceptable overcount of 10% and a probability of overcounting of 1%.

### Adding Items to a Count-Min Sketch

To add an item to a Count-Min Sketch, you call the `CMS.INCRBY` command, passing in the quantity of the given item you want to add to the sketch.

```csharp
await db.ExecuteAsync("CMS.INCRBY", "cms:views", "Gangnam Style", 1);
await db.ExecuteAsync("CMS.INCRBY", "cms:views", "Baby Shark", 1);
await db.ExecuteAsync("CMS.INCRBY", "cms:views", "Gangnam Style", 2);
```

The above will add three views of Gangnam Style to the sketch and one view of Baby Shark.

### Querying the Sketch

To query the number of occurrences of an element in the sketch, you need to use the `CMS.QUERY` command:

```csharp
var numViewsGangnamStyle = (long)await db.ExecuteAsync("CMS.QUERY", "cms:views", "Gangnam Style");
var numViewsBabyShark = (long)await db.ExecuteAsync("CMS.QUERY", "cms:views", "Baby Shark");
Console.WriteLine($"Gangnam Style Views: {numViewsGangnamStyle}");
Console.WriteLine($"Baby Shark Views: {numViewsBabyShark}");
```

## Cuckoo Filters

Cuckoo Filters solve a similar problem to Bloom Filters; they allow you to determine if an item has been added to a set yet. However, Cuckoo Filters have slightly different characteristics than Bloom Filters. For example, you may add the same item to a Cuckoo Filter more than once, and they do support delete operations (which introduces the possibility of false negatives in addition to false positives).

### Creating a Cuckoo Filter

Similar to a Bloom Filter, a Cuckoo Filter is automatically created by adding an item to a Cuckoo Filter that does not exist. However, you may want to reserve a Cuckoo Filter ahead of time explicitly, so it knows precisely how many items you expect and how to expand. To do this, just run the `CF.RESERVE` command:

```csharp
await db.ExecuteAsync("CF.RESERVE", "cf:emails", 10000);
```

### Adding to a Cuckoo Filter

To add an item to a Cuckoo Filter, use the `CF.ADD` command:

```csharp
await db.ExecuteAsync("CF.ADD", "cf:emails", "foo@bar.com");
await db.ExecuteAsync("CF.ADD", "cf:emails", "James.Bond@mi6.com");
```

The above will add `foo@bar.com` and `James.Bond@mi6.com` to the Cuckoo Filter.

### Checking Item Presence in a Cuckoo Filter

To check if an item has been added to a Cuckoo Filter yet, use the `CF.EXISTS` command:

```csharp
var jamesEmailExists = (int) await db.ExecuteAsync("CF.EXISTS", "cf:emails", "James.Bond@mi6.com") == 1;
var str = jamesEmailExists
    ? "James.Bond@mi6.com has already been added"
    : "James.Bond@mi6.com has not been added";
Console.WriteLine(str);
```

## Top-K

The Top-K data structure allows you to keep a compact leader board of heavy-hitters. This data structure can be extremely useful when keeping track of the most popular items in an enormous stream of data as it makes it so you don't have to keep track of all of the counts of all of your records.

### Initializing a Top-K

To initialize a Top-K, use the `TOPK.RESERVE` command. This command will reserve a Top-K that will keep track of the highest `k` items:

```csharp
await db.ExecuteAsync("TOPK.RESERVE", "topk:views", 5);
```

The above, for example, will keep track of the five most viewed videos sent to the Top-K.

### Add Items to the Top-K

Adding Items to a Top-K requires the use of the `TOPK.ADD` command, this command can take however many items you want to insert into it, so if you get a batch of items to send at once, it may make sense to send them all across at the same time. For example, let's say we wanted to send 10,000 updates to the Top-K at the same time from a random set of videos:

```csharp
var videos = new[] {"Gangnam Style", "Baby Shark", "Despacito", "Uptown Funk", "See You Again", "Hello", "Roar", "Sorry"};
var rand = new Random();
var args = new List<string>(10001){"topk:views"};
for (var i = 0; i < 10000; i++)
{
    args.Add(videos[rand.Next(videos.Length)]);
}

await db.ExecuteAsync("TOPK.ADD", args.ToArray());
```

This code will send them all across in one shot. You can, of course, chunk the items and send them in batches as well. Regardless, this will add items to your Top-K.

### List the Top K Items

To list the items in your Top-K, you need to query the Top-K using the `TOPK.LIST` command:

```csharp
var topK = (RedisResult[]) await db.ExecuteAsync("TOPK.LIST", "topk:views");
foreach (var item in topK)
{
    Console.WriteLine(item);
}
```

This code will get all the items back for you and print them out.

### Query if an Item is in the Top-K

To see if a given item is present in the Top-K, you would use `TOPK.QUERY`, passing in the item you want to check membership of:

```csharp
var BabySharkInTopK = (int) await db.ExecuteAsync("TOPK.QUERY", "topk:views", "Baby Shark") == 1;
Console.WriteLine(BabySharkInTopK ? "Baby Shark is in the Top 5" : "Baby Shark is Not in the Top 5" );
```

The above code will check if Baby Shark is in the Top 5 for video views from our above example.

## Resources

- The Code for this Demo can be found in [GitHub](https://github.com/redis-developer/redis-bloom-dotnet-demo)
