"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[1381],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||n;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},50358:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(67294),o=r(52263);const n="authorByline_VoxI",i="authorLabel_a70t",l="authorProfileImage_URwT";const s=function(e){let{frontMatter:t}=e;const{siteConfig:r}=(0,o.Z)(),s=r.customFields.authors;return a.createElement(a.Fragment,null,t.authors&&a.createElement("div",{className:"docAuthors"},a.createElement("hr",null),t.authors.map((e=>a.createElement("div",{key:e,className:n},a.createElement("img",{className:l,src:`/img/${s[e].image?s[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${s[e].name}`}),a.createElement("div",null,a.createElement("div",{className:i},"Author:"),a.createElement("div",null,a.createElement("a",{href:s[e].link,target:"_blank"},s[e].name),", ",s[e].title))))),a.createElement("hr",null)))}},17835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(87462),o=(r(67294),r(3905)),n=r(50358);const i={id:"index-herokujava",title:"Deploy Java app on Heroku using Redis",sidebar_label:"How to deploy a Java based application on Heroku using Redis",slug:"/create/heroku/herokujava",authors:["ajeet"]},l=void 0,s={unversionedId:"create/heroku/herokujava/index-herokujava",id:"create/heroku/herokujava/index-herokujava",title:"Deploy Java app on Heroku using Redis",description:"Heroku is a cloud service provider and software development platform which facilitates fast and effective building, deploying and scaling of web applications. It offers you a ready-to-use environment that allows you to deploy your code fast.",source:"@site/docs/create/heroku/herokujava/index-herokujava.mdx",sourceDirName:"create/heroku/herokujava",slug:"/create/heroku/herokujava",permalink:"/create/heroku/herokujava",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/heroku/herokujava/index-herokujava.mdx",tags:[],version:"current",lastUpdatedAt:1685648648,formattedLastUpdatedAt:"Jun 1, 2023",frontMatter:{id:"index-herokujava",title:"Deploy Java app on Heroku using Redis",sidebar_label:"How to deploy a Java based application on Heroku using Redis",slug:"/create/heroku/herokujava",authors:["ajeet"]},sidebar:"docs",previous:{title:"Redis on Heroku",permalink:"/create/heroku/portal"},next:{title:"How to deploy a NodeJS based application on Heroku using Redis",permalink:"/create/heroku/herokunodejs"}},p={},u=[{value:"Step 1. Create Redis Enterprise Cloud",id:"step-1-create-redis-enterprise-cloud",level:4},{value:"Step 2. Create a Heroku account",id:"step-2-create-a-heroku-account",level:3},{value:"Step 3. Install Heroku CLI on your system",id:"step-3-install-heroku-cli-on-your-system",level:3},{value:"Step 4. Login to Heroku",id:"step-4-login-to-heroku",level:3},{value:"Step 5. Connect your application to Redis Enterprise Cloud",id:"step-5-connect-your-application-to-redis-enterprise-cloud",level:3},{value:"Clone the repository",id:"clone-the-repository",level:4},{value:"Step 6. Setting up Environment Variables",id:"step-6-setting-up-environment-variables",level:3},{value:"Step 7. Deploy your code",id:"step-7-deploy-your-code",level:3},{value:"Step 8. Accessing the application",id:"step-8-accessing-the-application",level:3},{value:"Next Steps",id:"next-steps",level:3}],d={toc:u};function c(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(n.Z,{frontMatter:i,mdxType:"Authors"}),(0,o.kt)("p",null,"Heroku is a cloud service provider and software development platform which facilitates fast and effective building, deploying and scaling of web applications. It offers you a ready-to-use environment that allows you to deploy your code fast."),(0,o.kt)("p",null,"Some of the notable benefits of Heroku include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users can get started with the free tier of Heroku"),(0,o.kt)("li",{parentName:"ul"},"Let developers concentrate on coding and not server management"),(0,o.kt)("li",{parentName:"ul"},"Integrates with familiar developer workflows"),(0,o.kt)("li",{parentName:"ul"},"Enhance the productivity of cloud app development teams"),(0,o.kt)("li",{parentName:"ul"},"Helps your development, QA, and business stakeholders create a unified dashboard"),(0,o.kt)("li",{parentName:"ul"},"Support for Modern Open Source Languages")),(0,o.kt)("h4",{id:"step-1-create-redis-enterprise-cloud"},"Step 1. Create Redis Enterprise Cloud"),(0,o.kt)("p",null,"Create your free Redis Enterprise Cloud account by visiting ",(0,o.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"this link")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For a limited time, use ",(0,o.kt)("strong",{parentName:"p"},"TIGER200")," to get ",(0,o.kt)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),(0,o.kt)("p",{parentName:"admonition"},"\ud83c\udf89 ",(0,o.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"Click here to sign up"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"recloud",src:r(4545).Z,width:"2486",height:"1804"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/create/rediscloud"},"Follow this link to create a Redis Enterprise Cloud")," subscription and database. Once you create the database, you will be provisioned with a unique database endpoint URL, port and password. Save these for future reference."),(0,o.kt)("h3",{id:"step-2-create-a-heroku-account"},"Step 2. Create a Heroku account"),(0,o.kt)("p",null,"If you are using Heroku for the first time, create your new Heroku account ",(0,o.kt)("a",{parentName:"p",href:"https://signup.heroku.com/login"},"through this link")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:r(18840).Z,width:"900",height:"1156"})),(0,o.kt)("h3",{id:"step-3-install-heroku-cli-on-your-system"},"Step 3. Install Heroku CLI on your system"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-macos"}," brew install heroku\n")),(0,o.kt)("h3",{id:"step-4-login-to-heroku"},"Step 4. Login to Heroku"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," heroku login\n heroku: Press any key to open up the browser to login or q to exit:\n Opening browser to https://cli-auth.heroku.com/auth/cli/browser/XXXXXXXXXXA\n Logging in... done\n Logged in as your_email_address\n")),(0,o.kt)("h3",{id:"step-5-connect-your-application-to-redis-enterprise-cloud"},"Step 5. Connect your application to Redis Enterprise Cloud"),(0,o.kt)("p",null,"For this demonstration, we will be using a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/basic-rate-limiting-demo-java"},"Sample Rate Limiting application"),"."),(0,o.kt)("h4",{id:"clone-the-repository"},"Clone the repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," git clone https://github.com/redis-developer/basic-rate-limiting-demo-java\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"heroku create\nCreating app... done, \u2b22 hidden-woodland-03996\nhttps://hidden-woodland-03996.herokuapp.com/ | https://git.heroku.com/hidden-woodland-03996.git\n")),(0,o.kt)("h3",{id:"step-6-setting-up-environment-variables"},"Step 6. Setting up Environment Variables"),(0,o.kt)("p",null,'Go to Heroku dashboard, click "Settings" and set REDIS_ENDPOINT_URI and REDIS_PASSWORD under the Config Vars.\nRefer to Step 1 for the correct values to use.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:r(13722).Z,width:"1452",height:"318"})),(0,o.kt)("p",null,"You now have a functioning Git repository that contains a simple application as well as a package.json file, which is used by Node\u2019s dependency manager."),(0,o.kt)("h3",{id:"step-7-deploy-your-code"},"Step 7. Deploy your code"),(0,o.kt)("p",null,"Heroku generates a random name (in this case hidden-woodland-03996) for your app, or you can pass a parameter to specify your own app name.\nNow deploy your code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git push heroku\nremote:        BUILD SUCCESSFUL in 1m 5s\nremote:        12 actionable tasks: 12 executed\nremote: -----\x3e Discovering process types\nremote:        Procfile declares types -> web\nremote:\nremote: -----\x3e Compressing...\nremote:        Done: 298.9M\nremote: -----\x3e Launching...\nremote:        Released v3\nremote:        https://hidden-woodland-03996.herokuapp.com/ deployed to Heroku\nremote:\nremote: Verifying deploy... done.\nTo https://git.heroku.com/hidden-woodland-03996.git\n * [new branch]      master -> master\n")),(0,o.kt)("h3",{id:"step-8-accessing-the-application"},"Step 8. Accessing the application"),(0,o.kt)("p",null,"Open ",(0,o.kt)("a",{parentName:"p",href:"https://hidden-woodland-03996.herokuapp.com/"},"https://hidden-woodland-03996.herokuapp.com/")," to see your application"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"heroku",src:r(36195).Z,width:"3164",height:"1110"})),(0,o.kt)("h3",{id:"next-steps"},"Next Steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/explore/redisinsight/"},"Connecting to the database using RedisInsight")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/howtos/moviesdatabase/getting-started/"},"How to build an IMDB clone with the Redis Search and Query engine"))))}c.isMDXComponent=!0},18840:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create_heroku-adefbcbc7fe61ec48d1a65a3172f9f58.png"},13722:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/heroku_app1_env-8d491cfd2c8859db457a5821eb59f94a.png"},36195:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/heroku_ratelimiter-536e63f33448af8ad5c84987300831e4.png"},4545:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/try-free-52c2cec515e5862b2f5021faf0fbbe53.png"}}]);