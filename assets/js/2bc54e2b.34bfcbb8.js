"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||s;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},50358:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(52263);const s="authorByline_VoxI",i="authorLabel_a70t",o="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:n}=(0,r.Z)(),l=n.customFields.authors;return a.createElement(a.Fragment,null,t.authors&&a.createElement("div",{className:"docAuthors"},a.createElement("hr",null),t.authors.map((e=>a.createElement("div",{key:e,className:s},a.createElement("img",{className:o,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),a.createElement("div",null,a.createElement("div",{className:i},"Author:"),a.createElement("div",null,a.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),a.createElement("hr",null)))}},49118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),s=n(50358);const i={id:"index-socialnetwork",title:"How to Build a Social Network Application using Redis Stack and NodeJS",sidebar_label:"Building a Social Network Application using Redis Stack",slug:"/howtos/socialnetwork/",authors:["julian","manuel"]},o=void 0,l={unversionedId:"howtos/socialnetwork/index-socialnetwork",id:"howtos/socialnetwork/index-socialnetwork",title:"How to Build a Social Network Application using Redis Stack and NodeJS",description:"image",source:"@site/docs/howtos/socialnetwork/index-socialnetwork.mdx",sourceDirName:"howtos/socialnetwork",slug:"/howtos/socialnetwork/",permalink:"/howtos/socialnetwork/",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/socialnetwork/index-socialnetwork.mdx",tags:[],version:"current",lastUpdatedAt:1686771879,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{id:"index-socialnetwork",title:"How to Build a Social Network Application using Redis Stack and NodeJS",sidebar_label:"Building a Social Network Application using Redis Stack",slug:"/howtos/socialnetwork/",authors:["julian","manuel"]},sidebar:"docs",previous:{title:"Redis Anti-Patterns Every Developer Should Avoid",permalink:"/howtos/antipatterns/"},next:{title:"How to Use SSL/TLS With Redis Enterprise",permalink:"/howtos/security/"}},c={},d=[{value:"Getting Familiar with search in Redis Stack",id:"getting-familiar-with-search-in-redis-stack",level:2},{value:"Launching search in RedisStack in a Docker container",id:"launching-search-in-redisstack-in-a-docker-container",level:3},{value:"Creating Users",id:"creating-users",level:3},{value:"Query to match users",id:"query-to-match-users",level:3},{value:"Cleaning Up",id:"cleaning-up",level:3},{value:"Building a minimal backend in Typescript",id:"building-a-minimal-backend-in-typescript",level:3},{value:"Redis client",id:"redis-client",level:3},{value:"User controller",id:"user-controller",level:3},{value:"Web API",id:"web-api",level:3},{value:"Full code example",id:"full-code-example",level:3},{value:"References",id:"references",level:3}],u={toc:d};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{frontMatter:i,mdxType:"Authors"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(69868).Z,width:"2374",height:"1580"})),(0,r.kt)("p",null,"In this blog post we\u2019ll build a social network application using Redis Stack and NodeJS. This is the idea that we used for our app ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=18NPKZy28cQ"},"Skillmarket"),"."),(0,r.kt)("p",null,"The goal of the application is to match users with complementary skills. It will allow users to register and provide some information about themselves, like location, areas of expertise and interests. Using search in Redis Stack it will match two users who are geographically close, and have complementary areas of expertise and interests, e.g., one of them knows French and want to learn Guitar and the other knows Guitar and want to learn French."),(0,r.kt)("p",null,"The full source code of our application can be found in GitHub (note that we used some features like ",(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisearch/Commands/#ftadd"},"FT.ADD"))," which now are deprecated):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/julianmateu/skillmarket-backend"},"Skillmarket Backend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/julianmateu/skillmarket-front"},"Skillmarket Frontend"))),(0,r.kt)("p",null,"We will be using a more condensed version of the backend which can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/julianmateu/skillmarket-blogpost"},"Skillmarket Blogpost")," GitHub repo."),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RediSearch/redisearch-getting-started"},"official tutorial")," for more information about search in Redis Stack."),(0,r.kt)("h2",{id:"getting-familiar-with-search-in-redis-stack"},"Getting Familiar with search in Redis Stack"),(0,r.kt)("h3",{id:"launching-search-in-redisstack-in-a-docker-container"},"Launching search in RedisStack in a Docker container"),(0,r.kt)("p",null,"Let\u2019s start by launching Redis from the Redis Stack image using Docker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run -d --name redis redis/redis-stack:latest\n")),(0,r.kt)("p",null,"Here we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," command to start the container and pull the image if it is not present. The ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," flag tells docker to launch the container in the background (detached mode). We provide a name with ",(0,r.kt)("inlineCode",{parentName:"p"},"--name redis")," which will allow us to refer to this container with a friendly name instead of the hash or the random name docker will assign to it."),(0,r.kt)("p",null,"Finally, ",(0,r.kt)("inlineCode",{parentName:"p"},"redislabs/readisearch:latest")," tells docker to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," version of the ",(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/redislabs/redisearch"},"redislabs/readisearch image"))),(0,r.kt)("p",null,"Once the image starts, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"docker exec")," to launch a terminal inside the container, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-it")," flag (interactive tty) and specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"redis")," name provided before when creating the image, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"bash")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker exec -it redis bash\n")),(0,r.kt)("p",null,"Once inside the container, let\u2019s launch a ",(0,r.kt)("inlineCode",{parentName:"p"},"redis-cli")," instance to familiarize ourselves with the CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"redis-cli\n")),(0,r.kt)("p",null,"You will notice the prompt now indicates we\u2019re connected to ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:6379")),(0,r.kt)("h3",{id:"creating-users"},"Creating Users"),(0,r.kt)("p",null,"We\u2019ll use a Hash as the data structure to store information about our users. This will be a proof of concept, so our application will only use Redis as the data store. For a real life scenario, it would probably be better to have a primary data store which is the authoritative source of user data, and use Redis as the search index which can be used to speed up searches."),(0,r.kt)("p",null,'In a nutshell, you can think of a hash as a key/value store where the key can be any string we want, and the values are a document with several fields. It\u2019s common practise to use the hash to store many different types of objects, so they can be prefixed with their type, so a key would take the form of "object_type:id".'),(0,r.kt)("p",null,"An index will then be used on this hash data structure, to efficiently search for values of given fields. The following diagram taken from the search docs exeplifies this with a database for movies:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:n(42976).Z,width:"1298",height:"714"})),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"help @hash")," command (or refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://redis.io/commands#hash"},"documentation"),") to get a list of commands that can be used to manipulate hashes. To get help for a single command, like ",(0,r.kt)("inlineCode",{parentName:"p"},"HSET")," let\u2019s type ",(0,r.kt)("inlineCode",{parentName:"p"},"help HSET"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"127.0.0.1:6379> help hset\n\n  HSET key field value [field value ...]\n  summary: Set the string value of a hash field\n  since: 2.0.0\n  group: hash\n")),(0,r.kt)("p",null,"As we see, we can provide a key and a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"field value")," pairs."),(0,r.kt)("p",null,"We\u2019ll create a user in the hash table by using ",(0,r.kt)("inlineCode",{parentName:"p"},"user:id")," as the key, and we\u2019ll provide the fields ",(0,r.kt)("inlineCode",{parentName:"p"},"expertises"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"interests")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"location"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'HSET users:1 name "Alice" expertises "piano, dancing" interests "spanish, bowling" location "2.2948552,48.8736537"\n\nHSET users:2 name "Bob" expertises "french, spanish" interests "piano" location "2.2945412,48.8583206"\n\nHSET users:3 name "Charles" expertises "spanish, bowling" interests "piano, dancing" location "-0.124772,51.5007169"\n\n')),(0,r.kt)("h3",{id:"query-to-match-users"},"Query to match users"),(0,r.kt)("p",null,"Here we can see the power of the search index, which allows us to query by ",(0,r.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisearch/Tags/"},"tags")," (we provide a list of values, such as interests, and it will return any user whose interests match at least one value in the list), and ",(0,r.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisearch/Query_Syntax/#geo_filters_in_query"},"Geo")," (we can ask for users whose location is at a given radius in km from a point)."),(0,r.kt)("p",null,"To be able to do this, we have to instruct search to create an index:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FT.CREATE idx:users ON hash PREFIX 1 "users:" SCHEMA interests TAG expertises TAG location GEO\n')),(0,r.kt)("p",null,"We use the ",(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisearch/Commands/#ftcreate"},"FT.CREATE"))," command to create a full text search index named ",(0,r.kt)("code",null,"idx:users"),". We specify ",(0,r.kt)("code",null,"ON hash")," to indicate that we\u2019re indexing the hash table, and provide ",(0,r.kt)("code",null,'PREFIX 1 "users:"')," to indicate that we should index any document whose key starts with the prefix \u201cusers:\u201d. Finally we indicate the ",(0,r.kt)("code",null,"SCHEMA")," of the index by providing a list of fields to index, and their type."),(0,r.kt)("p",null,"Finally, we can query the index using the ",(0,r.kt)("code",null,(0,r.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisearch/Commands/#ftsearch"},"FT.SEARCH"))," command (see the ",(0,r.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisearch/Query_Syntax/#search_query_syntax"},"query syntax reference"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'127.0.0.1:6379> FT.SEARCH idx:users "@interests:{dancing|piano} @expertises:{spanish|bowling} @location:[2.2948552 48.8736537 5 km]"\n1) (integer) 1\n2) "users:2"\n3) 1) "name"\n   2) "Bob"\n   3) "expertises"\n   4) "french, spanish"\n   5) "interests"\n   6) "piano"\n   7) "location"\n   8) "2.2945412,48.8583206"\n')),(0,r.kt)("p",null,"In this case we\u2019re looking for matches for Alice, so we use her expertises in the ",(0,r.kt)("inlineCode",{parentName:"p"},"interests")," field of the query, and her interests in the ",(0,r.kt)("inlineCode",{parentName:"p"},"expertises")," field. We also search for users in a 5km radius from her location, and we get Bob as a match."),(0,r.kt)("p",null,"If we expand the search radius to 500km we\u2019ll also see that Charles is returned:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'127.0.0.1:6379> FT.SEARCH idx:users "@interests:{dancing|piano} @expertises:{spanish|bowling} @location:[2.2948552 48.8736537 500 km]"\n1) (integer) 2\n2) "users:3"\n3) 1) "name"\n   2) "Charles"\n   3) "expertises"\n   4) "spanish, bowling"\n   5) "interests"\n   6) "piano, dancing"\n   7) "location"\n   8) "-0.124772,51.5007169"\n4) "users:2"\n5) 1) "name"\n   2) "Bob"\n   3) "expertises"\n   4) "french, spanish"\n   5) "interests"\n   6) "piano"\n   7) "location"\n   8) "2.2945412,48.8583206"\n\n')),(0,r.kt)("h3",{id:"cleaning-up"},"Cleaning Up"),(0,r.kt)("p",null,"We can now remove the docker instance and move on to building the web application, running the following command from outside the instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," docker rm -f redis\n\n")),(0,r.kt)("h3",{id:"building-a-minimal-backend-in-typescript"},"Building a minimal backend in Typescript"),(0,r.kt)("p",null,"After understanding how the index works, let\u2019s build a minimal backend API in NodeJS that will allow us to create a user, and query for matching users."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This is just an example, and we\u2019re not providing proper validation or error handling, nor other features required for the backend (e.g.\xa0authentication).")),(0,r.kt)("h3",{id:"redis-client"},"Redis client"),(0,r.kt)("p",null,"We\u2019ll use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/redis"},"node-redis")," package to create a client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const {\n    REDIS_PORT = 6379,\n    REDIS_HOST = 'localhost',\n} = process.env;\n\nconst client: RediSearchClient = createClient({\n    port: Number(REDIS_PORT),\n    host: REDIS_HOST,\n});\n\n")),(0,r.kt)("p",null,"All the functions in the library use callbacks, but we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"promisify")," to enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"async/await")," syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"client.hgetallAsync = promisify(client.hgetall).bind(client);\nclient.hsetAsync = promisify(client.hset).bind(client);\nclient.ft_createAsync = promisify(client.ft_create).bind(client);\nclient.ft_searchAsync = promisify(client.ft_search).bind(client);\n")),(0,r.kt)("p",null,"Finally, let\u2019s define a function to create the user index, as we did before in the CLI example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"async function createUserIndex() {\n    client.ft_createAsync(\n        'idx:users',\n        ['ON', 'hash', 'PREFIX', '1', 'users:', 'SCHEMA', 'interests', 'TAG', 'expertises', 'TAG', 'location', 'GEO']\n    );\n}\n\n")),(0,r.kt)("h3",{id:"user-controller"},"User controller"),(0,r.kt)("p",null,"Let\u2019s define the functions that the controller will use to expose a simple API on top of Redis. We\u2019ll define 3 functions: - ",(0,r.kt)("inlineCode",{parentName:"p"},"findUserById(userId)")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"createUser(user)")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"findMatchesForUser(user)")),(0,r.kt)("p",null,"But first let\u2019s define the model we\u2019ll use for the users:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"interface Location {\n    latitude: number;\n    longitude: number;\n};\n\ninterface User {\n    id?: string;\n    name: string;\n    interests: string[];\n    expertises: string[];\n    location: Location\n};\n")),(0,r.kt)("p",null,"Let\u2019s start with the function to create a user from the model object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"async function createUser(user: User): Promise<string> {\n    const id = uuid();\n    redisearchClient.hsetAsync(`users:${id}`, _userToSetRequestString(user));\n    return id;\n}\n\nfunction _userToSetRequestString(user: User): string[] {\n    const { id, location, interests, expertises, ...fields } = user;\n    let result = Object.entries(fields).flat();\n    result.push('interests', interests.join(', '));\n    result.push('expertises', expertises.join(', '));\n    result.push('location', `${location.longitude},${location.latitude}`);\n    return result;\n}\n")),(0,r.kt)("p",null,"We will create a UUID for the user, and then transform the TAG and GEO fields to the redis format. Here\u2019s an example of how these two formats look like:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"my image",src:n(29178).Z,width:"1292",height:"612"})),(0,r.kt)("p",null,"Let\u2019s now look at the logic to retrieve an existing user from the Hash table using ",(0,r.kt)("inlineCode",{parentName:"p"},"HGETALL"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"async function findUserById(userId: string): Promise<User> {\n    const response = await redisearchClient.hgetallAsync(`users:${userId}`);\n    if (!response) {\n        throw new Error('User Not Found');\n    }\n    return _userFromFlatEntriesArray(userId, Object.entries(response).flat());\n}\n\nfunction _userFromFlatEntriesArray(id: string, flatEntriesArray: any[]): User {\n   let user: any = {};\n\n    // The flat entries array contains all keys and values as elements in an array, e.g.:\n    // [key1, value1, key2, value2]\n    for (let j = 0; j < flatEntriesArray.length; j += 2) {\n       let key: string = flatEntriesArray[ j ];\n        let value: string = flatEntriesArray[ j + 1 ];\n        user[ key ] = value;\n    }\n\n    const location: string[] = user.location.split(',');\n    user.location = { longitude: Number(location[ 0 ]), latitude: Number(location[ 1 ]) };\n    user.expertises = user.expertises.split(', ');\n    user.interests = user.interests.split(', ');\n\n    return {id, ...user};\n}\n")),(0,r.kt)("p",null,"Here we have the inverse logic, where we want to split the TAG and GEO fields into a model object. There\u2019s also the fact that ",(0,r.kt)("inlineCode",{parentName:"p"},"HGETALL")," returns the field names and values in an array, and we need to build the model object from that."),(0,r.kt)("p",null,"Let\u2019s finally take a look at the logic to find matches for a given user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"async function findMatchesForUser(user: User, radiusKm: number): Promise<User[]> {\n   const allMatches: User[] = await _findMatches(user.interests, user.expertises, user.location, radiusKm);\n      return allMatches.filter(u => u.id !== user.id);\n}\n\nasync function _findMatches(expertises: string[], interests: string[], location: Location, radiusKm: number): Promise<User[]> {\n   let query = `@interests:{${interests.join('|')}}`\n      query += ` @expertises:{${expertises.join('|')}}`\n      query += ` @location:[${location.longitude} ${location.latitude} ${radiusKm} km]`;\n\n      const response = await redisearchClient.ft_searchAsync('idx:users', query);\n\n      return _usersFromSearchResponseArray(response);\n}\n\nfunction _usersFromSearchResponseArray(response: any[]): User[] {\n   let users = [];\n\n      // The search response is an array where the first element indicates the number of results, and then\n      // the array contains all matches in order, one element is they key and the next is the object, e.g.:\n      // [2, key1, object1, key2, object2]\n      for (let i = 1; i <= 2 * response[ 0 ]; i += 2) {\n         const user: User = _userFromFlatEntriesArray(response[ i ].replace('users:', ''), response[ i + 1 ]);\n         users.push(user);\n      }\n\n      return users;\n}\n")),(0,r.kt)("p",null,"Here we swap interests and expertises to find the complementary skill set, and we build the query that we used previously in the CLI example. we finally call the ",(0,r.kt)("inlineCode",{parentName:"p"},"FT.SEARCH")," function, and we build the model object from the response, which comes as an array. Results are filtered to exclude the current user from the matches list."),(0,r.kt)("h3",{id:"web-api"},"Web API"),(0,r.kt)("p",null,"Finally, we can build a trivial web API using express, exposing a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /users")," endpoint to create a user, a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /users/:userId")," endpoint to retrieve a user, and a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /users/:userId/matches")," endpoint to find matches for the given user (the desired ",(0,r.kt)("inlineCode",{parentName:"p"},"radiusKm")," can be optionally specified as a query parameter)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"app.post('/users', async (req, res) => {\n    const user: User = req.body;\n\n    if (!user || !user.name || !user.expertises || !user.interests || user.location.latitude === undefined || user.location.longitude === undefined) {\n        res.status(400).send('Missing required fields');\n    } else {\n        const userId = await userController.createUser(user);\n        res.status(200).send(userId);\n    }\n});\n\napp.get(\"/users/:userId\", async (req, res) => {\n    try {\n        const user: User = await userController.findUserById(req.params.userId);\n        res.status(200).send(user);\n    } catch (e) {\n        res.status(404).send();\n    }\n});\n\napp.get(\"/users/:userId/matches\", async (req, res) => {\n    try {\n        const radiusKm: number = Number(req.query.radiusKm) || 500;\n        const user: User = await userController.findUserById(req.params.userId);\n        const matches: User[] = await userController.findMatchesForUser(user, radiusKm);\n        res.status(200).send(matches);\n    } catch (e) {\n        console.log(e)\n        res.status(404).send();\n    }\n});\n\n")),(0,r.kt)("h3",{id:"full-code-example"},"Full code example"),(0,r.kt)("p",null,"The code used in this blogpost can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/julianmateu/skillmarket-blogpost"},"GitHub repo"),". The backend together with redis can be launched using docker compose:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," docker compose up -d --build\n")),(0,r.kt)("p",null,"The backend API will be exposed on port ",(0,r.kt)("inlineCode",{parentName:"p"},"8080"),". We can see the logs with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose logs"),", and use a client to query it. Here\u2019s an example using httpie:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'http :8080/users \\\n   name="Alice" \\\n   expertises:=\'["piano", "dancing"]\' \\\n   interests:=\'["spanish", "bowling"]\' \\\n   location:=\'{"longitude": 2.2948552, "latitude": 48.8736537}\'\n\n----------\nHTTP/1.1 200 OK\nConnection: keep-alive\nContent-Length: 36\nContent-Type: text/html; charset=utf-8\nDate: Mon, 01 Nov 2021 05:24:52 GMT\nETag: W/"24-dMinMMphAGzfWiCs49RBYnyK+r8"\nKeep-Alive: timeout=5\nX-Powered-By: Express\n\n03aef405-ef37-4254-ab3c-a5ddfbc4f04e\nhttp ":8080/users/03aef405-ef37-4254-ab3c-a5ddfbc4f04e/matches?radiusKm=15"\nHTTP/1.1 200 OK\nConnection: keep-alive\nContent-Length: 174\nContent-Type: application/json; charset=utf-8\nDate: Mon, 01 Nov 2021 05:26:29 GMT\nETag: W/"ae-3k2/swmuFaJd7BNHrkgvS/S+h2g"\nKeep-Alive: timeout=5\nX-Powered-By: Express\n[\n    {\n        "expertises": [\n            "french",\n            " spanish"\n        ],\n        "id": "58e81f09-d9fa-4557-9b8f-9f48a9cec328",\n        "interests": [\n            "piano"\n        ],\n        "location": {\n            "latitude": 48.8583206,\n            "longitude": 2.2945412\n        },\n        "name": "Bob"\n    }\n]\n')),(0,r.kt)("p",null,"Finally cleanup the environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker compose down --volumes --remove-orphans\n")),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/julianmateu/skillmarket-backend"},"Skillmarket Backend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/julianmateu/skillmarket-front"},"Skillmarket Frontend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/RediSearch/redisearch-getting-started"},"Search Tutorial"))),(0,r.kt)("h2",{id:""}),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,r.kt)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}p.isMDXComponent=!0},29178:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image_socialnetwork-07f7d7d7f2a5536e6493575ac71d8f88.png"},42976:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/searchindex-7e01db6630f70050d4d27a6d7b8a6c4d.png"},69868:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/socialnetwork-826a3451d7cf05bf179d96fa74c0e72c.png"}}]);