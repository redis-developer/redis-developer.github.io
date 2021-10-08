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
        {
          type: 'category',
          label: 'Java',
          items: [
            'develop/java/index-java',
            {
              type: 'category',
              label: 'Spring',
              items: [
                'develop/java/spring/index-spring',
                {
                  type: 'category',
                  label: 'Redis and Spring Course',
                  items: [
                    'develop/java/spring/redis-and-spring-course/index-redis-and-spring-course',
                    'develop/java/spring/redis-and-spring-course/lesson_1/index-lesson_1',
                    'develop/java/spring/redis-and-spring-course/lesson_2/index-lesson_2',
                    'develop/java/spring/redis-and-spring-course/lesson_3/index-lesson_3',
                    'develop/java/spring/redis-and-spring-course/lesson_4/index-lesson_4',
                    'develop/java/spring/redis-and-spring-course/lesson_5/index-lesson_5',
                    'develop/java/spring/redis-and-spring-course/lesson_6/index-lesson_6',
                    'develop/java/spring/redis-and-spring-course/lesson_7/index-lesson_7',
                    'develop/java/spring/redis-and-spring-course/lesson_8/index-lesson_8',
                    'develop/java/spring/redis-and-spring-course/lesson_9/index-lesson_9'
                  ]
                },
                {
                  type: 'category',
                  label: 'Rate Limiting',
                  items: [
                    'develop/java/spring/rate-limiting/index-ratelimiting',
                    {
                      type: 'category',
                      label: 'Fixed Window',
                      items: [
                        'develop/java/spring/rate-limiting/fixed-window/index-fixed-window',
                        'develop/java/spring/rate-limiting/fixed-window/index-fixed-window-reactive',
                        'develop/java/spring/rate-limiting/fixed-window/index-fixed-window-reactive-lua',
                        'develop/java/spring/rate-limiting/fixed-window/index-fixed-window-reactive-gears'
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
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
          {
            type: 'category',
            label: 'Python',
            items: [
              'develop/python/index-python',
              'develop/python/fastapi/index-fastapi'
            ]
          },{
            type: 'category',
            label: '.NET',
            items: [
              'develop/dotnet/index-dotnet',
              {
                type: 'category',
                label: 'ASP.NET Core',
                items:[
                  'develop/dotnet/aspnetcore/rate-limiting/fixed-window/index-rate-limiting',
                  'develop/dotnet/aspnetcore/rate-limiting/sliding-window/sliding-window-rate-limiting',
                  'develop/dotnet/aspnetcore/rate-limiting/middleware/byo-rate-limiter-middleware'
                ]
              }
            ]
          },          
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
          'explore/redisexplorer/index-redisexplorer',
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
           {
             type: 'category',
             label: 'RedisJSON Tutorial',
             items: [
                  'howtos/redisjson/index-redisjson',
                  'howtos/redisjson/getting-started/index-gettingstarted',
                  'howtos/redisjson/using-python/index-usingpython',
                  'howtos/redisjson/using-nodejs/index-usingnodejs',
                  'howtos/redisjson/using-ruby/index-usingruby',
                  'howtos/redisjson/using-go/index-usinggo',
                  'howtos/redisjson/using-java/index-usingjava',
                  'howtos/redisjson/using-redisinsight/index-usingredisinsight',
                  'howtos/redisjson/storing-complex-json-document/index-storing-complex-json-document',
                  'howtos/redisjson/jsonind-document/index-jsonind-document',
                  'howtos/redisjson/redisjson-cheatsheet/index-redisjson-cheatsheet',
                  'howtos/redisjson/shoppingcart/index-shoppingcart',
                  'howtos/redisjson/storing-json-using-nodejs/index-storingjson-nodejs',
             ]
           },
             'howtos/redistimeseries/index-redistimeseries',
             {
               type: 'category',
               label: 'RedisGraph Tutorial',
               items: [
                  'howtos/redisgraph/index-redisgraph',
                  'howtos/redisgraph/getting-started/index-gettingstarted',
                  'howtos/redisgraph/explore-python-code/index-explorepythoncode',
                  'howtos/redisgraph/using-redisinsight/index-usingredisinsight',  
                  'howtos/redisgraph/using-python/index-usingpython',
                  'howtos/redisgraph/using-ruby/index-usingruby', 
                  'howtos/redisgraph/using-javascript/index-usingjavascript',
                  'howtos/redisgraph/using-go/index-usinggo',
                  'howtos/redisgraph/using-rust/index-usingrust',
                  'howtos/redisgraph/redisgraphmovies/index-redisgraphmovies',
                  'howtos/redisgraph/csvtograph/index-csvtograph',
              ]
            },
               'howtos/redisbloom/index-redisbloom',
               'howtos/redisgears/index-redisgears',
               'howtos/redisai/index-redisai',
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
           'howtos/antipatterns/index-antipatterns',
           'howtos/security/index-tls',
           'howtos/analytics/index-analytics',
           'howtos/popupstore/index-popupstore',
           'howtos/herokunodejs/index-herokunodejs',
           'howtos/herokupython/index-herokupython',
           'howtos/herokujava/index-herokujava',
       ]
     },
    {
      type: 'category',
      label: 'Get Involved',
      items: [
        'get-involved/index-getinvolved',
        'get-involved/hacktoberfest/index-hacktoberfest',
        'get-involved/discord/index-discord',
        'get-involved/redis-live/index-redis-live',
      ]
    },

]
};
