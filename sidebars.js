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
          {
             type: 'category',
              label: 'Redis on Heroku',
              items: [
                  'create/heroku/index-heroku',
                  'create/heroku/portal/index-heroku-portal',
                  'create/heroku/herokujava/index-herokujava',
                  'create/heroku/herokunodejs/index-herokunodejs',
                  'create/heroku/herokupython/index-herokupython',
                  'create/heroku/ratelimiting-go/index-ratelimitinggo',
                  'create/heroku/herokuruby/index-herokuruby',
                  'create/heroku/herokugo/index-herokugo'
              ]
            },
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
        {
          type: 'category',
          label: 'Redis on AWS',
          items: [
              'create/aws/index-aws',
              'create/aws/redis-on-aws/index-redis-on-aws',
              'create/aws/slackbot/index-slackbot' 
           ]
          },
        'create/docker/index-docker',
        {
          type: 'category',
          label: 'Redis on Kubernetes',
          items: [
             'create/kubernetes/index-kubernetes',
             'create/kubernetes/kubernetes-gke/index-kubernetes-gke',
             'create/kubernetes/kubernetes-operator/index-kubernetes-operator'
           ]
         },
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
                  label: 'Redis OM Tutorial',
                  items: [
                    'develop/java/spring/redis-om/redis-om-spring',
                    'develop/java/spring/redis-om/redis-om-spring-json',
                    'develop/java/spring/redis-om/redis-om-spring-hash',
                  ]
                },
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
            'develop/node/redis-om/index-redis-om'
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
                  {
                    type:'category',
                    label:'Rate Limiting',
                    items:[
                      'develop/dotnet/aspnetcore/rate-limiting/fixed-window/index-rate-limiting',
                      'develop/dotnet/aspnetcore/rate-limiting/sliding-window/sliding-window-rate-limiting',
                      'develop/dotnet/aspnetcore/rate-limiting/middleware/byo-rate-limiter-middleware'
                    ]
                  },
                  {
                    type:'category',
                    label:'Caching',
                    items:[
                      'develop/dotnet/aspnetcore/caching/basic/index-basic-caching'
                    ]
                  }
                  
                ]
              },
              {
                type: 'category',
                label: 'Redis OM Dotnet',
                items: [
                  'develop/dotnet/redis-om-dotnet/connecting-to-redis/connecting',
                  'develop/dotnet/redis-om-dotnet/add-and-retrieve-objects/add-and-retrieve-objects',
                  'develop/dotnet/redis-om-dotnet/creating-an-index/creating-an-index',
                  {
                    type: 'category',
                    label: 'Querying',
                    items:[
                      'develop/dotnet/redis-om-dotnet/searching/simple-text-queries/simple-text-queries',
                      'develop/dotnet/redis-om-dotnet/searching/numeric-queries/numeric-queries',
                      'develop/dotnet/redis-om-dotnet/searching/geo-filters/geo-filters',
                    ]
                  },
                  {
                    type: 'category',
                    label: 'Aggregations',
                    items:[
                      'develop/dotnet/redis-om-dotnet/aggregations/intro/intro',
                      'develop/dotnet/redis-om-dotnet/aggregations/apply-functions/apply-functions',
                      'develop/dotnet/redis-om-dotnet/aggregations/groups/groups'
                    ]
                  }
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
        'explore/what-is-redis/index-what-is-redis',
        {
          type: 'category',
          label: 'RedisInsight v2.x',
          items: [
           'explore/redisinsightv2/index-redisinsightv2',
           'explore/redisinsightv2/getting-started/index-gettingstarted',
           'explore/redisinsightv2/browser/index-browser',
          ]
         },
        {
         type: 'category',
         label: 'RedisInsight v1.x',
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
          'explore/datadog/index-datadog',
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
             {
                type: 'category',
                label: 'RedisTimeSeries Tutorial',
                items: [
                     'howtos/redistimeseries/index-redistimeseries',
                     'howtos/redistimeseries/getting-started/index-gettingstarted',
                     'howtos/redistimeseries/using-python/index-usingpython',
                     'howtos/redistimeseries/using-dotnet/index-usingdotnet',
                     'howtos/redistimeseries/using-go/index-usinggo',
                     'howtos/redistimeseries/using-prometheus/index-usingprometheus',
                ]
              },
             {
               type: 'category',
               label: 'RedisGraph Tutorial',
               items: [
                  'howtos/redisgraph/index-redisgraph',
                  'howtos/redisgraph/getting-started/index-gettingstarted',
                  'howtos/redisgraph/explore-python-code/index-explorepythoncode',
                  'howtos/redisgraph/using-redisinsight/index-usingredisinsight',
                  'howtos/redisgraph/using-dotnet/index-using-dotnet',
                  'howtos/redisgraph/using-python/index-usingpython',
                  'howtos/redisgraph/using-ruby/index-usingruby',
                  'howtos/redisgraph/using-javascript/index-usingjavascript',
                  'howtos/redisgraph/using-go/index-usinggo',
                  'howtos/redisgraph/using-rust/index-usingrust',
                  'howtos/redisgraph/redisgraphmovies/index-redisgraphmovies',
                  'howtos/redisgraph/csvtograph/index-csvtograph',
              ]
            },
            {
              type:'category',
              label: 'Redis Bloom Tutorial',
              items:
              [
                'howtos/redisbloom/index-redisbloom',
                'howtos/redisbloom/with-dotnet/redisbloom-withdotnet'
              ]
            },
               'howtos/redisgears/index-redisgears',
             {
              type:'category',
              label: 'RedisAI Tutorial',
              items:
              [
                'howtos/redisai/index-redisai',
                'howtos/redisai/getting-started/index-gettingstarted',
                'howtos/redisai/market-basket-analysis/index-market-basket-analysis'
               ]
              },
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
           'howtos/socialnetwork/index-socialnetwork',
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
        'get-involved/devcember/index-devcember',
        {
          type: 'category',
          label: 'Hacktoberfest 2021',
          items: [
            'get-involved/hacktoberfest/index-hacktoberfest',
            'get-involved/hacktoberfest/lara-aasem-story/index-lara-aasem-story',
            'get-involved/hacktoberfest/vincent-aceto-story/index-vincent-aceto-story'
          ]
        },
        'get-involved/discord/index-discord',
        'get-involved/redis-live/index-redis-live',
      ]
    },

]
};
