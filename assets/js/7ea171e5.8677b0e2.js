"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[1321],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var i=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,s=function(e,t){if(null==e)return{};var a,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=s,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return a?i.createElement(h,n(n({ref:t},p),{},{components:a})):i.createElement(h,n({ref:t},p))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,n=new Array(r);n[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,n[1]=o;for(var d=2;d<r;d++)n[d]=a[d];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},50358:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(67294),s=a(52263);const r="authorByline_VoxI",n="authorLabel_a70t",o="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:a}=(0,s.Z)(),l=a.customFields.authors;return i.createElement(i.Fragment,null,t.authors&&i.createElement("div",{className:"docAuthors"},i.createElement("hr",null),t.authors.map((e=>i.createElement("div",{key:e,className:r},i.createElement("img",{className:o,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),i.createElement("div",null,i.createElement("div",{className:n},"Author:"),i.createElement("div",null,i.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),i.createElement("hr",null)))}},26570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=a(87462),s=(a(67294),a(3905)),r=a(50358);const n={id:"index-gettingstarted",title:"Storing and Querying Time Series data using Redis Stack",sidebar_label:"Storing and Querying Time Series data",slug:"/howtos/redistimeseries/getting-started",authors:["ajeet"]},o=void 0,l={unversionedId:"howtos/redistimeseries/getting-started/index-gettingstarted",id:"howtos/redistimeseries/getting-started/index-gettingstarted",title:"Storing and Querying Time Series data using Redis Stack",description:"Time Series is a Redis feature developed by Redis Inc. to enhance your experience managing time-series data with Redis. It simplifies the use of Redis for time-series use cases such as internet of things (IoT) data, stock prices, and telemetry. With Time Series, you can ingest and query millions of samples and events at the speed of Redis. Advanced tooling such as downSampling and aggregation ensure a small memory footprint without impacting performance. Use a variety of queries for visualization and monitoring with built-in connectors to popular monitoring tools like Grafana, Prometheus, and Telegraf.",source:"@site/docs/howtos/redistimeseries/getting-started/index-redistimeseries.mdx",sourceDirName:"howtos/redistimeseries/getting-started",slug:"/howtos/redistimeseries/getting-started",permalink:"/howtos/redistimeseries/getting-started",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redistimeseries/getting-started/index-redistimeseries.mdx",tags:[],version:"current",lastUpdatedAt:1686748002,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{id:"index-gettingstarted",title:"Storing and Querying Time Series data using Redis Stack",sidebar_label:"Storing and Querying Time Series data",slug:"/howtos/redistimeseries/getting-started",authors:["ajeet"]},sidebar:"docs",previous:{title:"Overview",permalink:"/howtos/redistimeseries/"},next:{title:"Time Series with Redis and Python",permalink:"/howtos/redistimeseries/using-python"}},d={},p=[{value:"Step 1. Create a free Cloud account",id:"step-1-create-a-free-cloud-account",level:3},{value:"Step 2. Create Your database",id:"step-2-create-your-database",level:3},{value:"Step 3. Verify the database details",id:"step-3-verify-the-database-details",level:3},{value:"Step 4. Install RedisInsight",id:"step-4-install-redisinsight",level:3},{value:"Step 5. Add Redis database",id:"step-5-add-redis-database",level:3},{value:"Step 6. Enter Redis Enterprise Cloud details",id:"step-6-enter-redis-enterprise-cloud-details",level:3},{value:"Step 7. Verify the database under RedisInsight dashboard",id:"step-7-verify-the-database-under-redisinsight-dashboard",level:3},{value:"Step 8. Getting Started with Redis Time Series feature",id:"step-8-getting-started-with-redis-time-series-feature",level:3},{value:"Create a new time series",id:"create-a-new-time-series",level:4},{value:"Add a new sample data to the time series",id:"add-a-new-sample-data-to-the-time-series",level:4},{value:"Querying the sample",id:"querying-the-sample",level:4},{value:"\u201cHow do I get the last sample?\u201d",id:"how-do-i-get-the-last-sample",level:4},{value:"\u201cHow do I get the last sample matching the specific filter?\u201d",id:"how-do-i-get-the-last-sample-matching-the-specific-filter",level:4},{value:"\u201cHow do I get the sample with labels matching the specific filter?\u201d",id:"how-do-i-get-the-sample-with-labels-matching-the-specific-filter",level:4},{value:"Query a range across one or more time series",id:"query-a-range-across-one-or-more-time-series",level:4},{value:"\u201cHow do I get the sample for a time range?\u201d",id:"how-do-i-get-the-sample-for-a-time-range",level:4},{value:"Aggregation",id:"aggregation",level:4},{value:"\u201cHow do I get the sample for a time range on some aggregation rule?\u201d",id:"how-do-i-get-the-sample-for-a-time-range-on-some-aggregation-rule",level:4},{value:"Next Steps",id:"next-steps",level:3}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,{frontMatter:n,mdxType:"Authors"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://redis.com/modules/redis-timeseries/"},"Time Series")," is a Redis feature developed by Redis Inc. to enhance your experience managing time-series data with Redis. It simplifies the use of Redis for time-series use cases such as internet of things (IoT) data, stock prices, and telemetry. With Time Series, you can ingest and query millions of samples and events at the speed of Redis. Advanced tooling such as downSampling and aggregation ensure a small memory footprint without impacting performance. Use a variety of queries for visualization and monitoring with built-in connectors to popular monitoring tools like Grafana, Prometheus, and Telegraf."),(0,s.kt)("div",{class:"text--center"},(0,s.kt)("iframe",{width:"760",height:"415",src:"https://www.youtube.com/embed/nkUZqxjs2rk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,s.kt)("h3",{id:"step-1-create-a-free-cloud-account"},"Step 1. Create a free Cloud account"),(0,s.kt)("p",null,"Create your free ",(0,s.kt)("a",{href:"https://redis.com/try-free/",target:"_blank",rel:"noopener"},"Redis Enterprise Cloud account"),". Once you click on \u201cGet Started\u201d, you will receive an email with a link to activate your account and complete your signup process."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"For a limited time, use ",(0,s.kt)("strong",{parentName:"p"},"TIGER200")," to get ",(0,s.kt)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),(0,s.kt)("p",{parentName:"admonition"},"\ud83c\udf89 ",(0,s.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"Click here to sign up"))),(0,s.kt)("h3",{id:"step-2-create-your-database"},"Step 2. Create Your database"),(0,s.kt)("p",null,'Choose your preferred cloud vendor. Select the region and then click "Let\'s start free" to create your free database automatically.'),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},'If you want to create a custom database with your preferred name and type of Redis,\nclick "Create a custom database" option shown in the image.')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"create database ",src:a(57699).Z,width:"1676",height:"1010"})),(0,s.kt)("h3",{id:"step-3-verify-the-database-details"},"Step 3. Verify the database details"),(0,s.kt)("p",null,'You will be provided with Public endpoint URL and "Redis Stack" as the type of database with the list of features that comes by default.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"verify database",src:a(92710).Z,width:"1346",height:"881"})),(0,s.kt)("h3",{id:"step-4-install-redisinsight"},"Step 4. Install RedisInsight"),(0,s.kt)("p",null,"RedisInsight is a visual tool that lets you do both GUI- and CLI-based interactions with your Redis database, and so much more when developing your Redis based application. It is a fully-featured pure Desktop GUI client that provides capabilities to design, develop and optimize your Redis application. It works with any cloud provider as long as you run it on a host with network access to your cloud-based Redis server. It makes it easy to discover cloud databases and configure connection details with a single click. It allows you to automatically add Redis Enterprise Software and Redis Enterprise Cloud databases."),(0,s.kt)("p",null,"You can install Redis Stack on your local system to get RedisInsight GUI tool up and running. Ensure that you have the ",(0,s.kt)("inlineCode",{parentName:"p"},"brew")," package installed in your Mac system."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," brew tap redis-stack/redis-stack\n brew install --cask redis-stack\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  ==> Installing Cask redis-stack-redisinsight\n  ==> Moving App 'RedisInsight-preview.app' to '/Applications/RedisInsight-preview.app'\n  \ud83c\udf7a  redis-stack-redisinsight was successfully installed!\n  ==> Installing Cask redis-stack\n  \ud83c\udf7a  redis-stack was successfully installed!\n")),(0,s.kt)("p",null,'Go to Applications and click "RedisInsight-v2" to bring up the Redis Desktop GUI tool.'),(0,s.kt)("h3",{id:"step-5-add-redis-database"},"Step 5. Add Redis database"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"access redisinsight",src:a(19644).Z,width:"2078",height:"1496"})),(0,s.kt)("h3",{id:"step-6-enter-redis-enterprise-cloud-details"},"Step 6. Enter Redis Enterprise Cloud details"),(0,s.kt)("p",null,"Add the Redis Enterprise cloud database endpoint, port and password."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"access redisinsight",src:a(41281).Z,width:"2332",height:"1734"})),(0,s.kt)("h3",{id:"step-7-verify-the-database-under-redisinsight-dashboard"},"Step 7. Verify the database under RedisInsight dashboard"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"database details",src:a(93233).Z,width:"2226",height:"844"})),(0,s.kt)("h3",{id:"step-8-getting-started-with-redis-time-series-feature"},"Step 8. Getting Started with Redis Time Series feature"),(0,s.kt)("p",null,"This section will walk you through using some basic Time Series commands in Redis. You can run them from the Redis command-line interface (redis-cli) or use the CLI available in RedisInsight. (See part 2 of this tutorial to learn more about using the RedisInsight CLI.)\nUsing a basic air-quality dataset, we will show you how to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create a new time series"),(0,s.kt)("li",{parentName:"ul"},"Add a new sample to the list of series"),(0,s.kt)("li",{parentName:"ul"},"Query a range across one or multiple time series")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Time Series",src:a(79111).Z,width:"1430",height:"200"})),(0,s.kt)("h4",{id:"create-a-new-time-series"},"Create a new time series"),(0,s.kt)("p",null,"Let\u2019s create a time series representing air quality dataset measurements. To interact with Time Series you will most often use the TS.RANGE command, but here you will create a time series per measurement using the TS.CREATE command. Once created, all the measurements will be sent using TS.ADD."),(0,s.kt)("p",null,"The sample command below creates a time series and populates it with three entries:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},">> TS.CREATE ts:carbon_monoxide\n>> TS.CREATE ts:relative_humidity\n>> TS.CREATE ts:temperature RETENTION 60 LABELS sensor_id 2 area_id 32\n")),(0,s.kt)("p",null,"In the above example, ts:carbon_monoxide, ts:relative_humidity and ts:temperature are key names. We are creating a time series with two labels (sensor_id and area_id are the fields with values 2 and 32 respectively) and a retention window of 60 milliseconds:"),(0,s.kt)("h4",{id:"add-a-new-sample-data-to-the-time-series"},"Add a new sample data to the time series"),(0,s.kt)("p",null,"Let\u2019s start to add samples into the keys that will be automatically created using this command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},">> TS.ADD ts:carbon_monoxide 1112596200 2.4\n>> TS.ADD ts:relative_humidity 1112596200 18.3\n>> TS.ADD ts:temperature 1112599800 28.3\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},">> TS.ADD ts:carbon_monoxide 1112599800 2.1\n>> TS.ADD ts:relative_humidity 1112599800 13.5\n>> TS.ADD ts:temperature 1112603400 28.5\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},">> TS.ADD ts:carbon_monoxide 1112603400 2.2\n>> TS.ADD ts:relative_humidity 1112603400 13.1\n>> TS.ADD ts:temperature 1112607000 28.7\n")),(0,s.kt)("h4",{id:"querying-the-sample"},"Querying the sample"),(0,s.kt)("p",null,"Now that you have sample data in your time series, you\u2019re ready to ask questions such as:"),(0,s.kt)("h4",{id:"how-do-i-get-the-last-sample"},"\u201cHow do I get the last sample?\u201d"),(0,s.kt)("p",null,"TS.GET is used to get the last sample. The returned array will contain the last sample timestamp followed by the last sample value, when the time series contains data:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'>> TS.GET ts:temperature\n1) (integer) 1112607000\n2) "28.7"\n')),(0,s.kt)("h4",{id:"how-do-i-get-the-last-sample-matching-the-specific-filter"},"\u201cHow do I get the last sample matching the specific filter?\u201d"),(0,s.kt)("p",null,"TS.MGET is used to get the last samples matching the specific filter:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'>> TS.MGET FILTER area_id=32\n1) 1) "ts:temperature"\n   2) (empty list or set)\n   3) 1) (integer) 1112607000\n      2) "28.7"\n')),(0,s.kt)("h4",{id:"how-do-i-get-the-sample-with-labels-matching-the-specific-filter"},"\u201cHow do I get the sample with labels matching the specific filter?\u201d"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'>> TS.MGET WITHLABELS FILTER area_id=32\n1) 1) "ts:temperature"\n   2) 1) 1) "sensor_id"\n         2) "2"\n      2) 1) "area_id"\n         2) "32"\n   3) 1) (integer) 1112607000\n      2) "28.7"\n')),(0,s.kt)("h4",{id:"query-a-range-across-one-or-more-time-series"},"Query a range across one or more time series"),(0,s.kt)("p",null,"TS.RANGE is used to query a range in forward directions while TS.REVRANGE is used to query a range in reverse directions, They let you answer such questions as:"),(0,s.kt)("h4",{id:"how-do-i-get-the-sample-for-a-time-range"},"\u201cHow do I get the sample for a time range?\u201d"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'>> TS.RANGE ts:carbon_monoxide 1112596200 1112603400\n1) 1) (integer) 1112596200\n   2) "2.4"\n2) 1) (integer) 1112599800\n   2) "2.1"\n3) 1) (integer) 1112603400\n   2) "2.2"\n')),(0,s.kt)("h4",{id:"aggregation"},"Aggregation"),(0,s.kt)("p",null,"You can use various aggregation types such as avg, sum, min, max, range, count, first, last etc. The example below example shows how to use \u201cavg\u201d aggregation type to answer such questions as:"),(0,s.kt)("h4",{id:"how-do-i-get-the-sample-for-a-time-range-on-some-aggregation-rule"},"\u201cHow do I get the sample for a time range on some aggregation rule?\u201d"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'>> TS.RANGE ts:carbon_monoxide 1112596200 1112603400 AGGREGATION avg 2\n1) 1) (integer) 1112596200\n   2) "2.4"\n2) 1) (integer) 1112599800\n   2) "2.1"\n3) 1) (integer) 1112603400\n   2) "2.2"\n')),(0,s.kt)("h3",{id:"next-steps"},"Next Steps"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Learn more about Time Series with Redis in the ",(0,s.kt)("a",{parentName:"li",href:"https://oss.redis.com/redistimeseries/"},"QuickStart")," tutorial."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://redis.com/blog/build-your-financial-application-on-redistimeseries/"},"Build Your Financial Application on Time Series using Redis")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://redis.com/blog/how-to-manage-real-time-iot-sensor-data-in-redis/"},"How to Manage Real-Time IoT Sensor Data in Redis")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=rXynFOrrd-Q"},"Introduction to Time Series in Redis - Video"))),(0,s.kt)("h2",{id:""}),(0,s.kt)("div",null,(0,s.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,s.kt)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}c.isMDXComponent=!0},19644:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add_database-9830232a6e209dc61f0bfd5a8bf87ea4.png"},41281:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/database_creds-f7ab4af8f0121712ed02fff3901ebfec.png"},93233:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/database_details-d49880aa22636d96917ad114493a4711.png"},92710:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/details_database-471fa25198e8a549638e2fc8710b96c0.png"},57699:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/select_cloud_vendor-1ad229a2effb7aad2f19495d0cea18fb.png"},79111:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/redistimeseriesflow-d1eddd903d258cb4835f7e975d8266c9.png"}}]);