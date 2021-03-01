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
        'create/cloud/index-cloud',
        'create/docker/index-docker',
        'create/from-source/index-from-source',
        {
          type : 'link',
          label : 'Enterprise on Kubernetes',
          href : 'https://docs.redislabs.com/latest/platforms/',
        },
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
     ]
    },
    {
      type: 'category',
      label: 'Explore',
      items: [
        'explore/redisinsight/index-redisinsight',
        'explore/redisdatasource/index-redisdatasource',
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
           'howtos/Moviesdatabase/intro/index-intro',
           'howtos/Moviesdatabase/install/index-install',
           'howtos/Moviesdatabase/create/index-create',
           'howtos/Moviesdatabase/query/index-query',
           'howtos/Moviesdatabase/manage/index-manage',
           'howtos/Moviesdatabase/import/index-import', 
           'howtos/Moviesdatabase/querymovies/index-querymovies',
           'howtos/Moviesdatabase/aggregation/index-aggregation',
           'howtos/Moviesdatabase/advancedoption/index-advancedoption',
           'howtos/Moviesdatabase/sampleapp/index-sampleapp',
          ]
         },
         'howtos/Shoppingcart/index-shoppingcart',
         'howtos/Leaderboard/index-leaderboard',
         'howtos/RateLimiting/index-ratelimiting',
     ]
    },
  ]
};
