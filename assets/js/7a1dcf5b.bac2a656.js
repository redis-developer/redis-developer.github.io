"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[9572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={id:"creating-an-index",title:"Creating an Index with Redis OM",sidebar_label:"Creating an Index",slug:"/develop/dotnet/redis-om-dotnet/searching/creating-an-index",authors:["steve"]},i=void 0,d={unversionedId:"develop/dotnet/redis-om-dotnet/creating-an-index/creating-an-index",id:"develop/dotnet/redis-om-dotnet/creating-an-index/creating-an-index",title:"Creating an Index with Redis OM",description:"To unlock some of the nicest functionality of Redis OM, e.g., running searches, matches, aggregations, reductions, mappings, etc... You will need to tell Redis how you want data to be stored and how you want it indexed. One of the features the Redis OM library provides is creating indices that map directly to your objects by declaring the indices as attributes on your class.",source:"@site/docs/develop/dotnet/redis-om-dotnet/creating-an-index/creating-an-index.md",sourceDirName:"develop/dotnet/redis-om-dotnet/creating-an-index",slug:"/develop/dotnet/redis-om-dotnet/searching/creating-an-index",permalink:"/develop/dotnet/redis-om-dotnet/searching/creating-an-index",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/dotnet/redis-om-dotnet/creating-an-index/creating-an-index.md",tags:[],version:"current",lastUpdatedAt:1686330084,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{id:"creating-an-index",title:"Creating an Index with Redis OM",sidebar_label:"Creating an Index",slug:"/develop/dotnet/redis-om-dotnet/searching/creating-an-index",authors:["steve"]},sidebar:"docs",previous:{title:"Add and Retrieve Objects",permalink:"/develop/dotnet/redis-om-dotnet/add-and-retrieve-objects"},next:{title:"Simple Text Queries",permalink:"/develop/dotnet/redis-om-dotnet/simple-text-queries"}},o={},p=[{value:"Field Level Declarations",id:"field-level-declarations",level:2},{value:"Id Fields",id:"id-fields",level:3},{value:"Indexed Fields",id:"indexed-fields",level:3},{value:"IndexedAttribute Properties",id:"indexedattribute-properties",level:4},{value:"SearchableAttribute Properties",id:"searchableattribute-properties",level:4},{value:"Creating The Index",id:"creating-the-index",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To unlock some of the nicest functionality of Redis OM, e.g., running searches, matches, aggregations, reductions, mappings, etc... You will need to tell Redis how you want data to be stored and how you want it indexed. One of the features the Redis OM library provides is creating indices that map directly to your objects by declaring the indices as attributes on your class."),(0,r.kt)("p",null,"Let's start with an example class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"[Document]\npublic partial class Person\n{\n    [RedisIdField]\n    public string Id { get; set; }\n\n    [Searchable(Sortable = true)]\n    public string Name { get; set; }\n\n    [Indexed(Aggregatable = true)]\n    public GeoLoc? Home { get; set; }\n\n    [Indexed(Aggregatable = true)]\n    public GeoLoc? Work { get; set; }\n\n    [Indexed(Sortable = true)]\n    public int? Age { get; set; }\n\n    [Indexed(Sortable = true)]\n    public int? DepartmentNumber { get; set; }\n\n    [Indexed(Sortable = true)]\n    public double? Sales { get; set; }\n\n    [Indexed(Sortable = true)]\n    public double? SalesAdjustment { get; set; }\n\n    [Indexed(Sortable = true)]\n    public long? LastTimeOnline { get; set; }\n\n    [Indexed(Aggregatable = true)]\n    public string Email { get; set; }\n}\n")),(0,r.kt)("p",null,"As shown above, you can declare a class as being indexed with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Document")," Attribute. In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Document")," attribute, you can set a few fields to help build the index:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StorageType"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the underlying data structure used to store the object in Redis, options are ",(0,r.kt)("inlineCode",{parentName:"td"},"HASH")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"JSON"),", Note JSON is only useable with ",(0,r.kt)("a",{parentName:"td",href:"https://redis.io/docs/stack"},"Redis Stack")),(0,r.kt)("td",{parentName:"tr",align:null},"HASH"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IndexName"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the index"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'$"{SimpleClassName.ToLower()}-idx}')),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prefixes"),(0,r.kt)("td",{parentName:"tr",align:null},"The key prefixes for redis to build an index off of"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'new string[]{$"{FullyQualifiedClassName}:"}')),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Language"),(0,r.kt)("td",{parentName:"tr",align:null},"Language to use for full-text search indexing"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LanguageField"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the field in which the document stores its Language"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Filter"),(0,r.kt)("td",{parentName:"tr",align:null},"The filter to use to determine whether a particular item is indexed, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"@Age>=18")),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IdGenerationStrategy"),(0,r.kt)("td",{parentName:"tr",align:null},"The strategy used to generate Ids for documents, if left blank it will use a ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/ulid/spec"},"ULID")," generation strategy"),(0,r.kt)("td",{parentName:"tr",align:null},"UlidGenerationStrategy"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h2",{id:"field-level-declarations"},"Field Level Declarations"),(0,r.kt)("h3",{id:"id-fields"},"Id Fields"),(0,r.kt)("p",null,"Every class indexed by Redis must contain an Id Field marked with the ",(0,r.kt)("inlineCode",{parentName:"p"},"RedisIdField"),"."),(0,r.kt)("h3",{id:"indexed-fields"},"Indexed Fields"),(0,r.kt)("p",null,"In addition to declaring an Id Field, you can also declare indexed fields, which will let you search for values within those fields afterward. There are two types of Field level attributes."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Indexed - This type of index is valid for fields that are of the type ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),", a Numeric type (double/int/float etc. . .), or can be decorated for fields that are of the type ",(0,r.kt)("inlineCode",{parentName:"li"},"GeoLoc"),", the exact way that the indexed field is interpreted depends on the indexed type"),(0,r.kt)("li",{parentName:"ol"},"Searchable - This type is only valid for ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," fields, but this enables full-text search on the decorated fields.")),(0,r.kt)("h4",{id:"indexedattribute-properties"},"IndexedAttribute Properties"),(0,r.kt)("p",null,"There are properties inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexedAttribute")," that let you further customize how things are stored & queried."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PropertyName"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PropertyName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the property to be indexed"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the property being indexed"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sortable"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to index the item so it can be sorted on in queries, enables use of ",(0,r.kt)("inlineCode",{parentName:"td"},"OrderBy")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"OrderByDescending")," -> ",(0,r.kt)("inlineCode",{parentName:"td"},"collection.OrderBy(x=>x.Email)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Normalize"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Only applicable for ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," type fields Determines whether the text in a field is normalized (sent to lower case) for purposes of sorting"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Separator"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"char")),(0,r.kt)("td",{parentName:"tr",align:null},"Only applicable for ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," type fields Character to use for separating tag field, allows the application of multiple tags fo the same item e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"article.Category = technology,parenting")," is delineated by a ",(0,r.kt)("inlineCode",{parentName:"td"},",")," means that ",(0,r.kt)("inlineCode",{parentName:"td"},'collection.Where(x=>x.Category == "technology")')," and ",(0,r.kt)("inlineCode",{parentName:"td"},'collection.Where(x=>x.Category == "parenting")')," will both match the record"),(0,r.kt)("td",{parentName:"tr",align:null},"`"),(0,r.kt)("td",{parentName:"tr",align:null},"`"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CaseSensitive"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Only applicable for ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," type fields - Determines whether case is considered when performing matches on tags"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"searchableattribute-properties"},"SearchableAttribute Properties"),(0,r.kt)("p",null,"There are properties for the ",(0,r.kt)("inlineCode",{parentName:"p"},"SearchableAttribute")," that let you further customize how the full-text search determines matches"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PropertyName"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PropertyName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the property to be indexed"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the indexed property"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sortable"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to index the item so it can be sorted on in queries, enables use of ",(0,r.kt)("inlineCode",{parentName:"td"},"OrderBy")," & ",(0,r.kt)("inlineCode",{parentName:"td"},"OrderByDescending")," -> ",(0,r.kt)("inlineCode",{parentName:"td"},"collection.OrderBy(x=>x.Email)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NoStem"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines whether to use ",(0,r.kt)("a",{parentName:"td",href:"https://oss.redis.com/redisearch/Stemming/"},"stemming"),", in other words adding the stem of the word to the index, setting to true will stop the Redis from indexing the stems of words"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PhoneticMatcher"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The phonetic matcher to use if you'd like the index to use (PhoneticMatching)","[https://oss.redis.com/redisearch/Phonetic_Matching/]"," with the index"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Weight"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"double")),(0,r.kt)("td",{parentName:"tr",align:null},"determines the importance of the field for checking result accuracy"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h2",{id:"creating-the-index"},"Creating The Index"),(0,r.kt)("p",null,"After declaring the index, the creation of the index is pretty straightforward. All you have to do is call ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateIndex")," for the decorated type. The library will take care of serializing the provided type into a searchable index. The library does not try to be particularly clever, so if the index already exists it will the creation request will be rejected, and you will have to drop and re-add the index (migrations is a feature that may be added in the future)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var connection = provider.Connection;\nconnection.CreateIndex(typeof(Person));\n")))}u.isMDXComponent=!0}}]);