module.exports = {
  docs: [
    {
      type: 'link',
      label: 'Home',
      href: '/',
    },
     {
      type: 'category',
      label: 'Create',
      items: [
        'create/index-create',
        'create/rediscloud/index-rediscloud',
        'create/heroku/index-heroku',
        'create/azure/index-azure',
        'create/gcp/index-gcp',
        'create/aws/index-aws',
        'create/docker/index-docker',
        'create/kubernetes/index-kubernetes',
        'create/homebrew/index-homebrew',
        'create/windows/index-windows',
        'create/from-source/index-from-source',
      ]
    },
    {
      type: 'category',
      label: 'Develop',
      items: [
        'develop/index-develop',
        'develop/java/index-java',
        'develop/python/index-python',
        'develop/node/index-node',
        'develop/golang/index-golang',
        'develop/ruby/index-ruby',
        'develop/php/index-php',
     ]
    },
    {
      type: 'category',
      label: 'Explore',
      items: [
        'explore/index-explore',
        'explore/redisdatasource/index-redisdatasource',
        {
         type: 'category',
         label: 'RedisInsight',
         items: [
          'explore/redisinsight/index-redisinsight',
          'explore/redisinsight/getting-started/index-gettingstarted',
          'explore/redisinsight/browser/index-browser',
          'explore/redisinsight/slowlog/index-slowlog',
          'explore/redisinsight/memoryanalyzer/index-memoryanalyzer',
          'explore/redisinsight/cluster/index-cluster',
          'explore/redisinsight/streams/index-streams',
        ] 
        },
          'explore/redismod/index-redismod',
          'explore/riot/index-riot',
          
     ]
    },
    {
      type: 'category',
      label: 'HowTos & Tutorials',
      items: [
           'howtos/index-howtos',
           'howtos/redisearch/index-redisearch',
           'howtos/redisjson/index-redisjson',
           'howtos/redistimeseries/index-redistimeseries',
           'howtos/redisgraph/index-redisgraph',
           'howtos/redisbloom/index-redisbloom',
           'howtos/redisgears/index-redisgears',
           'howtos/shoppingcart/index-shoppingcart',
           'howtos/leaderboard/index-leaderboard',
           'howtos/ratelimiting/index-ratelimiting',
           'howtos/caching/index-caching',
          {
          type: 'category',
          label: 'How to list & search Movies database using RediSearch',
          items: [
           'howtos/moviesdatabase/getting-started/index-gettingstarted',
           'howtos/moviesdatabase/install/index-install',
           'howtos/moviesdatabase/create/index-create',
           'howtos/moviesdatabase/query/index-query',
           'howtos/moviesdatabase/manage/index-manage',
           'howtos/moviesdatabase/import/index-import', 
           'howtos/moviesdatabase/querymovies/index-querymovies',
           'howtos/moviesdatabase/aggregation/index-aggregation',
           'howtos/moviesdatabase/advancedoption/index-advancedoption',
           'howtos/moviesdatabase/sampleapp/index-sampleapp',
          ]
         },
           'howtos/chatapp/index-chatapp',
           'howtos/frauddetection/index-frauddetection',
           'howtos/nlp/index-nlp',
           'howtos/hackernews/index-hackernews',
           'howtos/analytics/index-analytics',
           'howtos/popupstore/index-popupstore',
       ]
     }, 
    

]
};
