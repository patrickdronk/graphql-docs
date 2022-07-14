"use strict";(self.webpackChunkgraphql_docs=self.webpackChunkgraphql_docs||[]).push([[150],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2976:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:1},l="Testing GraphQL applications",c={unversionedId:"tutorial-testing/first-test",id:"tutorial-testing/first-test",title:"Testing GraphQL applications",description:"Add the spring-graphql-test to your pom.xml (if it's not already there)",source:"@site/docs/tutorial-testing/first-test.md",sourceDirName:"tutorial-testing",slug:"/tutorial-testing/first-test",permalink:"/graphql-docs/docs/tutorial-testing/first-test",draft:!1,editUrl:"https://github.com/codecentricnl/flutter_basic_workshop/tree/master/docs/docs/tutorial-testing/first-test.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"3 - Testing",permalink:"/graphql-docs/docs/category/3---testing"},next:{title:"4 - Learn by doing",permalink:"/graphql-docs/docs/category/4---learn-by-doing"}},p={},u=[],d={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing-graphql-applications"},"Testing GraphQL applications"),(0,a.kt)("p",null,"Add the spring-graphql-test to your pom.xml (if it's not already there)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n    <groupId>org.springframework.graphql</groupId>\n    <artifactId>spring-graphql-test</artifactId>\n    <scope>test</scope>\n</dependency>\n")),(0,a.kt)("p",null,"To not have to create multiline queries in your test we can write queries in graphql files\nand use those in our tests.",(0,a.kt)("br",{parentName:"p"}),"\n","Create a file that resembles a query you want to execute."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql",metastring:'title="src/test/resources/graphql-test/movies.graphql"',title:'"src/test/resources/graphql-test/movies.graphql"'},"query {\n    movies {\n        imdbId\n        title\n        releaseDate\n    }\n}\n")),(0,a.kt)("p",null,"Also create a test class for you MovieController"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="src/test/java/nl.codecentric.springforgraphql.movies/MovieControllerTest.java"',title:'"src/test/java/nl.codecentric.springforgraphql.movies/MovieControllerTest.java"'},'@SpringBootTest \n@AutoConfigureGraphQlTester //This instantiates the GraphQL tester to be autowired\nclass MovieControllerTest {\n    @Autowired\n    private GraphQlTester graphQlTester;\n\n    @Test\n    void shouldFetchMovies() {\n        this.graphQlTester\n                .documentName("movies") //The graphQlTester will look for a file named movies.graphql created in the previous step\n                .execute()\n                .path("data.movies.[*]")\n                .entityList(Movie.class)\n                .hasSize(3)\n                .containsExactly(\n                        new Movie("tt0111161", "The Shawshank Redemption", LocalDate.of(1994, 10, 14)),\n                        new Movie("tt0068646", "The Godfather", LocalDate.of(1972, 3, 24)),\n                        new Movie("tt0468569", "The Dark Knight", LocalDate.of(2018, 7, 18))\n                );\n    }\n}\n')))}f.isMDXComponent=!0}}]);