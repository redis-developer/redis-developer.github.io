"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[966],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var r=i(67294);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,s=function(e,t){if(null==e)return{};var i,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var l=r.createContext({}),d=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(i),m=s,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return i?r.createElement(g,n(n({ref:t},c),{},{components:i})):r.createElement(g,n({ref:t},c))}));function m(e,t){var i=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=i.length,n=new Array(a);n[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,n[1]=o;for(var d=2;d<a;d++)n[d]=i[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},50358:(e,t,i)=>{i.d(t,{Z:()=>l});var r=i(67294),s=i(52263);const a="authorByline_VoxI",n="authorLabel_a70t",o="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:i}=(0,s.Z)(),l=i.customFields.authors;return r.createElement(r.Fragment,null,t.authors&&r.createElement("div",{className:"docAuthors"},r.createElement("hr",null),t.authors.map((e=>r.createElement("div",{key:e,className:a},r.createElement("img",{className:o,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),r.createElement("div",null,r.createElement("div",{className:n},"Author:"),r.createElement("div",null,r.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),r.createElement("hr",null)))}},3322:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=i(87462),s=(i(67294),i(3905)),a=i(50358);const n={id:"index-usinggo",title:"How to collect and process time-series data using Redis and Go",sidebar_label:"Time Series with Redis and Go",slug:"/howtos/redistimeseries/using-go",authors:["ajeet"]},o=void 0,l={unversionedId:"howtos/redistimeseries/using-go/index-usinggo",id:"howtos/redistimeseries/using-go/index-usinggo",title:"How to collect and process time-series data using Redis and Go",description:"My Image",source:"@site/docs/howtos/redistimeseries/using-go/index-usinggo.mdx",sourceDirName:"howtos/redistimeseries/using-go",slug:"/howtos/redistimeseries/using-go",permalink:"/howtos/redistimeseries/using-go",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redistimeseries/using-go/index-usinggo.mdx",tags:[],version:"current",lastUpdatedAt:1686750211,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{id:"index-usinggo",title:"How to collect and process time-series data using Redis and Go",sidebar_label:"Time Series with Redis and Go",slug:"/howtos/redistimeseries/using-go",authors:["ajeet"]},sidebar:"docs",previous:{title:"Using Time Series with Redis and .NET",permalink:"/howtos/redistimeseries/using-dotnet"},next:{title:"Using Time Series Redis feature with Prometheus and Grafana",permalink:"/howtos/redistimeseries/using-prometheus"}},d={},c=[{value:"Time Series with Redis and Go Client",id:"time-series-with-redis-and-go-client",level:2},{value:"Step 1. Create free Redis Enterprise Cloud account",id:"step-1-create-free-redis-enterprise-cloud-account",level:3},{value:"Step 2. Create Your subscription",id:"step-2-create-your-subscription",level:3},{value:"Step 3. Select the right Subscription Plan",id:"step-3-select-the-right-subscription-plan",level:3},{value:"Select &quot;Fixed Plan&quot; for low throughout application as for now.",id:"select-fixed-plan-for-low-throughout-application-as-for-now",level:4},{value:"Step 4. Select cloud vendor",id:"step-4-select-cloud-vendor",level:3},{value:"Step 5. Click &quot;Create Subscription&quot;",id:"step-5-click-create-subscription",level:3},{value:"Step 6. Create database",id:"step-6-create-database",level:3},{value:"Step 7.Installing Time Series Go client for Redis",id:"step-7installing-time-series-go-client-for-redis",level:3},{value:"Step 8. Writing the Go program",id:"step-8-writing-the-go-program",level:3},{value:"Step 9. Run the Go program",id:"step-9-run-the-go-program",level:3},{value:"Step 10. Monitor the Redis database",id:"step-10-monitor-the-redis-database",level:3},{value:"References",id:"references",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(a.Z,{frontMatter:n,mdxType:"Authors"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(62941).Z,width:"2412",height:"1636"})),(0,s.kt)("p",null,"Time Series is a Redis feature, It allows Redis to be used as a fast in-memory time series database designed to collect, manage, and deliver time series data at scale. The Time Series feature shares the performance and simplicity aspects of Redis. Under the hood, it uses efficient data structures such as Radix tree to index data by timestamp, which makes it extremely fast and efficient to run time-aggregate queries."),(0,s.kt)("h2",{id:"time-series-with-redis-and-go-client"},"Time Series with Redis and Go Client"),(0,s.kt)("p",null,"redistimeseries-go is a package that gives developers easy access to the Time Series feature in Redis. (",(0,s.kt)("a",{parentName:"p",href:"https://github.com/RedisTimeSeries/redistimeseries"},"Go client for Time Series"),"), based on redigo.Client and ConnPool based on the work of dvirsky and mnunberg on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/RediSearch/redisearch-go"},"https://github.com/RediSearch/redisearch-go")),(0,s.kt)("p",null,"Follow the steps below to get started with Time Series with Redis in Go lang:"),(0,s.kt)("h3",{id:"step-1-create-free-redis-enterprise-cloud-account"},"Step 1. Create free Redis Enterprise Cloud account"),(0,s.kt)("p",null,"Create your free ",(0,s.kt)("a",{parentName:"p",href:"https://redis.com/try-free/"},"Redis Enterprise Cloud account"),". Once you click on \u201cGet Started\u201d, you will receive an email with a link to activate your account and complete your signup process."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(91083).Z,width:"1244",height:"1062"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(9113).Z,width:"1246",height:"924"})),(0,s.kt)("h3",{id:"step-2-create-your-subscription"},"Step 2. Create Your subscription"),(0,s.kt)("p",null,'Next, you will have to create a Redis Enterprise Cloud subscription. In the Redis Enterprise Cloud menu, click "Create your Subscription".'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(20962).Z,width:"1210",height:"938"})),(0,s.kt)("h3",{id:"step-3-select-the-right-subscription-plan"},"Step 3. Select the right Subscription Plan"),(0,s.kt)("h4",{id:"select-fixed-plan-for-low-throughout-application-as-for-now"},'Select "Fixed Plan" for low throughout application as for now.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(22080).Z,width:"1242",height:"930"})),(0,s.kt)("h3",{id:"step-4-select-cloud-vendor"},"Step 4. Select cloud vendor"),(0,s.kt)("p",null,"For the cloud provider, select your preferred cloud (for demo purpose)"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(60275).Z,width:"1244",height:"928"})),(0,s.kt)("h3",{id:"step-5-click-create-subscription"},'Step 5. Click "Create Subscription"'),(0,s.kt)("p",null,'Finally, click on the "Create Subscription" button.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(15453).Z,width:"1252",height:"758"})),(0,s.kt)("p",null,"You can now verify the subscription as shown below:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(74948).Z,width:"1246",height:"688"})),(0,s.kt)("h3",{id:"step-6-create-database"},"Step 6. Create database"),(0,s.kt)("p",null,'Click "Create Database". Enter database name and your preferred feature.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"alt_text",src:i(88906).Z,width:"1248",height:"964"})),(0,s.kt)("h3",{id:"step-7installing-time-series-go-client-for-redis"},"Step 7.Installing Time Series Go client for Redis"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ go get github.com/RedisTimeSeries/redistimeseries-go\n")),(0,s.kt)("h3",{id:"step-8-writing-the-go-program"},"Step 8. Writing the Go program"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'\npackage main\n\nimport (\n        "fmt"\n        redistimeseries "github.com/RedisTimeSeries/redistimeseries-go"\n)\n\nfunc main() {\n                // Connect to localhost with no password\n        var client = redistimeseries.NewClient("redis-XXXX.c264.ap-south-1-1.ec2.cloud.redislabs.com:port", "add your password here", nil)\n        var keyname = "mytest"\n        _, haveit := client.Info(keyname)\n        if haveit != nil {\n                        client.CreateKeyWithOptions(keyname, redistimeseries.DefaultCreateOptions)\n                        client.CreateKeyWithOptions(keyname+"_avg", redistimeseries.DefaultCreateOptions)\n                        client.CreateRule(keyname, redistimeseries.AvgAggregation, 60, keyname+"_avg")\n        }\n                // Add sample with timestamp from server time and value 100\n        // TS.ADD mytest * 100\n        _, err := client.AddAutoTs(keyname, 100)\n        if err != nil {\n                fmt.Println("Error:", err)\n        }\n}\n\n')),(0,s.kt)("h3",{id:"step-9-run-the-go-program"},"Step 9. Run the Go program"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," go run test.go\n")),(0,s.kt)("h3",{id:"step-10-monitor-the-redis-database"},"Step 10. Monitor the Redis database"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'monitor\nOK\n1635490098.157530 [0 52.149.144.189:48430] "TS.INFO" "mytest"\n1635490098.353530 [0 52.149.144.189:48430] "TS.CREATE" "mytest"\n1635490098.553530 [0 52.149.144.189:48430] "TS.CREATE" "mytest_avg"\n1635490098.753530 [0 52.149.144.189:48430] "TS.CREATERULE" "mytest" "mytest_avg" "AGGREGATION" "AVG" "60"\n1635490098.949529 [0 52.149.144.189:48430] "TS.ADD" "mytest" "*" "100"\n')),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/howtos/redistimeseries/getting-started/"},"Getting Started with Time Series with Redis")),(0,s.kt)("li",{parentName:"ul"},"Learn more about Time Series with Redis in the ",(0,s.kt)("a",{parentName:"li",href:"https://oss.redis.com/redistimeseries/"},"QuickStart")," tutorial."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://redis.com/blog/build-your-financial-application-on-redistimeseries/"},"Build Your Financial Application on Time Series with Redis")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://redis.com/blog/how-to-manage-real-time-iot-sensor-data-in-redis/"},"How to Manage Real-Time IoT Sensor Data in Redis")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=rXynFOrrd-Q"},"Introduction to Time Series with Redis - Video"))))}u.isMDXComponent=!0},91083:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/image2-9489babf8640cb592ee26efc43b8c7c8.png"},9113:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/image3-aeb46bc3583a48c327d9a109cb75c06f.png"},20962:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/image4-c66aa293e9cf47b78563faeca7e5dfb1.png"},22080:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/image5-00ef1afda1542e4aaffedbcd52902eca.png"},60275:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/image6-d406dbc870753273bbf867a6d80ee254.png"},15453:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/image7-096a05ce08a953dd30698708c555032b.png"},74948:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/image8-b517f85390bfa5f00856aed3409a27f1.png"},88906:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/image9-82a8971f206046881ad51b3021d198d4.png"},62941:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/redistimeseries-go-668bf9d65a15b47dce649f2e5d3a0bcd.png"}}]);