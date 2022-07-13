"use strict";(self.webpackChunkgraphql_docs=self.webpackChunkgraphql_docs||[]).push([[385],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9549:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:4},l="Complex Objects",u={unversionedId:"tutorial-query/complex-objects",id:"tutorial-query/complex-objects",title:"Complex Objects",description:"Working with a String, and a simple query is easy. But in the real world we work with complex",source:"@site/docs/tutorial-query/complex-objects.md",sourceDirName:"tutorial-query",slug:"/tutorial-query/complex-objects",permalink:"/graphql-docs/docs/tutorial-query/complex-objects",draft:!1,editUrl:"https://github.com/codecentricnl/flutter_basic_workshop/tree/master/docs/docs/tutorial-query/complex-objects.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Accept an argument from a query",permalink:"/graphql-docs/docs/tutorial-query/accept-an-argument-from-a-query"},next:{title:"Complex Objects (Result)",permalink:"/graphql-docs/docs/tutorial-query/complex-objects-result"}},s={},p=[],m={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"complex-objects"},"Complex Objects"),(0,a.kt)("p",null,"Working with a String, and a simple query is easy. But in the real world we work with complex\nobjects, often existing out of object for themselves. "),(0,a.kt)("p",null,"Let's take an example of movies and actors.\nReplace your schema with the schema below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n    helloWorld(name: String!): String!\n    movies: [Movie!]!\n}\ntype Movie {\n    imdbId: String!\n    title: String!\n    releaseDate: String!\n}\n")),(0,a.kt)("p",null,"Can you fix the Query implementation yourself? Take a good look at what you did with the HelloWorld example.\nThe results are on the next page."))}f.isMDXComponent=!0}}]);