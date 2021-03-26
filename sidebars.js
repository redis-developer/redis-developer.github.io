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
        'create/rediscloud/index-rediscloud',
        'create/heroku/index-heroku',
        'create/azure/index-azure',
        'create/gcp/index-gcp',
        'create/aws/index-aws',
        'create/docker/index-docker',
        'create/kubernetes/index-kubernetes',
        'create/from-source/index-from-source',
      ]
    },
    {
      type: 'category',
      label: 'Develop',
      items: [
        'develop/java/index-java',
        'develop/python/index-python',
        'develop/node/index-node',
        'develop/golang/index-golang',
        'develop/rust/index-rust',
        'develop/ruby/index-ruby',
        'develop/php/index-php',
     ]
    },
    {
      type: 'category',
      label: 'Explore',
      items: [
        'explore/redisinsight/index-redisinsight',
        'explore/redisdatasource/index-redisdatasource',
        'explore/riot/index-riot',
      ]
    },
    {
      type: 'category',
      label: 'HowTos & Tutorials',
      items: [
           'howtos/redisearch/index-redisearch',
           'howtos/redisjson/index-redisjson',
           'howtos/redistimeseries/index-redistimeseries',
           'howtos/redisgraph/index-redisgraph',
           'howtos/redisbloom/index-redisbloom',
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
       ]
     }, 
    

]
};
