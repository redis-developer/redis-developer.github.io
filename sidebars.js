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
         'howtos/Shoppingcart/index-shoppingcart',
         'howtos/Leaderboard/index-leaderboard',
         'howtos/RateLimiting/index-ratelimiting',
         'howtos/Moviesdatabase/index-moviesdatabase',
         'howtos/Caching/index-caching',
     ]
    },
  ]
};
