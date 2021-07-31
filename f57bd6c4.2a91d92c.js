(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(221)),s={id:"index-usingruby",title:"RedisJSON and Ruby",sidebar_label:"RedisJSON and Ruby",slug:"/howtos/redisjson/using-ruby"},o={unversionedId:"howtos/redisjson/using-ruby/index-usingruby",id:"howtos/redisjson/using-ruby/index-usingruby",isDocsHomePage:!1,title:"RedisJSON and Ruby",description:"rejson-rb is a package that allows storing, updating and querying objects as JSON documents in a Redis database that is extended with the ReJSON module. The package extends redis-rb's interface with ReJSON's API, and performs on-the-fly serialization/deserialization of objects to/from JSON.",source:"@site/docs/howtos/redisjson/using-ruby/index-usingruby.mdx",slug:"/howtos/redisjson/using-ruby",permalink:"/howtos/redisjson/using-ruby",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisjson/using-ruby/index-usingruby.mdx",version:"current",sidebar_label:"RedisJSON and Ruby",sidebar:"docs",previous:{title:"Indexing JSON document using RediSearch",permalink:"/howtos/redisjson/jsonind-document"},next:{title:"RedisJSON Cheatsheet",permalink:"/howtos/redisjson/redisjson-cheatsheet"}},c=[{value:"Step 1. Run RedisJSON docker container",id:"step-1-run-redisjson-docker-container",children:[]},{value:"Step 2. Install Ruby",id:"step-2-install-ruby",children:[]},{value:"Step 3. Install RedisJSON Gem",id:"step-3-install-redisjson-gem",children:[]},{value:"Step 4. Create a ruby file",id:"step-4-create-a-ruby-file",children:[]},{value:"Step 5. Execute the script",id:"step-5-execute-the-script",children:[]},{value:"References",id:"references",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"rejson-rb is a package that allows storing, updating and querying objects as JSON documents in a Redis database that is extended with the ReJSON module. The package extends redis-rb's interface with ReJSON's API, and performs on-the-fly serialization/deserialization of objects to/from JSON."),Object(i.b)("h3",{id:"step-1-run-redisjson-docker-container"},"Step 1. Run RedisJSON docker container"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," docker run -d -p 6379:6379 redislabs/redismod:latest\n")),Object(i.b)("h3",{id:"step-2-install-ruby"},"Step 2. Install Ruby"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," brew install ruby\n")),Object(i.b)("h3",{id:"step-3-install-redisjson-gem"},"Step 3. Install RedisJSON Gem"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," gem install rejson-rb\n")),Object(i.b)("h3",{id:"step-4-create-a-ruby-file"},"Step 4. Create a ruby file"),Object(i.b)("p",null,"Copy the below content and paste it in a file called 'employee.rb'."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),' require \'rejson\'\n\n rcl = Redis.new # Get a redis client\n\n # Get/Set/Delete keys\n obj = {\n      \'id\': "42",\n       \'name\': "Paul John",\n       \'email\': "paul.john@gmail.com",\n       \'address\': {\n           \'city\': \'London\'\n         }\n       }\n\n rcl.json_set("employee", Rejson::Path.root_path, obj)\n\n rcl.json_set("employee", Rejson::Path.new(".id"), 43)\n\n rcl.json_get "employee", Rejson::Path.root_path\n\n rcl.json_del "employee", ".address.city"\n')),Object(i.b)("p",null,"The above script uses RedisJSON commands to set the objects, alter the id to 43 and then perform the delete operation using 'json_del'"),Object(i.b)("h3",{id:"step-5-execute-the-script"},"Step 5. Execute the script"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," ruby employee.rb\n")),Object(i.b)("p",null,"You can verify what's happening in the background by running the monitor command in Redis CLI shell:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),' 127.0.0.1:6379> monitor\n OK\n 1627619198.040000 [0 172.17.0.1:57550] "JSON.SET" "employee" "." "{\\"id\\":\\"42\\",\\"name\\":\\"Paul John\\",\\"email\\":\\"paul.john@gmail.com\\",\\"address\\":{\\"city\\":\\"London\\"}}"\n 1627619198.040876 [0 172.17.0.1:57550] "JSON.SET" "employee" ".id" "43"\n1627619198.042132 [0 172.17.0.1:57550] "JSON.GET" "employee" "."\n1627619198.042741 [0 172.17.0.1:57550] "JSON.DEL" "employee" ".address.city"\n')),Object(i.b)("h3",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://marketplace.redislabs.com/?id=project%3Abasic-redis-rate-limiting-demo-ruby"}),"Rate Limiting app in Ruby and Redis")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/develop/ruby/"}),"Ruby and Redis"))))}d.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,m=u["".concat(s,".").concat(p)]||u[p]||b[p]||i;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);