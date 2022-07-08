"use strict";(self.webpackChunkgraphql_docs=self.webpackChunkgraphql_docs||[]).push([[349],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2511:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={sidebar_position:1},l="Create a Mutation",c={unversionedId:"tutorial-mutation/mutation",id:"tutorial-mutation/mutation",title:"Create a Mutation",description:"Mutations are not different from queries other than that they illustrate that",source:"@site/docs/tutorial-mutation/mutation.md",sourceDirName:"tutorial-mutation",slug:"/tutorial-mutation/mutation",permalink:"/graphql-docs/docs/tutorial-mutation/mutation",draft:!1,editUrl:"https://github.com/codecentricnl/flutter_basic_workshop/tree/master/docs/docs/tutorial-mutation/mutation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"2 - Mutation",permalink:"/graphql-docs/docs/category/2---mutation"},next:{title:"3 - Testing",permalink:"/graphql-docs/docs/category/3---testing"}},p={},s=[],m={toc:s};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-mutation"},"Create a Mutation"),(0,o.kt)("p",null,"Mutations are not different from queries other than that they illustrate that\na mutation has a side effect, whereas a query doesn't.\nLet's add a mutation to our schema, note that we need to specify ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," when we have a complex\ntype as an argument"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n    createNewMovie(input: CreateMovieInput): Movie!\n}\n\ninput CreateMovieInput {\n    imdbId: String!\n    title: String!\n    releaseDate: String!\n}\n")),(0,o.kt)("p",null,"Update your controller"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MovieController.java"',title:'"MovieController.java"'},"@MutationMapping\npublic Movie createNewMovie(@Argument CreateMovieInput input) {\n    return this.movieRepository.create(input.imdbId, input.title, LocalDate.parse(input.releaseDate));\n}\n")),(0,o.kt)("p",null,"Create the input DTO"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="CreateMovieInput.java"',title:'"CreateMovieInput.java"'},"record CreateMovieInput(String imdbId, String title, String releaseDate) {}\n")),(0,o.kt)("p",null,"Update your ",(0,o.kt)("inlineCode",{parentName:"p"},"MovieRepository")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MovieRepository.java"',title:'"MovieRepository.java"'},"public Movie create(String imdbId, String title, LocalDate releaseDate) {\n    var movie = new Movie(imdbId, title, releaseDate);\n    movies.add(movie);\n    return movie;\n} \n")),(0,o.kt)("p",null,"Restart your service and create a mutation, also try to retrieve the movie with a query."))}d.isMDXComponent=!0}}]);