"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7676],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,c=u["".concat(s,".").concat(h)]||u[h]||m[h]||i;return n?r.createElement(c,o(o({ref:t},p),{},{components:n})):r.createElement(c,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={id:"index-query",title:"4. Query Data",sidebar_label:"4. Query Data",slug:"/howtos/moviesdatabase/query"},o=void 0,l={unversionedId:"howtos/moviesdatabase/query/index-query",id:"howtos/moviesdatabase/query/index-query",title:"4. Query Data",description:"The database contains a few movies, and an index, it is now possible to execute some queries.",source:"@site/docs/howtos/moviesdatabase/query/index-query.mdx",sourceDirName:"howtos/moviesdatabase/query",slug:"/howtos/moviesdatabase/query",permalink:"/howtos/moviesdatabase/query",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/moviesdatabase/query/index-query.mdx",tags:[],version:"current",lastUpdatedAt:1686322286,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{id:"index-query",title:"4. Query Data",sidebar_label:"4. Query Data",slug:"/howtos/moviesdatabase/query"},sidebar:"docs",previous:{title:"3. Create Index",permalink:"/howtos/moviesdatabase/create"},next:{title:"5. Manage Index",permalink:"/howtos/moviesdatabase/manage"}},s={},d=[{value:"Queries",id:"queries",level:2},{value:"Insert, Update, Delete and Expire Documents",id:"insert-update-delete-and-expire-documents",level:2},{value:"More",id:"more",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The database contains a few movies, and an index, it is now possible to execute some queries."),(0,a.kt)("h2",{id:"queries"},"Queries"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example : ",(0,a.kt)("em",{parentName:"strong"},'All the movies that contains the string "',(0,a.kt)("inlineCode",{parentName:"em"},"war"),'"'))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> FT.SEARCH idx:movie "war"\n\n1) (integer) 2\n2) "movie:11005"\n3)  1) "title"\n    2) "Star Wars: Episode VI - Return of the Jedi"\n    ...\n   14) "tt0086190"\n4) "movie:11002"\n5)  1) "title"\n    2) "Star Wars: Episode V - The Empire Strikes Back"\n    ...\n   13) "imdb_id"\n   14) "tt0080684"\n\n')),(0,a.kt)("p",null,"The FT.SEARCH commands returns a list of results starting with the number of results, then the list of elements (keys & fields)."),(0,a.kt)("p",null,"As you can see the movie ",(0,a.kt)("em",{parentName:"p"},"Star Wars: Episode V - The Empire Strikes Back")," is found, even though you used only the word \u201cwar\u201d to match \u201cWars\u201d in the title. This is because the title has been indexed as text, so the field is ",(0,a.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisearch/Escaping/"},"tokenized")," and ",(0,a.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisearch/Stemming/"},"stemmed"),"."),(0,a.kt)("p",null,"Later when looking at the query syntax in more detail you will learn more about the search capabilities."),(0,a.kt)("p",null,"It is also possible to limit the list of fields returned by the query using the ",(0,a.kt)("inlineCode",{parentName:"p"},"RETURN")," parameter, let's run the same query, and return only the title and release_year:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> FT.SEARCH idx:movie "war" RETURN 2 title release_year\n\n1) (integer) 2\n2) "movie:11005"\n3) 1) "title"\n   2) "Star Wars: Episode VI - Return of the Jedi"\n   3) "release_year"\n   4) "1983"\n4) "movie:11002"\n5) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n')),(0,a.kt)("p",null,'This query does not specify any "field" and still returns some movies, this is because Search in Redis Stack will search all TEXT fields by default. In the current index only the title is present as a TEXT field. You will see later how to update an index, to add more fields to it.'),(0,a.kt)("p",null,"If you need to perform a query on a specific field you can specify it using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@field:")," syntax, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> FT.SEARCH idx:movie "@title:war" RETURN 2 title release_year\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example : ",(0,a.kt)("em",{parentName:"strong"},'All the movies that contains the string "',(0,a.kt)("inlineCode",{parentName:"em"},"war")," but NOT the ",(0,a.kt)("inlineCode",{parentName:"em"},"jedi"),' one"'))),(0,a.kt)("p",null,"Adding the string ",(0,a.kt)("inlineCode",{parentName:"p"},"-jedi")," (minus) will ask the query engine not to return values that contain ",(0,a.kt)("inlineCode",{parentName:"p"},"jedi"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> FT.SEARCH idx:movie "war -jedi" RETURN 2 title release_year\n\n1) (integer) 1\n2) "movie:11002"\n3) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example : ",(0,a.kt)("em",{parentName:"strong"},'All the movies that contains the string "',(0,a.kt)("inlineCode",{parentName:"em"},"gdfather"),' using fuzzy search"'))),(0,a.kt)("p",null,"As you can see the word godfather contains a spelling error, it can however be matched using ",(0,a.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisearch/Query_Syntax/#fuzzy_matching"},"fuzzy matching"),". Fuzzy matches are performed based on ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Levenshtein_distance"},"Levenshtein distance")," (LD)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> FT.SEARCH idx:movie " %gdfather% " RETURN 2 title release_year\n\n1) (integer) 1\n2) "movie:11003"\n3) 1) "title"\n   2) "The Godfather"\n   3) "release_year"\n   4) "1972"\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example : ",(0,a.kt)("em",{parentName:"strong"},"All ",(0,a.kt)("inlineCode",{parentName:"em"},"Thriller"),' movies"'))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"genre")," fields is indexed as a TAG and allows exact match queries."),(0,a.kt)("p",null,"The syntax to query a TAG field is @field_name:{value}"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> FT.SEARCH idx:movie "@genre:{Thriller}" RETURN 2 title release_year\n\n1) (integer) 1\n2) "movie:11004"\n3) 1) "title"\n   2) "Heat"\n   3) "release_year"\n   4) "1995"\n\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example : ",(0,a.kt)("em",{parentName:"strong"},"All ",(0,a.kt)("inlineCode",{parentName:"em"},"Thriller")," or ",(0,a.kt)("inlineCode",{parentName:"em"},"Action"),' movies"'))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> FT.SEARCH idx:movie "@genre:{Thriller|Action}" RETURN 2 title release_year\n\n1) (integer) 3\n2) "movie:11004"\n3) 1) "title"\n   2) "Heat"\n   3) "release_year"\n   4) "1995"\n4) "movie:11005"\n5) 1) "title"\n   2) "Star Wars: Episode VI - Return of the Jedi"\n   3) "release_year"\n   4) "1983"\n6) "movie:11002"\n7) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n')),(0,a.kt)("p",null,"You can find more information about the Tag filters in ",(0,a.kt)("a",{parentName:"p",href:"https://oss.redis.com/redisearch/master/Query_Syntax/#tag_filters"},"the documentation"),"."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example : ",(0,a.kt)("em",{parentName:"strong"},"All ",(0,a.kt)("inlineCode",{parentName:"em"},"Thriller")," or ",(0,a.kt)("inlineCode",{parentName:"em"},"Action")," movies that does not have ",(0,a.kt)("inlineCode",{parentName:"em"},"Jedi"),' in the title"'))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> FT.SEARCH idx:movie "@genre:{Thriller|Action} @title:-jedi" RETURN 2 title release_year\n\n1) (integer) 2\n2) "movie:11004"\n3) 1) "title"\n   2) "Heat"\n   3) "release_year"\n   4) "1995"\n4) "movie:11002"\n5) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example : ",(0,a.kt)("em",{parentName:"strong"},"All the movies released between 1970 and 1980 (included)"))),(0,a.kt)("p",null,"The FT.SEARCH syntax has two ways to query numeric fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"using the ",(0,a.kt)("inlineCode",{parentName:"li"},"FILTER")," parameter")),(0,a.kt)("p",null,"or"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"using the ",(0,a.kt)("inlineCode",{parentName:"li"},"@field")," in the query string.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> FT.SEARCH idx:movie * FILTER release_year 1970 1980 RETURN 2 title release_year\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> FT.SEARCH idx:movie "@release_year:[1970 1980]" RETURN 2 title release_year\n\n1) (integer) 2\n2) "movie:11003"\n3) 1) "title"\n   2) "The Godfather"\n   3) "release_year"\n   4) "1972"\n4) "movie:11002"\n5) 1) "title"\n   2) "Star Wars: Episode V - The Empire Strikes Back"\n   3) "release_year"\n   4) "1980"\n\n')),(0,a.kt)("p",null,"To exclude a value prepend it with ",(0,a.kt)("inlineCode",{parentName:"p"},"(")," in the FILTER or query string, for example to exclude 1980:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> FT.SEARCH idx:movie "@release_year:[1970 (1980]" RETURN 2 title release_year\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"insert-update-delete-and-expire-documents"},"Insert, Update, Delete and Expire Documents"),(0,a.kt)("p",null,"As part of this tutorial you have:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Created few movies, as Redis hashes (",(0,a.kt)("em",{parentName:"li"},"that we call document"),") with the following key pattern ",(0,a.kt)("inlineCode",{parentName:"li"},"movie:*")),(0,a.kt)("li",{parentName:"ol"},"Created an index using the ",(0,a.kt)("inlineCode",{parentName:"li"},"FT.CREATE")," command"),(0,a.kt)("li",{parentName:"ol"},"Queried the data using ",(0,a.kt)("inlineCode",{parentName:"li"},"FT.SEARCH"))),(0,a.kt)("p",null,"When creating the index, using the ",(0,a.kt)("inlineCode",{parentName:"p"},'idx:movie ON hash PREFIX 1 "movie:"')," parameter you are asking the indexing engine to look at all existing keys and index them."),(0,a.kt)("p",null,"Also new information that matches this pattern/type, will be indexed."),(0,a.kt)("p",null,"Let's count the number of movies, add a new one, and count again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> FT.SEARCH idx:movie "*" LIMIT 0 0\n\n1) (integer) 4\n\n\n> HSET movie:11033 title "Tomorrow Never Dies" plot "James Bond sets out to stop a media mogul\'s plan to induce war between China and the U.K in order to obtain exclusive global media coverage." release_year 1997 genre "Action" rating 6.5 votes 177732 imdb_id tt0120347\n\n> FT.SEARCH idx:movie "*" LIMIT 0 0\n\n1) (integer) 5\n\n')),(0,a.kt)("p",null,"The new movie has been indexed. You can also search on any of the indexed fields:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> FT.SEARCH idx:movie "never" RETURN 2 title release_year\n\n1) (integer) 1\n2) "movie:11033"\n3) 1) "title"\n   2) "Tomorrow Never Dies"\n   3) "release_year"\n   4) "1997"\n')),(0,a.kt)("p",null,"Now you ",(0,a.kt)("strong",{parentName:"p"},"update")," one of the field, and search for ",(0,a.kt)("inlineCode",{parentName:"p"},"007")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> HSET movie:11033 title "Tomorrow Never Dies - 007"\n\n\n> FT.SEARCH idx:movie "007" RETURN 2 title release_year\n\n1) (integer) 1\n2) "movie:11033"\n3) 1) "title"\n   2) "Tomorrow Never Dies - 007"\n   3) "release_year"\n   4) "1997"\n')),(0,a.kt)("p",null,"When you ",(0,a.kt)("em",{parentName:"p"},"delete")," the hash, the index is also updated, and the same happens when the key expires (TTL-Time To Live)."),(0,a.kt)("p",null,"For example, set the James Bond movie to expire in 20 seconds time:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> EXPIRE "movie:11033" 20\n\n')),(0,a.kt)("p",null,"You can run the following query, and you will that the document expires after 20 seconds and the search query will not return any results, showing that the index has been updated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> FT.SEARCH idx:movie "007" RETURN 2 title release_year\n\n1) (integer)\n\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'When you are using Redis as your primary database you are not necessarily using TTLs to delete records. However, if the data you are storing and indexing are transient (e.g a caching layer at the top of another datastore or Web service, query user sessions content, etc.), this is often qualified as an "',(0,a.kt)("a",{parentName:"p",href:"https://redis.com/blog/the-case-for-ephemeral-search/"},"Ephemeral Search"),'" use case: lightweight, fast and expiration.')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"more"},"More"),(0,a.kt)("p",null,"You have many additional features regarding indexing and searching that you can find in the documentation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisearch/master/Commands/#ftsearch"},"FT.SEARCH command")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisearch/master/Query_Syntax/"},"Query Syntax"))),(0,a.kt)("p",null,"Let's see how to inspect, modify and drop an index."))}m.isMDXComponent=!0}}]);