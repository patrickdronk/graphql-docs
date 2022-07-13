"use strict";(self.webpackChunkgraphql_docs=self.webpackChunkgraphql_docs||[]).push([[606],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,g=d["".concat(p,".").concat(h)]||d[h]||s[h]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1221:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},p="Setup Spring Boot",u={unversionedId:"setting-up-an-initial-application",id:"setting-up-an-initial-application",title:"Setup Spring Boot",description:"We will use Spring Initializr to setup our spring boot project.",source:"@site/docs/2.setting-up-an-initial-application.md",sourceDirName:".",slug:"/setting-up-an-initial-application",permalink:"/graphql-docs/docs/setting-up-an-initial-application",draft:!1,editUrl:"https://github.com/codecentricnl/flutter_basic_workshop/tree/master/docs/docs/2.setting-up-an-initial-application.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Summercourse intro",permalink:"/graphql-docs/docs/intro"},next:{title:"1 - Query",permalink:"/graphql-docs/docs/category/1---query"}},c={},s=[{value:"Your config should be something like this:",id:"your-config-should-be-something-like-this",level:3},{value:"Validate",id:"validate",level:2},{value:"Enable GraphiQL",id:"enable-graphiql",level:2}],d={toc:s};function h(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup-spring-boot"},"Setup Spring Boot"),(0,a.kt)("p",null,"We will use Spring Initializr to setup our spring boot project."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the ",(0,a.kt)("a",{parentName:"li",href:"https://start.spring.io/"},"Spring Initializr")),(0,a.kt)("li",{parentName:"ul"},"Choose your Project Dependency Manager of your choice (Maven or Gradle)."),(0,a.kt)("li",{parentName:"ul"},"Choose your Language of choice."),(0,a.kt)("li",{parentName:"ul"},"For the Spring Boot version at least 2.7.0 (Spring for GraphQL has just reached 1.0 and is only compatible with versions ^2.7.0)."),(0,a.kt)("li",{parentName:"ul"},"Fill in the Project Metadata as you see fit, but make sure packaging is Jar and the Java version is ^11."),(0,a.kt)("li",{parentName:"ul"},"On the right-hand side you can see the add dependencies button. You need the following two:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Spring Web"),(0,a.kt)("li",{parentName:"ul"},"Spring for GraphQL")))),(0,a.kt)("h3",{id:"your-config-should-be-something-like-this"},"Your config should be something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img.png",src:n(6337).Z,width:"1524",height:"853"})),(0,a.kt)("h2",{id:"validate"},"Validate"),(0,a.kt)("p",null,"Import your project into your editor and validate that it starts by running the application (without any errors)"),(0,a.kt)("h2",{id:"enable-graphiql"},"Enable GraphiQL"),(0,a.kt)("p",null,"GraphiQL is an integrated tool that helps us query our API. See it as an integrated Postman.\nIf we want to use it, we need to explicitly enable it. Go to you application.properties file and\nadd this line: ",(0,a.kt)("inlineCode",{parentName:"p"},"spring.graphql.graphiql.enabled=true"),".\nYou'll also need a GraphQL schema file, In your ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/resources")," directory, create a new directory and file called ",(0,a.kt)("inlineCode",{parentName:"p"},"graphql/schema.graphqls"),"\nwith the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n    helloWorld: String!\n}\n")),(0,a.kt)("p",null,"If you did this properly, you can restart your service and go to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/graphiql"},"GraphiQL")))}h.isMDXComponent=!0},6337:function(e,t,n){t.Z=n.p+"assets/images/img-68cbcb4fd7e988be30b7179386dab1c3.png"}}]);