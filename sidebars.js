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
           'howtos/Moviesdatabase/getting-started/index-gettingstarted',
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
