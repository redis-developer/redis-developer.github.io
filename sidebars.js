module.exports = {
  docs: [
    {
      type: 'link',
      label: 'Home',
      href: '/',
    },
    {
      type: 'doc',
      label: 'Quick Start',
      id: 'howtos/quick-start/index-quick-start',
    },
    {
      type: 'category',
      label: 'Create',
      items: [
        'create/index-create',
        'create/redis-functions/index-redis-functions',
        {
          type: 'category',
          label: 'Redis on Azure Cache',
          items: [
            'create/azure/index-azure',
            'create/azure/portal/index-azure-portal',
          ],
        },
        {
          type: 'category',
          label: 'Redis on AWS',
          items: [
            'create/aws/index-aws',
            'create/aws/redis-on-aws/index-redis-on-aws',
            'create/aws/slackbot/index-slackbot',
            'create/aws/terraform/index-terraform',
            'create/aws/bidding-on-aws/index-bidding-on-aws',
            'create/aws/import/index-database-migration-aws-elasticache-redis-enterprise-cloud',
            'create/aws/chatapp/index-chatapp',
            'create/aws/analytics-using-aws/index-analytics-using-aws',
          ],
        },
        {
          type: 'category',
          label: 'Redis on Docker',
          items: [
            'create/docker/index-docker',
            'create/docker/nodejs-nginx-redis/index-nodejs-nginx-redis',
          ],
        },
        {
          type: 'category',
          label: 'Redis on Kubernetes',
          items: [
            'create/kubernetes/index-kubernetes',
          ],
        },
        'create/windows/index-windows',
        'create/jenkins/index-jenkins',
        {
          type: 'category',
          label: 'Redis using Azure Functions',
          items: ['create/azurefunctions/index-azurefunctions'],
        },
      ],
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
                  ],
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
                    'develop/java/spring/redis-and-spring-course/lesson_9/index-lesson_9',
                  ],
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
                        'develop/java/spring/rate-limiting/fixed-window/index-spring-fixed-window',
                        'develop/java/spring/rate-limiting/fixed-window/index-spring-fixed-window-reactive',
                        'develop/java/spring/rate-limiting/fixed-window/index-spring-fixed-window-reactive-lua',
                        'develop/java/spring/rate-limiting/fixed-window/index-spring-fixed-window-reactive-gears',
                      ],
                    },
                  ],
                },
              ],
            },
          ],
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
              ],
            },
            'develop/node/redis-om/index-redis-om',
          ],
        },
        {
          type: 'category',
          label: 'Python',
          items: [
            'develop/python/fastapi/index-fastapi',
          ],
        },
        {
          type: 'category',
          label: '.NET',
          items: [
            {
              type: 'category',
              label: 'ASP.NET Core',
              items: [
                {
                  type: 'category',
                  label: 'Rate Limiting',
                  items: [
                    'develop/dotnet/aspnetcore/rate-limiting/fixed-window/index-dotnet-rate-limiting',
                    'develop/dotnet/aspnetcore/rate-limiting/sliding-window/sliding-window-rate-limiting',
                    'develop/dotnet/aspnetcore/rate-limiting/middleware/byo-rate-limiter-middleware',
                  ],
                },
                {
                  type: 'category',
                  label: 'Caching',
                  items: [
                    'develop/dotnet/aspnetcore/caching/basic/index-basic-caching',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Redis OM Dotnet',
              items: [
                'develop/dotnet/redis-om-dotnet/add-and-retrieve-objects/add-and-retrieve-objects',
                'develop/dotnet/redis-om-dotnet/creating-an-index/creating-an-index',
                {
                  type: 'category',
                  label: 'Querying',
                  items: [
                    'develop/dotnet/redis-om-dotnet/searching/simple-text-queries/simple-text-queries',
                    'develop/dotnet/redis-om-dotnet/searching/numeric-queries/numeric-queries',
                    'develop/dotnet/redis-om-dotnet/searching/geo-filters/geo-filters',
                  ],
                },
                {
                  type: 'category',
                  label: 'Aggregations',
                  items: [
                    'develop/dotnet/redis-om-dotnet/aggregations/intro/intro',
                    'develop/dotnet/redis-om-dotnet/aggregations/apply-functions/apply-functions',
                    'develop/dotnet/redis-om-dotnet/aggregations/groups/groups',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Streams',
              items: [
                'develop/dotnet/streams/stream-basics'
              ],
            },
          ],
        },
        'develop/ruby/index-ruby',
        'develop/php/index-php',
        'develop/deno/index-deno',
      ],
    },
    {
      type: 'category',
      label: 'Explore',
      items: [
        'explore/index-explore',
        'explore/import/index-import',
        'explore/redisdatasource/index-redisdatasource',
        'explore/datadog/index-datadog',
        'explore/riot/index-riot',
      ],
    },
    {
      type: 'category',
      label: 'Operate',
      items: [
        {
          type: 'category',
          label: 'Observability',
          items: [
            'operate/observability/redisdatasource/index-redisdatasource',
            'operate/observability/datadog/index-datadog',
          ],
        },
        {
          type: 'category',
          label: 'Provisioning',
          items: [
            'operate/provisioning/terraform/index-terraform',
          ],
        },
        {
          type: 'category',
          label: 'Running Redis at Scale',
          items: [
            'operate/redis-at-scale/index-redis-at-scale',
            {
              type: 'category',
              label: '1 Talking to Redis',
              items: [
                'operate/redis-at-scale/talking-to-redis/redis-server-overview/index-redis-server-overview',
                'operate/redis-at-scale/talking-to-redis/command-line-tool/index-command-line-tool',
                'operate/redis-at-scale/talking-to-redis/configuring-a-redis-server/index-configuring-a-redis-server',
                'operate/redis-at-scale/talking-to-redis/redis-clients/index-redis-clients',
                'operate/redis-at-scale/talking-to-redis/client-performance-improvements/index-client-performance-improvements',
                'operate/redis-at-scale/talking-to-redis/initial-tuning/index-initial-tuning',
              ],
            },
            {
              type: 'category',
              label: '2 Persistence & Durability',
              items: [
                'operate/redis-at-scale/persistence-and-durability/introduction/index-introduction',
                'operate/redis-at-scale/persistence-and-durability/persistence-options-in-redis/index-persistence-options-in-redis',
                'operate/redis-at-scale/persistence-and-durability/exercise/index-exercise',
              ],
            },
            {
              type: 'category',
              label: '3 High Availability',
              items: [
                'operate/redis-at-scale/high-availability/introduction/index-introduction',
                'operate/redis-at-scale/high-availability/basic-replication/index-basic-replication',
                'operate/redis-at-scale/high-availability/exercise-1/index-exercise-1',
                'operate/redis-at-scale/high-availability/understanding-sentinels/index-understanding-sentinels',
                'operate/redis-at-scale/high-availability/exercise-2/index-exercise-2',
              ],
            },
            {
              type: 'category',
              label: '4 Scalability',
              items: [
                'operate/redis-at-scale/scalability/clustering-in-redis/index-clustering-in-redis',
                'operate/redis-at-scale/scalability/exercise-1/index-exercise-1',
                'operate/redis-at-scale/scalability/redis-cli-with-redis-cluster/index-redis-cli-with-redis-cluster',
                'operate/redis-at-scale/scalability/redis-cluster-and-client-libraries/index-redis-cluster-and-client-libraries',
              ],
            },
            {
              type: 'category',
              label: '5 Observability',
              items: [
                'operate/redis-at-scale/observability/introduction/index-introduction',
                'operate/redis-at-scale/observability/data-points-in-redis/index-data-points-in-redis',
                'operate/redis-at-scale/observability/exercise-1/index-exercise-1',
                'operate/redis-at-scale/observability/identifying-issues/index-identifying-issues',
              ],
            },
            {
              type: 'category',
              label: '6 Course wrap-up',
              items: ['operate/redis-at-scale/course-wrap-up/index-wrap-up'],
            },
          ],
        },
        {
          type: 'category',
          label: 'Orchestration',
          items: [
            'operate/orchestration/index-orchestration',
            'operate/orchestration/docker/index-docker',
            'operate/orchestration/nodejs-nginx-redis/index-nodejs-nginx-redis',
            'operate/orchestration/kubernetes-gke/index-kubernetes-gke',
            'operate/orchestration/kubernetes-operator/index-kubernetes-operator',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'HowTos & Tutorials',
      items: [
        'howtos/quick-start/cheat-sheets/index-quick-start-cheat-sheet',
        {
          type: 'category',
          label: 'Solutions',
          items: [
            'howtos/solutions/index-solutions',
            {
              type: 'category',
              label: 'Microservices',
              items: [
                'howtos/solutions/microservices/cqrs/index-solutions-cqrs',
                'howtos/solutions/microservices/interservice-communication/index-solutions-interservice-communication',
                'howtos/solutions/microservices/caching/index-solutions-caching',
                'howtos/solutions/microservices/api-gateway-caching/index-solutions-api-gateway-caching',
              ],
            },
            {
              type: 'category',
              label: 'Fraud detection',
              items: [
                'howtos/solutions/fraud-detection/digital-identity-validation/index-digital-identity-validation',
                'howtos/solutions/fraud-detection/transaction-risk-scoring/index-transaction-risk-scoring',
              ],
            },
            {
              type: 'category',
              label: 'Caching architecture',
              items: [
                'howtos/solutions/caching-architecture/write-behind/index-write-behind',
                'howtos/solutions/caching-architecture/write-through/index-write-through',
                'howtos/solutions/caching-architecture/cache-prefetching/index-cache-prefetching',
                'howtos/solutions/microservices/caching/index-solutions-caching',
              ],
            },
            {
              type: 'category',
              label: 'Real-time Inventory',
              items: [
                'howtos/solutions/real-time-inventory/available-to-promise/index-rti-available-to-promise',
                'howtos/solutions/real-time-inventory/local-inventory-search/index-rti-local-inventory-search',
              ],
            },
            {
              type: 'category',
              label: 'Mobile Banking',
              items: [
                'howtos/solutions/mobile-banking/session-management/index-mb-session-management',
                'howtos/solutions/mobile-banking/account-dashboard/index-mb-account-dashboard',
              ],
            },
            {
              type: 'category',
              label: 'Vector Database',
              items: [
                'howtos/solutions/vector/getting-started-vector/index-getting-started-vector',
                'howtos/solutions/vector/gen-ai-chatbot/index-solutions-gen-ai-chatbot',
              ],
            },
          ],
        },
        'howtos/leaderboard/index-leaderboard',
        'howtos/ratelimiting/index-ratelimiting',
        'howtos/caching/index-caching',
        {
          type: 'category',
          label: 'How to list & search Movies database using Redis Stack',
          items: [
            'howtos/moviesdatabase/install/index-install',
            'howtos/moviesdatabase/create/index-create',
            'howtos/moviesdatabase/query/index-query',
            'howtos/moviesdatabase/manage/index-manage',
            'howtos/moviesdatabase/import/index-import',
            'howtos/moviesdatabase/querymovies/index-querymovies',
            'howtos/moviesdatabase/aggregation/index-aggregation',
            'howtos/moviesdatabase/advancedoption/index-advancedoption',
            'howtos/moviesdatabase/sampleapp/index-sampleapp',
          ],
        },
        'howtos/chatapp/index-chatapp',
        'howtos/frauddetection/index-frauddetection',
        'howtos/nlp/index-nlp',
        'howtos/bert-qa-benchmarking/bert-qa-benchmarking-with-redisai-and-redisgears',
        'howtos/hackernews/index-hackernews',
        'howtos/antipatterns/index-antipatterns',
        'howtos/socialnetwork/index-socialnetwork',
        'howtos/security/index-tls',
        'howtos/analytics/index-analytics',
        'howtos/popupstore/index-popupstore',
        'howtos/herokunodejs/index-herokunodejs',
        'howtos/herokupython/index-herokupython',
        'howtos/herokujava/index-herokujava',
      ],
    },
    {
      type: 'category',
      label: 'Get Involved',
      items: [
        'get-involved/index-getinvolved',
        'get-involved/discord/index-discord',
        'get-involved/redis-live/index-redis-live',
        {
          type: 'category',
          label: 'Redis Insiders',
          items: [
            'get-involved/redis-insiders/index-redis-insiders',
            'get-involved/redis-insiders/jyotsna-gupta/index-jyotsna-gupta',
            'get-involved/redis-insiders/moiz-kapasi/index-moiz-kapasi',
            'get-involved/redis-insiders/michael-owolabi/index-michael-owolabi',
            'get-involved/redis-insiders/stevan-thomas/index-stevan-thomas',
          ],
        },
        {
          type: 'category',
          label: 'Hacktoberfest 2021',
          items: [
            'get-involved/hacktoberfest/index-hacktoberfest',
            'get-involved/hacktoberfest/lara-aasem-story/index-lara-aasem-story',
            'get-involved/hacktoberfest/vincent-aceto-story/index-vincent-aceto-story',
          ],
        },
        'get-involved/devcember/index-devcember',
      ],
    },
    {
      type: 'category',
      label: 'E-books',
      items: [
        'ebooks/nosql-data-modeling-patterns',
        'ebooks/three-caching-design-patterns',
      ],
    },
  ],
};
