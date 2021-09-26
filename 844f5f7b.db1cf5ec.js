(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{168:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return b}));var i=a(3),n=a(7),r=(a(0),a(248)),s=a(253),c=a(254),o=(a(249),a(250),{id:"index-python",title:"Python and Redis",sidebar_label:"Overview",slug:"/develop/python/"}),l={unversionedId:"develop/python/index-python",id:"develop/python/index-python",isDocsHomePage:!1,title:"Python and Redis",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and Python.",source:"@site/docs/develop/python/index-python.mdx",slug:"/develop/python/",permalink:"/develop/python/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/python/index-python.mdx",version:"current",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Course Wrap Up",permalink:"/develop/node/nodecrashcourse/coursewrapup"},next:{title:"Using Redis with FastAPI",permalink:"/develop/python/fastapi"}},d=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Step 1. Install the Redis library using <code>pip</code>",id:"step-1-install-the-redis-library-using-pip",children:[]},{value:"Step 2. Write your application code",id:"step-2-write-your-application-code",children:[]},{value:"More developer resources",id:"more-developer-resources",children:[]},{value:"Redis Launchpad",id:"redis-launchpad",children:[]},{value:"Redis University",id:"redis-university",children:[]},{value:"Redis for Python Developers",id:"redis-for-python-developers",children:[]},{value:"References",id:"references",children:[]}],p={toc:d};function b(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and Python."),Object(r.b)("h3",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,"The Python community has built many client libraries that you can find ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.io/clients#python"}),"here"),".\nFor your first steps with Python and Redis, this article will show how to use the recommended library: ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/andymccurdy/redis-py"}),"redis-py"),"."),Object(r.b)(s.a,{defaultValue:"redis-py",values:[{label:"Redis Py",value:"redis-py"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"redis-py",mdxType:"TabItem"},Object(r.b)("h3",{id:"step-1-install-the-redis-library-using-pip"},"Step 1. Install the Redis library using ",Object(r.b)("inlineCode",{parentName:"h3"},"pip")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," pip3 install redis\n")),Object(r.b)("h3",{id:"step-2-write-your-application-code"},"Step 2. Write your application code"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"})," import redis\n\n redis = redis.Redis(\n     host= 'localhost',\n     port= '6379')\n\n redis.set('mykey', 'Hello from Python!')\n value = redis.get('mykey') \n print(value)\n\n redis.zadd('vehicles', {'car' : 0})\n redis.zadd('vehicles', {'bike' : 0})\n vehicles = redis.zrange('vehicles', 0, -1)\n print(vehicles)\n")),Object(r.b)("p",null,'Find more information about Redis & Redis connections in the "',Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/redis-developer/redis-connect/tree/master/python/redispy"}),"Redis Connect"),'".'))),Object(r.b)("h3",{id:"more-developer-resources"},"More developer resources"),Object(r.b)("div",{class:"row"},Object(r.b)("div",{class:"col"},Object(r.b)("h4",{id:"sample-code"},"Sample Code"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(i.a)({parentName:"strong"},{href:"https://github.com/redis-developer/basic-caching-demo-nodejs"}),"Flask Simple Rate limiting Example   ")),"\nApplication that shows how to do rate limiting using various Redis datastructure.")),Object(r.b)("div",{class:"col"},Object(r.b)("h4",{id:"technical-articles--videos"},"Technical Articles & Videos"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",Object(i.a)({parentName:"strong"},{href:"https://redislabs.com/blog/beyond-the-cache-with-python/"}),"Beyond the Cache with Python"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"redis-launchpad"},"Redis Launchpad"),Object(r.b)("p",null,"Redis Launchpad is like an \u201cApp Store\u201d for Redis sample apps. You can easily find apps for your preferred frameworks and languages.\nBelow are few of these apps. ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://launchpad.redis.com"}),"Click here to access the complete lists of apps")),Object(r.b)("div",{class:"row text--center"},Object(r.b)("div",{class:"col "},Object(r.b)("div",{className:"ri-container"},Object(r.b)("h4",{id:"rate-limiting-app-in-python--django"},"Rate-Limiting app in Python & Django"),Object(r.b)("p",null,Object(r.b)("img",{alt:"launchpad",src:a(607).default})),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://launchpad.redis.com/?id=project%3Abasic-rate-limiting-demo-python"}),"Rate Limiting app")," built in Python & Django"))),Object(r.b)("div",{class:"col"},Object(r.b)("div",{className:"ri-container"},Object(r.b)("h4",{id:"leaderboard-app-in-python--django"},"Leaderboard app in Python & Django"),Object(r.b)("p",null,Object(r.b)("img",{alt:"launchpad",src:a(608).default})),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://launchpad.redis.com/?id=project%3Abasic-redis-leaderboard-demo-python"}),"How to implement leaderboard app")," in Python & Django")))),Object(r.b)("h3",{id:"redis-university"},"Redis University"),Object(r.b)("h3",{id:"redis-for-python-developers"},Object(r.b)("a",Object(i.a)({parentName:"h3"},{href:"https://university.redislabs.com/courses/ru102py/"}),"Redis for Python Developers")),Object(r.b)("p",null,"A complete introduction to Redis for Python developers."),Object(r.b)("div",{class:"text--center"},Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/BxRJRNt7Qwc",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(r.b)("h3",{id:"references"},"References"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.redislabs.com/howtos/redisjson/storing-json-document#redisjson-python-client"}),"Storing JSON document in Redis using Python")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.redislabs.com/howtos/herokupython/"}),"Python based application on Heroku using Redis")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.redislabs.com/howtos/ratelimiting/"}),"How to build a Rate Limiter using Redis")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.redislabs.com/explore/redisinsight/redisgears/"}),"Writing Your Serverless function using RedisGears Browser Tool"))),Object(r.b)("h2",{id:""}),Object(r.b)("div",null,Object(r.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(r.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}b.isMDXComponent=!0},250:function(e,t,a){"use strict";var i=a(0),n=a.n(i),r=a(248),s=a(256);a(249),a(55);t.a=function(e){var t=n.a.useState(!1),a=t[0],i=t[1];return n.a.createElement("div",{className:"ri-container"},n.a.createElement("div",{className:"ri-description-short"},n.a.createElement("div",{className:"ri-icon"},n.a.createElement("span",{className:"fe fe-zap"})),n.a.createElement("div",{className:"ri-detail"},n.a.createElement("div",{className:"ri-title"},n.a.createElement("a",{href:e.page},e.title)),n.a.createElement("div",{className:"ri-description"},e.description,n.a.Children.count(e.children)>0&&n.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return i(!a)}})))),a&&n.a.createElement("div",{className:"ri-description-long"},n.a.createElement(r.a,{components:s.a},e.children)))}},251:function(e,t,a){"use strict";var i=a(0),n=a(252);t.a=function(){var e=Object(i.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},252:function(e,t,a){"use strict";var i=a(0),n=Object(i.createContext)(void 0);t.a=n},253:function(e,t,a){"use strict";var i=a(0),n=a.n(i),r=a(251),s=a(255),c=a(56),o=a.n(c),l=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,p=e.values,b=e.groupId,u=e.className,h=Object(r.a)(),m=h.tabGroupChoices,j=h.setTabGroupChoices,v=Object(i.useState)(c),f=v[0],O=v[1],y=i.Children.toArray(e.children);if(null!=b){var g=m[b];null!=g&&g!==f&&p.some((function(e){return e.value===g}))&&O(g)}var w=function(e){O(e),null!=b&&j(b,e)},N=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},u)},p.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(s.a)("tabs__item",o.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(i.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},254:function(e,t,a){"use strict";var i=a(3),n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return r.a.createElement("div",Object(i.a)({role:"tabpanel"},{hidden:a,className:n}),t)}},607:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ratelimitingdjango-0de5ea9294e982234c918ecc90d07e54.png"},608:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/leaderboarddjango-f955edb48cfc9349387dc20d632dfcfe.png"}}]);