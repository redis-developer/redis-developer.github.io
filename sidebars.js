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
          {
              type: 'category',
              label: 'Redis on Azure Cache',
              items: [
                  'create/azure/index-azure',
                  'create/azure/portal/index-azure-portal',
                  'create/azure/terraform-simple/index-azure-terraform-simple',
                  'create/azure/terraform-private-endpoint/index-azure-terraform-private-endpoint'
              ]
          },
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
        'develop/C/index-c',
         {
           type: 'category',
           label: 'Node.js',
           items: [
             'develop/node/index-node',
             'develop/node/gettingstarted/index-gettingstarted',
               {
                type: 'category',
                label: 'Node.js Crash Course',
                items: [
                 'develop/node/node-crash-course/index-node-crash-course',
                 'develop/node/node-crash-course/welcome/index-welcome',
                 'develop/node/node-crash-course/whatisredis/index-whatisredis',
                 'develop/node/node-crash-course/redisandnodejs/index-redisandnodejs',
                 'develop/node/node-crash-course/introducingredisinsight/index-introducingredisinsight',
                 'develop/node/node-crash-course/sampleapplicationoverview/index-sampleapplicationoverview',
                 'develop/node/node-crash-course/runningtheapplication/index-runningtheapplication',
                 'develop/node/node-crash-course/domainobjectswithhashes/index-domainobjectswithhashes',
                 'develop/node/node-crash-course/introductiontomodules/index-introductiontomodules', 
                 'develop/node/node-crash-course/redisjson/index-redisjson',
                 'develop/node/node-crash-course/redisearch/index-redisearch',
                 'develop/node/node-crash-course/checkinswithstreams/index-checkinswithstreams',
                 'develop/node/node-crash-course/managingsuccess/index-managingsuccess',
                 'develop/node/node-crash-course/caching/index-caching',
                 'develop/node/node-crash-course/sessionstorage/index-sessionstorage',
                 'develop/node/node-crash-course/advancedstreams/index-advancedstreams', 
                 'develop/node/node-crash-course/redisbloom/index-redisbloom',
                 'develop/node/node-crash-course/coursewrapup/index-coursewrapup',
                    ]   
                },
               ]
           },
          'develop/python/index-python',
          'develop/dotnet/index-dotnet', 
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
          'explore/redisinsight/profiler/index-profiler',
          'explore/redisinsight/redisgraph/index-redisgraph',
          'explore/redisinsight/redisgears/index-redisgears',
          'explore/redisinsight/redistimeseries/index-redistimeseries',
          'explore/redisinsight/redisearch/index-redisearch',
          'explore/redisinsight/autodiscover/index-autodiscover',
          'explore/redisinsight/usinghelm/index-usinghelm',
        ] 
        },
          'explore/redisdatasource/index-redisdatasource',
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
           'howtos/redisai/index-redisai',
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
           'howtos/redisgraphmovies/index-redisgraphmovies',
           'howtos/nlp/index-nlp',
           'howtos/hackernews/index-hackernews',
           'howtos/security/index-tls',
           'howtos/analytics/index-analytics',
           'howtos/popupstore/index-popupstore',
           'howtos/herokunodejs/index-herokunodejs',
           'howtos/herokupython/index-herokupython',
           'howtos/herokujava/index-herokujava',
       ] 
     }, 
    

]
};
