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
          {
           type: 'category',
           label: 'Cloud',
           items: [
            'create/cloud/rediscloud/index-rediscloud',
            'create/cloud/azure/index-azure',
            'create/cloud/gcp/index-gcp',
            'create/cloud/aws/index-aws',
         ]
        },
           'create/docker/index-docker',
           'create/from-source/index-from-source',
           'create/kubernetes/index-kubernetes',
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
      label: 'Modules',
      items: [
        'modules/redisearch/index-redisearch',
        'modules/redisjson/index-redisjson',
        'modules/redistimeseries/index-redistimeseries',
        'modules/redisgraph/index-redisgraph',
        'modules/redisbloom/index-redisbloom',
     ]
    },
    {
      type: 'category',
      label: 'HowTos & Tutorials',
      items: [
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
           'howtos/shoppingcart/index-shoppingcart',
           'howtos/leaderboard/index-leaderboard',
           'howtos/ratelimiting/index-ratelimiting',
           'howtos/caching/index-caching',
     ]
    },
]
};
