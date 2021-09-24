
![stars](https://img.shields.io/github/stars/redis-developer/redis-developer.github.io)
![forks](https://img.shields.io/github/forks/redis-developer/redis-developer.github.io)
![issues](https://img.shields.io/github/issues/redis-developer/redis-developer.github.io)
![Twitter](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fredis-developer%2Fredis-developer.github.io)



# Redis Developer Hub

Redis Developer Hub is basically a journey carved out for Redis developer community. The journey is defined in terms of "Create > Develop > Explore" . The "Create" section allows you to get started with Redis, creating Redis database locally as well as over Cloud in the form of DBaaS. The "Develop" section allows you to build your app using Redis clients. Finally, the "Explore" section helps you to explore your Redis database using robust tools like RedisInsight, Redis Data Source for Grafana, RIOT and many more...


# Create

### Cloud

- [Redis Enterprise Cloud](https://developer.redis.com/create/rediscloud)
- [Heroku](https://developer.redis.com/create/heroku)
- [Azure Cache](https://developer.redis.com/create/azure)
- [Google Cloud](https://developer.redis.com/create/gcp)
- [AWS](https://developer.redis.com/create/aws)

### Local

- [Docker](https://developer.redis.com/create/docker/)
- [Google Kubernetes Engine](https://developer.redis.com/create/kubernetes/)
- [Mac using Homebrew](https://developer.redis.com/create/homebrew/)
- [Microsoft Windows 10](https://developer.redis.com/create/windows)
- [Build from Source](https://developer.redis.com/create/from-source/)
- [RedisMod](https://developer.redis.com/explore/redismod)


# Develop

- [Java](https://developer.redis.com/develop/java/)
  - [Java based application on Heroku using Redis](https://developer.redis.com/howtos/herokujava)
- [Python](https://developer.redis.com/develop/python/)
  - [Python based application on Heroku using Redis](https://developer.redis.com/howtos/herokupython)
- [C](https://developer.redis.com/develop/C/)
- [NodeJS](https://developer.redis.com/develop/nodejs/)
  - [NodeJS based application on Heroku using Redis](https://developer.redis.com/howtos/herokunodejs)
- [Ruby](https://developer.redis.com/develop/ruby/) 
- [Php](https://developer.redis.com/develop/php/)

# Explore

### RedisInsight - Redis GUI

- [Getting Started](https://developer.redis.com/explore/redisinsight/getting-started)
- [Visualize Redis database keys using RedisInsight Browser Tool](https://developer.redis.com/explore/redisinsight/browser)
- [Debugging Redis using RedisInsight Slowlog Tool](https://developer.redis.com/explore/redisinsight/slowlog)
- [Reduce Redis Memory usage using RedisInsight Memory Analyzer Tool](https://developer.redis.com/explore/redisinsight/memoryanalyzer)
- [Manage Your Redis Cluster using RedisInsight Cluster Management Tool](https://developer.redis.com/explore/redisinsight/cluster)
- [Using Redis Streams](https://developer.redis.com/explore/redisinsight/streams)
- [Analyze Your Redis commands using RedisInsight Profiler tool](https://developer.redis.com/explore/redisinsight/profiler)
- [Query, Visualize and Manipulate Graphs using RedisGraph Browser Tool](https://developer.redis.com/explore/redisinsight/redisgraph)
- [Writing Your Serverless function using RedisGears Browser Tool](https://developer.redis.com/explore/redisinsight/redisgears)
- [Managing time-series data using RedisTimeSeries Browser Tool](https://developer.redis.com/explore/redisinsight/redistimeseries)
- [Unified Search and Analytics using RediSearch Browser Tool](https://developer.redis.com/explore/redisinsight/redisearch)
- [Using Helm](https://developer.redis.com/explore/redisinsight/usinghelm)



## Extensibility via Redis Modules

### RediSearch

- [Getting Started](https://developer.redis.com/howtos/redisearch)
- [Building Movie Database app using RediSearch](https://developer.redis.com/howtos/moviesdatabase/getting-started)


### RedisJSON

- [Getting Started](https://developer.redis.com/howtos/redisjson)
- [How to build a Shopping cart app using NodeJS and RedisJSON](https://developer.redis.com/howtos/shoppingcart)
- [HackerNews Clone using RedisJSON](https://developer.redis.com/howtos/hackernews)


### RedisGears

- [Getting Started](https://developer.redis.com/howtos/redisgears)
- [How to build a Fraud Detection System using RedisGears and RedisBloom](https://developer.redis.com/howtos/frauddetection)
- [Building a Pipeline for Natural Language Processing using RedisGears](https://developer.redis.com/howtos/nlp)

### RedisGraph

- [Getting Started](https://developer.redis.com/howtos/redisgraph)
- [Building Movies database app using RedisGraph and NodeJS](https://developer.redis.com/howtos/redisgraphmovies)

### RedisBloom

- [Getting Started](https://developer.redis.com/howtos/redisbloom)
- [How to build a Fraud Detection System using RedisGears and RedisBloom](https://developer.redis.com/howtos/frauddetection)

### RedisTimeSeries

- [Getting Started](https://developer.redis.com/howtos/redistimeseries)
- [How to Manage IoT Sensor data using RedisTimeSeries](https://redis.com/blog/how-to-manage-real-time-iot-sensor-data-in-redis/)

### RedisAI

- [Getting Started](https://developer.redis.com/howtos/redisai)



## How to Contribute

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator. Follow the below steps to contribute to this developer site:


```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


## Testing the local site

```console
npm run serve
```
