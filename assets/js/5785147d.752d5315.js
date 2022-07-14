"use strict";(self.webpackChunkgraphql_docs=self.webpackChunkgraphql_docs||[]).push([[699],{3905:function(n,t,e){e.d(t,{Zo:function(){return s},kt:function(){return d}});var r=e(7294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function u(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var c=r.createContext({}),l=function(n){var t=r.useContext(c),e=t;return n&&(e="function"==typeof n?n(t):a(a({},t),n)),e},s=function(n){var t=l(n.components);return r.createElement(c.Provider,{value:t},n.children)},p={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(n,t){var e=n.components,o=n.mdxType,i=n.originalType,c=n.parentName,s=u(n,["components","mdxType","originalType","parentName"]),y=l(e),d=o,f=y["".concat(c,".").concat(d)]||y[d]||p[d]||i;return e?r.createElement(f,a(a({ref:t},s),{},{components:e})):r.createElement(f,a({ref:t},s))}));function d(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var i=e.length,a=new Array(i);a[0]=y;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=n,u.mdxType="string"==typeof n?n:o,a[1]=u;for(var l=2;l<i;l++)a[l]=e[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}y.displayName="MDXCreateElement"},1987:function(n,t,e){e.r(t),e.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var r=e(7462),o=e(3366),i=(e(7294),e(3905)),a=["components"],u={sidebar_position:2},c="Solution",l={unversionedId:"doing/test-solution",id:"doing/test-solution",title:"Solution",description:"",source:"@site/docs/doing/test-solution.md",sourceDirName:"doing",slug:"/doing/test-solution",permalink:"/graphql-docs/docs/doing/test-solution",draft:!1,editUrl:"https://github.com/codecentricnl/flutter_basic_workshop/tree/master/docs/docs/doing/test-solution.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Learn by doing",permalink:"/graphql-docs/docs/doing/"}},s={},p=[],y={toc:p};function d(n){var t=n.components,e=(0,o.Z)(n,a);return(0,i.kt)("wrapper",(0,r.Z)({},y,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"solution"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Country.java"',title:'"Country.java"'},"public record Country(String name, String abbreviation) {}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="CountryRepository.java"',title:'"CountryRepository.java"'},'@Component\npublic class CountryRepository {\n    private List<Country> countries = Lists.newArrayList(\n            new Country("Netherlands", "NL"),\n            new Country("Germany", "DE"),\n            new Country("United States", "US")\n    );\n\n    public void addCountry(Country country) {\n        countries.add(country);\n    }\n\n    public List<Country> findAll() {\n        return countries;\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="CountryController.java"',title:'"CountryController.java"'},'@Controller\npublic class CountryController {\n    private final CountryRepository countryRepository;\n\n    public CountryController(CountryRepository countryRepository) {\n        this.countryRepository = countryRepository;\n    }\n\n    @QueryMapping\n    public Country getCountry(@Argument String abbreviation) {\n        return countryRepository.findAll()\n                .stream()\n                .filter((country) -> {\n                    return country.abbreviation().equalsIgnoreCase(abbreviation);\n                })\n                .findAny()\n                .orElseThrow(() -> new GraphQLException("Country not found"));\n    }\n\n    @QueryMapping\n    public Collection<Country> countries() {\n        return countryRepository.findAll();\n    }\n\n    @SchemaMapping\n    public String abbreviation(Country country) {\n        return country.abbreviation().toUpperCase();\n    }\n\n    @MutationMapping\n    public Country createCountry(@Argument String name, @Argument String abbreviation) {\n        var country = new Country(name, abbreviation);\n        countryRepository.addCountry(country);\n        return country;\n    }\n}\n')))}d.isMDXComponent=!0}}]);