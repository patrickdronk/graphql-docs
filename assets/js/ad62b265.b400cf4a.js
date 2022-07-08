"use strict";(self.webpackChunkgraphql_docs=self.webpackChunkgraphql_docs||[]).push([[628],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return v}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),v=r,d=m["".concat(c,".").concat(v)]||m[v]||u[v]||a;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8539:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:7},c="N+1",s={unversionedId:"tutorial-query/n+1",id:"tutorial-query/n+1",title:"N+1",description:"There is one huge caveat with GraphQL.",source:"@site/docs/tutorial-query/n+1.md",sourceDirName:"tutorial-query",slug:"/tutorial-query/n+1",permalink:"/graphql-docs/docs/tutorial-query/n+1",draft:!1,editUrl:"https://github.com/codecentricnl/flutter_basic_workshop/tree/master/docs/docs/tutorial-query/n+1.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Complex Objects continued",permalink:"/graphql-docs/docs/tutorial-query/complex-objects-continued"},next:{title:"2 - Mutation",permalink:"/graphql-docs/docs/category/2---mutation"}},p={},u=[],m={toc:u};function v(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"n1"},"N+1"),(0,a.kt)("p",null,"There is one huge caveat with GraphQL.",(0,a.kt)("br",{parentName:"p"}),"\n","Every field in your schema will resolve to a method. We can get an explosive amount of invocations when we are handling\nrelations (in our case Movie --\x3e Actor).",(0,a.kt)("br",{parentName:"p"}),"\n","Update your code to resemble the understanding code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Actor.java"',title:'"Actor.java"'},"public record Actor(String name, LocalDate dateOfBirth, List<String> appearsInIMDBId) {}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ActorRepository.java"',title:'"ActorRepository.java"'},'@Component\npublic class ActorRepository {\n    private final List<Actor> actors = List.of(\n            new Actor(\n                    "Morgan Freeman",\n                    LocalDate.of(1937, 6, 1),\n                    List.of("tt0111161", "tt0468569")\n            ),\n            new Actor(\n                    "Al Pacino",\n                    LocalDate.of(1940, 4, 25),\n                    List.of("tt0068646")\n            ),\n            new Actor(\n                    "Christian Bale",\n                    LocalDate.of(1974, 1, 30),\n                    List.of("tt0468569")\n            )\n    );\n\n    public List<Actor> findByIMDBId(String imdbId) {\n        return actors.stream()\n                .filter(actor -> actor.appearsInIMDBId().contains(imdbId))\n                .toList();\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Movie.java"',title:'"Movie.java"'},"public record Movie(String imdbId, String title, LocalDate releaseDate) { }\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MovieRepository.java"',title:'"MovieRepository.java"'},'@Component\npublic class MovieRepository {\n    private final List<Movie> movies = List.newArrayList(\n            new Movie("tt0111161", "The Shawshank Redemption", LocalDate.of(1994, 10, 14)),\n            new Movie("tt0068646", "The Godfather", LocalDate.of(1972, 3, 24)),\n            new Movie("tt0468569", "The Dark Knight", LocalDate.of(2018, 7, 18))\n    );\n\n    public List<Movie> findAll() {\n        return movies;\n    }\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MovieController.java"',title:'"MovieController.java"'},'@Controller\npublic class MovieController {\n\n    private final MovieRepository movieRepository;\n    private final ActorRepository actorRepository;\n\n    public MovieController(MovieRepository movieRepository, ActorRepository actorRepository) {\n        this.movieRepository = movieRepository;\n        this.actorRepository = actorRepository;\n    }\n\n    @QueryMapping\n    public List<Movie> movies() {\n        return movieRepository.findAll();\n    }\n\n    @SchemaMapping\n    public List<Actor> actors(Movie movie) {\n        System.out.println("I\'ve been called");\n        return actorRepository.findByIMDBId(movie.imdbId());\n    }\n}\n')),(0,a.kt)("p",null,"Restart your service and execute the following query again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  movies {\n    imdbId\n    title\n    releaseDate\n    actors {\n      name\n      dateOfBirth\n    }\n  }\n}\n")),(0,a.kt)("p",null,"While the query gives you an error, the logging of you application shows you the essential part of this.\nIt shows that, for every movie it retrieves the actor. It would be better if we can batch the requests, and do one call to the repository.\nWe can do that with ",(0,a.kt)("inlineCode",{parentName:"p"},"@BatchMapping"),". Replace the actors method with this one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MovieController.java"',title:'"MovieController.java"'},'@BatchMapping\npublic Map<Movie, List<Actor>> actors(List<Movie> movies) {\n    System.out.println("I\'ve been called");\n    System.out.println(movies.toString());\n    return Collections.emptyMap();\n}\n')),(0,a.kt)("p",null,"If you execute the query again, in your logging you should only see one invocation with all movies that were requested.\nAdd the following method to your ",(0,a.kt)("inlineCode",{parentName:"p"},"ActorsRepository")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ActorsRepository.java"',title:'"ActorsRepository.java"'},"public Map<Movie, List<Actor>> findForMovies(List<Movie> movies) {\n    return movies.stream()\n        .collect(toMap(movie -> movie, movie -> findByIMDBId(movie.imdbId())));\n}\n")),(0,a.kt)("p",null,"And update your ",(0,a.kt)("inlineCode",{parentName:"p"},"MovieController")," to use this new method"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MovieController.java"',title:'"MovieController.java"'},"@BatchMapping\npublic Map<Movie, List<Actor>> actors(List<Movie> movies) {\n    return actorRepository.findForMovies(movies);\n}\n")))}v.isMDXComponent=!0}}]);