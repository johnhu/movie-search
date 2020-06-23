(function(e){function t(t){for(var s,o,i=t[0],u=t[1],c=t[2],m=0,v=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);l&&l(t);while(v.length)v.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var u=a[i];0!==n[u]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},n={app:0},r=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"02a3":function(e,t,a){"use strict";var s=a("1e51"),n=a.n(s);n.a},"034f":function(e,t,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},1188:function(e,t,a){"use strict";var s=a("cd7e"),n=a.n(s);n.a},"1e51":function(e,t,a){},"28fc":function(e,t,a){},"4af2":function(e,t,a){"use strict";var s=a("73a9"),n=a.n(s);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view"),a("svg")],1)},r=[],o={name:"app"},i=o,u=(a("034f"),a("2877")),c=Object(u["a"])(i,n,r,!1,null,null,null),l=c.exports,m=a("8c4f"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Movie Search & Learn")]),a("message-container",{attrs:{messages:e.messages}}),a("short-cuts",{staticClass:"shortcuts",attrs:{shortcuts:e.listItems}}),a("div",{attrs:{id:"form"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.$route.params.query,expression:"$route.params.query"}],attrs:{placeholder:"Enter a movie, ie Inception",id:"text-box"},domProps:{value:e.$route.params.query},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getMovies(t)},input:function(t){t.target.composing||e.$set(e.$route.params,"query",t.target.value)}}}),a("button",{attrs:{id:"send-button"},on:{click:e.getMovies}},[e._v("Search")])]),a("div",[e.showLoading?a("load-spinner"):e._e(),e.results&&e.results.Search.length>0?a("ul",{staticClass:"movies"},e._l(e.results.Search,(function(t,s){return a("li",{key:s,staticClass:"search-result"},[a("h2",{staticClass:"title"},[e._v(e._s(t.Title))]),a("h3",{staticClass:"year"},[e._v(e._s(t.Year))]),a("img",{staticClass:"poster",attrs:{src:t.Poster}}),a("br"),a("p",[a("router-link",{staticClass:"learn-more",attrs:{to:{name:"LearnMore",params:{movieId:t.imdbID,query:e.$route.params.query}}}},[e._v("Learn More")])],1),a("p",[a("button",{staticClass:"save",on:{click:function(a){return e.saveMovie(t)}}},[e._v("Add to Shortcuts")])])])})),0):e._e()],1)],1)},h=[],p=a("bc3a"),f=a.n(p),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"reel"},[a("i")])])])}],b={name:"ReelSpinner"},g=b,y=(a("a797"),Object(u["a"])(g,d,_,!1,null,"8a36d9f0",null)),w=y.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"message-container"},[e.messages.length>0?a("ul",e._l(e.messages,(function(e,t){return a("message-item",{key:t,attrs:{message:e}})})),1):e._e()])},C=[],x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{directives:[{name:"show",rawName:"v-show",value:e.showMessage,expression:"showMessage"}],staticClass:"error"},[e._v(" Error: "+e._s(e.message.Error)+" "),a("button",{on:{click:e.close}},[e._v("close")])])},M=[],O={name:"MessageContainer",props:{message:Object},data:function(){return{showMessage:!0}},methods:{close:function(){this.showMessage=!1}},created:function(){setTimeout(this.close,5e3)}},D=O,$=(a("4af2"),Object(u["a"])(D,x,M,!1,null,"0b8c3fff",null)),j=$.exports,S={name:"MessageContainer",props:{messages:Array},components:{"message-item":j}},E=S,q=(a("7b67"),Object(u["a"])(E,k,C,!1,null,"01d38edc",null)),L=q.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"shortcuts"},[e._m(0),e.shortcuts.length<1?a("li",[e._v("Pin your favorite movies here")]):e._e(),e._l(e.shortcuts,(function(t,s){return a("li",{key:s},[a("router-link",{staticClass:"list-item",attrs:{to:{name:"LearnMore",params:{movieId:t.imdbID,query:e.$route.params.query}}}},[e._v(e._s(t.Title))]),a("button",{staticClass:"remove",on:{click:function(a){return e.removeMovie(t)}}},[e._v("x")])],1)}))],2)},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("h2",{attrs:{id:"shortcut-h"}},[e._v("Shortcuts")])])}],I=(a("c975"),a("a434"),{name:"Shortcuts",data:function(){return{}},props:{shortcuts:Array},methods:{removeMovie:function(e){this.shortcuts.splice(this.shortcuts.indexOf(e),1)}}}),R=I,T=(a("1188"),Object(u["a"])(R,P,A,!1,null,"ac95cee8",null)),J=T.exports,V={name:"Search",components:{"load-spinner":w,"message-container":L,"short-cuts":J},data:function(){return{results:null,query:"",showLoading:!1,messages:[],listItems:[]}},created:function(){this.getMovies()},methods:{saveMovie:function(e){this.listItems.push(e)},getMovies:function(){var e=this;this.results=null,this.showLoading=!0,f.a.get("http://www.omdbapi.com/?apikey=b72bc356",{params:{s:this.$route.params.query,type:"movie"}}).then((function(t){e.results=t.data,"False"==e.results.Response&&e.messages.push(t.data),e.showLoading=!1}))}}},N=V,B=(a("8d3b"),Object(u["a"])(N,v,h,!1,null,"32413c06",null)),Q=B.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Movie Search & Learn")]),a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),a("router-link",{attrs:{to:{name:"Search",params:{query:e.$route.params.query}}}},[e._v("Back")]),null!=e.movieData?a("section",{staticClass:"container"},[e.showLoading?a("load-spinner"):e._e(),a("div",{staticClass:"movie-info"},[a("h2",[e._v(e._s(e.movieData.Title))]),a("h3",[e._v(e._s(e.movieData.Year))]),"N/A"!=e.movieData.Plot?a("h3",[e._v(e._s(e.movieData.Plot))]):a("h3",[a("i",[e._v("Plot not available")])]),a("h3",[e._v("Cast: "+e._s(e.movieData.Actors))]),a("h3",[e._v("Director: "+e._s(e.movieData.Director))]),a("h3",[e._v("Rated: "+e._s(e.movieData.Rated))]),a("h3",[e._v("Country: "+e._s(e.movieData.Country))]),a("h3",[e._v("Runtime: "+e._s(e.movieData.Runtime))]),e.movieData.Ratings[1]?a("h3",[e._v(e._s(e.movieData.Ratings[1].Value)+" on Rotten Tomatoes")]):e._e(),e.movieData.Ratings[0]?a("h3",[e._v(e._s(e.movieData.Ratings[0].Value)+" on IMDb")]):e._e()]),a("div",{staticClass:"movie-poster"},[a("img",{attrs:{src:e.movieData.Poster}})])],1):e._e()],1)},H=[],Y={name:"LearnMore",components:{"load-spinner":w},data:function(){return{movieData:Object,showLoading:!0}},created:function(){var e=this;this.movieData=null,this.showLoading=!0,f.a.get("http://www.omdbapi.com/?apikey=b72bc356",{params:{i:this.$route.params.movieId}}).then((function(t){e.movieData=t.data,e.showLoading=!1})).catch((function(t){e.messages.push({type:"error",text:t.message})})),this.showLoading=!1}},F=Y,z=(a("9387"),Object(u["a"])(F,G,H,!1,null,"902b5110",null)),K=z.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"body"}},[a("div",{staticClass:"about"},[a("p",{staticClass:"about-toggle",on:{click:e.toggleAbout}},[e._v("About")]),a("about",{attrs:{id:"about"}})],1),a("div",{staticClass:"content"},[a("h1",[e._v("Movie Search & Learn")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{placeholder:"Enter a movie, ie Inception",id:"text-box"},domProps:{value:e.query},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitQuery(t)},input:function(t){t.target.composing||(e.query=t.target.value)}}}),a("button",{attrs:{id:"send-button"},on:{click:e.submitQuery}},[e._v("Search")])])])},W=[],X=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Z=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"body"},[e._v(" This application allows the user to search for any movie in the OMDB API database (http://www.omdbapi.com/) and learn basic facts about the movie. Each search result that appears can also be added to a list for the user's convenience. "),a("br"),e._v(" A Vue JS project by John Hu "),a("a",{attrs:{href:"http://www.github.com/johnhu"}},[a("span",{staticClass:"fa-stack fa-lg"},[a("i",{staticClass:"fas fa-circle fa-stack-2x",attrs:{title:"Visit John's Github"}}),a("i",{staticClass:"fab fa-github fa-stack-1x fa-inverse",attrs:{title:"Visit John's Github"}})])])])}],ee={name:"About",data:function(){return{showAbout:!0}}},te=ee,ae=Object(u["a"])(te,X,Z,!1,null,"3778b371",null),se=ae.exports,ne={name:"Search",data:function(){return{showAbout:!1,query:"",messages:[]}},components:{about:se},methods:{submitQuery:function(){this.$router.push({name:"Search",params:{query:this.query}})},toggleAbout:function(){var e=document.getElementById("about");"none"===e.style.display?e.style.display="block":e.style.display="none"}}},re=ne,oe=(a("02a3"),Object(u["a"])(re,U,W,!1,null,"c412b1e4",null)),ie=oe.exports;s["a"].use(m["a"]);var ue=[{path:"/",name:"LandingPage",component:ie},{path:"/results",name:"Search",component:Q},{path:"/about",name:"LearnMore",component:K}],ce=new m["a"]({routes:ue}),le=ce;s["a"].config.productionTip=!1,new s["a"]({router:le,render:function(e){return e(l)}}).$mount("#app")},"73a9":function(e,t,a){},"7b67":function(e,t,a){"use strict";var s=a("8d50"),n=a.n(s);n.a},"85ec":function(e,t,a){},"8d3b":function(e,t,a){"use strict";var s=a("d783"),n=a.n(s);n.a},"8d50":function(e,t,a){},9387:function(e,t,a){"use strict";var s=a("ec38"),n=a.n(s);n.a},a797:function(e,t,a){"use strict";var s=a("28fc"),n=a.n(s);n.a},cd7e:function(e,t,a){},d783:function(e,t,a){},ec38:function(e,t,a){}});
//# sourceMappingURL=app.b4439749.js.map