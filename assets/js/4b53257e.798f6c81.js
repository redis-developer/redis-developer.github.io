"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[5870],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var s=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){if(null==e)return{};var i,s,a=function(e,t){if(null==e)return{};var i,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)i=n[s],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)i=n[s],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=s.createContext({}),l=function(e){var t=s.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=l(e.components);return s.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),c=l(i),h=a,g=c["".concat(o,".").concat(h)]||c[h]||p[h]||n;return i?s.createElement(g,r(r({ref:t},u),{},{components:i})):s.createElement(g,r({ref:t},u))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,r=new Array(n);r[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,r[1]=d;for(var l=2;l<n;l++)r[l]=i[l];return s.createElement.apply(null,r)}return s.createElement.apply(null,i)}c.displayName="MDXCreateElement"},50358:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(67294),a=i(52263);const n="authorByline_VoxI",r="authorLabel_a70t",d="authorProfileImage_URwT";const o=function(e){let{frontMatter:t}=e;const{siteConfig:i}=(0,a.Z)(),o=i.customFields.authors;return s.createElement(s.Fragment,null,t.authors&&s.createElement("div",{className:"docAuthors"},s.createElement("hr",null),t.authors.map((e=>s.createElement("div",{key:e,className:n},s.createElement("img",{className:d,src:`/img/${o[e].image?o[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${o[e].name}`}),s.createElement("div",null,s.createElement("div",{className:r},"Author:"),s.createElement("div",null,s.createElement("a",{href:o[e].link,target:"_blank"},o[e].name),", ",o[e].title))))),s.createElement("hr",null)))}},99510:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var s=i(87462),a=(i(67294),i(3905)),n=i(50358);const r={id:"index-usingredisinsight",title:"How to visualize JSON data using RedisInsight",sidebar_label:"Redis JSON using RedisInsight",slug:"/howtos/redisjson/using-redisinsight",authors:["ajeet"]},d=void 0,o={unversionedId:"howtos/redisjson/using-redisinsight/index-usingredisinsight",id:"howtos/redisjson/using-redisinsight/index-usingredisinsight",title:"How to visualize JSON data using RedisInsight",description:"RedisInsight provides built-in support for the Redis JSON, Search and Query, Streams, and Time Series features to make it even easier to query, visualize, and interactively manipulate search indexes, streams, and time-series data. Support for JSON on Redis Cluster was introduced for the first time in RedisInsight v1.8.0. With RedisInsight, you can visualize and edit your JSON data flawlessly.",source:"@site/docs/howtos/redisjson/using-redisinsight/index-usingredisinsight.mdx",sourceDirName:"howtos/redisjson/using-redisinsight",slug:"/howtos/redisjson/using-redisinsight",permalink:"/howtos/redisjson/using-redisinsight",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisjson/using-redisinsight/index-usingredisinsight.mdx",tags:[],version:"current",lastUpdatedAt:1686309330,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{id:"index-usingredisinsight",title:"How to visualize JSON data using RedisInsight",sidebar_label:"Redis JSON using RedisInsight",slug:"/howtos/redisjson/using-redisinsight",authors:["ajeet"]},sidebar:"docs",previous:{title:"Redis JSON and Java",permalink:"/howtos/redisjson/using-java"},next:{title:"Storing and retrieving Nested JSON document",permalink:"/howtos/redisjson/storing-complex-json-document"}},l={},u=[{value:"Step 1. Create a free Cloud account",id:"step-1-create-a-free-cloud-account",level:3},{value:"Step 2. Create Your database",id:"step-2-create-your-database",level:3},{value:"Step 3. Verify the database details",id:"step-3-verify-the-database-details",level:3},{value:"Step 4. Using RedisInsight",id:"step-4-using-redisinsight",level:3},{value:"Step 5. Add Redis database",id:"step-5-add-redis-database",level:3},{value:"Step 6. Enter Redis Enterprise Cloud details",id:"step-6-enter-redis-enterprise-cloud-details",level:3},{value:"Step 7. Verify the database under RedisInsight dashboard",id:"step-7-verify-the-database-under-redisinsight-dashboard",level:3},{value:"Step 8. Execute JSON queries",id:"step-8-execute-json-queries",level:3},{value:"Step 8. Accessing RedisInsight Browser Tool",id:"step-8-accessing-redisinsight-browser-tool",level:3},{value:"Step 9. Add a new key",id:"step-9-add-a-new-key",level:3},{value:"Step 10. Expand the JSON field",id:"step-10-expand-the-json-field",level:3},{value:"References",id:"references",level:3}],p={toc:u};function c(e){let{components:t,...d}=e;return(0,a.kt)("wrapper",(0,s.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(n.Z,{frontMatter:r,mdxType:"Authors"}),(0,a.kt)("p",null,"RedisInsight provides built-in support for the Redis JSON, Search and Query, Streams, and Time Series features to make it even easier to query, visualize, and interactively manipulate search indexes, streams, and time-series data. Support for JSON on Redis Cluster was introduced for the first time in RedisInsight v1.8.0. With RedisInsight, you can visualize and edit your JSON data flawlessly."),(0,a.kt)("p",null,"Below steps shows how to get started with Redis JSON using RedisInsight:"),(0,a.kt)("h3",{id:"step-1-create-a-free-cloud-account"},"Step 1. Create a free Cloud account"),(0,a.kt)("p",null,"Create your free ",(0,a.kt)("a",{href:"https://redis.com/try-free/",target:"_blank",rel:"noopener"},"Redis Enterprise Cloud account"),". Once you click on \u201cGet Started\u201d, you will receive an email with a link to activate your account and complete your signup process."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For a limited time, use ",(0,a.kt)("strong",{parentName:"p"},"TIGER200")," to get ",(0,a.kt)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),(0,a.kt)("p",{parentName:"admonition"},"\ud83c\udf89 ",(0,a.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"Click here to sign up"))),(0,a.kt)("h3",{id:"step-2-create-your-database"},"Step 2. Create Your database"),(0,a.kt)("p",null,'Choose your preferred cloud vendor. Select the region and then click "Let\'s start free" to create your free database automatically.'),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'If you want to create a custom database with your preferred name and type of redis,\nclick "Create a custom database" option shown in the image.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create database ",src:i(8884).Z,width:"1676",height:"1010"})),(0,a.kt)("h3",{id:"step-3-verify-the-database-details"},"Step 3. Verify the database details"),(0,a.kt)("p",null,'You will be provided with Public endpoint URL and "Redis Stack" as the type of database with the list of features that comes by default.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"verify database",src:i(85866).Z,width:"1346",height:"881"})),(0,a.kt)("h3",{id:"step-4-using-redisinsight"},"Step 4. Using RedisInsight"),(0,a.kt)("p",null,"RedisInsight is a visual tool that lets you do both GUI- and CLI-based interactions with your Redis database, and so much more when developing your Redis based application. It is a fully-featured pure Desktop GUI client that provides capabilities to design, develop and optimize your Redis application. It works with any cloud provider as long as you run it on a host with network access to your cloud-based Redis server. It makes it easy to discover cloud databases and configure connection details with a single click. It allows you to automatically add Redis Enterprise Software and Redis Enterprise Cloud databases."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/explore/redisinsightv2/getting-started"},"Follow this link"),' to install RedisInsight v2 on your local system.\nAssuming that you already have RedisInsight v2 installed on your MacOS, you can browse through the Applications and click "RedisInsight-v2" to bring up the Redis Desktop GUI tool.'),(0,a.kt)("h3",{id:"step-5-add-redis-database"},"Step 5. Add Redis database"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"access redisinsight",src:i(49978).Z,width:"2078",height:"1496"})),(0,a.kt)("h3",{id:"step-6-enter-redis-enterprise-cloud-details"},"Step 6. Enter Redis Enterprise Cloud details"),(0,a.kt)("p",null,"Add the Redis Enterprise cloud database endpoint, port and password."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"access redisinsight",src:i(84620).Z,width:"2332",height:"1734"})),(0,a.kt)("h3",{id:"step-7-verify-the-database-under-redisinsight-dashboard"},"Step 7. Verify the database under RedisInsight dashboard"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"database details",src:i(73204).Z,width:"2226",height:"844"})),(0,a.kt)("h3",{id:"step-8-execute-json-queries"},"Step 8. Execute JSON queries"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},' JSON.SET employee_profile . \'{ "employee":  { "name": "carol", "age": 40, "married": true } }\'\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(9914).Z,width:"2688",height:"586"})),(0,a.kt)("h3",{id:"step-8-accessing-redisinsight-browser-tool"},"Step 8. Accessing RedisInsight Browser Tool"),(0,a.kt)("p",null,'Select "employee_profile" to display the JSON data'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(44204).Z,width:"2216",height:"936"})),(0,a.kt)("h3",{id:"step-9-add-a-new-key"},"Step 9. Add a new key"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(22342).Z,width:"2442",height:"722"})),(0,a.kt)("h3",{id:"step-10-expand-the-json-field"},"Step 10. Expand the JSON field"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"My Image",src:i(50710).Z,width:"2432",height:"698"})),(0,a.kt)("h3",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://university.redis.com/courses/ru204/"},"RU204: Storing, Querying and Indexing JSON at Speed")," - a course at Redis University"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/howtos/redisjson/using-python"},"Redis JSON and Python")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/howtos/redisjson/storing-complex-json-document"},"How to store and retrieve nested JSON document")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/howtos/redisjson/using-nodejs"},"Importing JSON data into Redis using NodeJS")),(0,a.kt)("li",{parentName:"ul"},"Learn more about ",(0,a.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisjson/"},"Redis JSON")," in the QuickStart tutorial."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/howtos/shoppingcart"},"How to build shopping cart app using NodeJS and Redis JSON")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://redis.com/blog/index-and-query-json-docs-with-redis/"},"Indexing, Querying, and Full-Text Search of JSON Documents with Redis"))))}c.isMDXComponent=!0},49978:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/add_database-9830232a6e209dc61f0bfd5a8bf87ea4.png"},84620:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/database_creds-f7ab4af8f0121712ed02fff3901ebfec.png"},73204:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/database_details-d49880aa22636d96917ad114493a4711.png"},85866:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/details_database-471fa25198e8a549638e2fc8710b96c0.png"},9914:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/json_0-dae6a12badfddde24ea192be72104a45.png"},44204:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/json_1-8cd956693e6805685dbbf491203e6e4d.png"},22342:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/json_2-db12ef0845c558975da110e6a54f3560.png"},50710:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/json_3-a6c83057464545ed781e9e4444503e6d.png"},8884:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/select_cloud_vendor-1ad229a2effb7aad2f19495d0cea18fb.png"}}]);