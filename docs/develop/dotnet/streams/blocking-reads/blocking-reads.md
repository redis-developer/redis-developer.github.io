---
id: blocking-reads
title: Blocking Stream Reads
sidebar_label: Blocking Stream Reads
slug: /develop/dotnet/streams/blocking-reads
---

[Redis Streams](https://redis.io/topics/streams-intro) can be used to build a message bus for our applications. The ability of multiple readers to consume messages from a Redis Stream in a consumer group makes Redis Streams ideal for a variety of use cases where you want the assurance of message delivery and where you have high volumes of data you want to distribute across multiple consumers.

One of the great things about Redis Streams is that you can reduce the number of requests you need to make to Redis by having consumers use blocking requests and wait for new messages to come into the stream. In terms of commands, this would look something like this:

```bash
XREADGROUP GROUP average avg1 COUNT 1 BLOCK 1000 STREAMS numbers >
```

Or, for a simple XREAD, you can wait for the next message to come in:

```bash
127.0.0.1:6379> XREAD BLOCK 1000 STREAMS numbers $
```

The main .NET Redis client [StackExchange.Redis](https://github.com/StackExchange/StackExchange.Redis) does not support this particular feature. The reason for this lack of support is architectural, the StackExchange.Redis client centers all commands to Redis around a single connection. Because of this, blocking that connection for a single client will block all other requests to Redis. If we want to do blocking stream reads with Redis in .NET we'll need to use different clients to do so. Contained in this section are tutorials for doing so with both [ServiceStack.Redis](blocking-reads/service-stack) and [CsRedis](blocking-reads/cs-redis)