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
         'howtos/Moviesdatabase/index-moviesdatabase',
         'howtos/Caching/index-caching',
         'howtos/FraudMitigation/index-fraudmitigation',
         'howtos/RateLimiting/index-ratelimiting',
         'howtos/Leaderboard/index-leaderboard',
         'howtos/Shoppingcart/index-shoppingcart',
     ]
    },
    {
      type: 'category',
      label: 'Tools & Guides',
      items: [
        'tools/index-tools',
        {
          type: 'category',
          label: 'Guides',
          items: [
            'guides/import/index-import',
            'guides/indexing/indexing-querying',
            'guides/security/index-security',
          ]
        },
      ]
    },
  ]
};
