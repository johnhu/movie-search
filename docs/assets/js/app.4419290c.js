(function(e){function t(t){for(var n,o,i=t[0],c=t[1],u=t[2],m=0,v=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&v.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(v.length)v.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,i=1;i<s.length;i++){var c=s[i];0!==a[c]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={app:0},r=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0157":function(e,t,s){"use strict";var n=s("649d"),a=s.n(n);a.a},"034f":function(e,t,s){"use strict";var n=s("85ec"),a=s.n(n);a.a},"4a41":function(e,t,s){"use strict";var n=s("83ac"),a=s.n(n);a.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("h1",[e._v("Movie Search & Learn")]),s("router-view")],1)},r=[],o={name:"app"},i=o,c=(s("034f"),s("2877")),u=Object(c["a"])(i,a,r,!1,null,null,null),l=u.exports,m=s("8c4f"),v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("message-container",{attrs:{messages:e.messages}}),s("short-cuts",{staticClass:"shortcuts",attrs:{shortcuts:e.listItems}}),s("form",{attrs:{id:"form"},on:{submit:function(t){return t.preventDefault(),e.getMovies(t)}}},[s("p",[e._v("Enter a movie:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Inception",id:"text-box"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),s("button",{attrs:{type:"submit",id:"send-button"}},[e._v("Go")])]),e.showLoading?s("load-spinner"):e._e(),e.results&&e.results.Search.length>0?s("ul",{staticClass:"cities"},e._l(e.results.Search,(function(t,n){return s("li",{key:n},[s("h2",[e._v(e._s(t.Title))]),s("h3",{staticClass:"year"},[e._v(e._s(t.Year))]),s("img",{staticClass:"poster",attrs:{src:t.Poster}}),s("br"),s("p",[s("router-link",{attrs:{to:{name:"LearnMore",params:{movieId:t.imdbID}}}},[e._v("Learn More")])],1),s("p",[s("button",{staticClass:"save",on:{click:function(s){return e.saveMovie(t)}}},[e._v("Add to Shortcuts")])])])})),0):e._e()],1)},f=[],h=s("bc3a"),p=s.n(h),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v("Loading...")]),s("div",{staticClass:"container"},[s("div",{staticClass:"reel"},[s("i")])])])}],g={name:"ReelSpinner"},b=g,y=(s("4a41"),Object(c["a"])(b,d,_,!1,null,"f12dbc3c",null)),w=y.exports,D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"message-container"},[e.messages.length>0?s("ul",e._l(e.messages,(function(e,t){return s("message-item",{key:t,attrs:{message:e}})})),1):e._e()])},M=[],x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{directives:[{name:"show",rawName:"v-show",value:e.showMessage,expression:"showMessage"}],staticClass:"error"},[e._v(" Error: "+e._s(e.message.Error)+" "),s("button",{on:{click:e.close}},[e._v("close")])])},O=[],C={name:"MessageContainer",props:{message:Object},data:function(){return{showMessage:!0}},methods:{close:function(){this.showMessage=!1}},created:function(){setTimeout(this.close,5e3)}},j=C,L=(s("b3ec"),Object(c["a"])(j,x,O,!1,null,"760b2d35",null)),k=L.exports,P={name:"MessageContainer",props:{messages:Array},components:{"message-item":k}},S=P,E=(s("7b67"),Object(c["a"])(S,D,M,!1,null,"01d38edc",null)),R=E.exports,$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"shortcuts"},[e._m(0),e.shortcuts.length<1?s("li",[e._v("Pin your favorite movies here")]):e._e(),e._l(e.shortcuts,(function(t,n){return s("li",{key:n},[s("router-link",{staticClass:"list-item",attrs:{to:{name:"LearnMore",params:{movieId:t.imdbID}}}},[e._v(e._s(t.Title))]),s("button",{staticClass:"remove",on:{click:function(s){return e.removeMovie(t)}}},[e._v("x")])],1)}))],2)},I=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[s("h2",{attrs:{id:"shortcut-h"}},[e._v("Shortcuts")])])}],T=(s("c975"),s("a434"),{name:"Shortcuts",data:function(){return{}},props:{shortcuts:Array},methods:{removeMovie:function(e){this.shortcuts.splice(this.shortcuts.indexOf(e),1)}}}),q=T,A=(s("0157"),Object(c["a"])(q,$,I,!1,null,"443f5f38",null)),N=A.exports,J={name:"Search",components:{"load-spinner":w,"message-container":R,"short-cuts":N},data:function(){return{results:null,query:"",showLoading:!1,messages:[],listItems:[]}},methods:{saveMovie:function(e){this.listItems.push(e)},getMovies:function(){var e=this;this.results=null,this.showLoading=!0,p.a.get("http://www.omdbapi.com/?apikey=b72bc356",{params:{s:this.query,type:"movie"}}).then((function(t){e.results=t,"False"==e.results.data.Response?e.messages.push(t.data):e.results=t.data})),this.showLoading=!1}}},V=J,Y=(s("d9f0"),Object(c["a"])(V,v,f,!1,null,"78747424",null)),F=Y.exports,G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("message-container",{attrs:{messages:e.messages}}),s("p",[s("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),e.showLoading?s("load-spinner"):e._e(),s("section",{staticClass:"container"},[s("div",{staticClass:"movie-info"},[s("h2",[e._v(e._s(e.movieData.Title))]),s("h3",[e._v(e._s(e.movieData.Year))]),"N/A"!=e.movieData.Plot?s("h3",[e._v(e._s(e.movieData.Plot))]):s("h3",[s("i",[e._v("Plot not available")])]),s("h3",[e._v("Cast: "+e._s(e.movieData.Actors))]),s("h3",[e._v("Director: "+e._s(e.movieData.Director))]),s("h3",[e._v("Rated: "+e._s(e.movieData.Rated))]),s("h3",[e._v("Country: "+e._s(e.movieData.Country))]),s("h3",[e._v("Runtime: "+e._s(e.movieData.Runtime))]),e.movieData.Ratings[1]?s("h3",[e._v(e._s(e.movieData.Ratings[1].Value)+" on Rotten Tomatoes")]):e._e(),e.movieData.Ratings[0]?s("h3",[e._v(e._s(e.movieData.Ratings[0].Value)+" on IMDb")]):e._e()]),s("div",{staticClass:"movie-poster"},[s("img",{attrs:{src:e.movieData.Poster}})])])],1)},H=[],z={name:"LearnMore",components:{"load-spinner":w,"message-container":R},data:function(){return{movieData:Object,messages:[],query:"",showLoading:!1}},created:function(){var e=this;this.movieData=null,this.showLoading=!0,p.a.get("http://www.omdbapi.com/?apikey=b72bc356",{params:{i:this.$route.params.movieId}}).then((function(t){e.movieData=t.data,e.showLoading=!1})).catch((function(t){e.messages.push({type:"error",text:t.message}),e.showLoading=!1}))}},B=z,K=(s("f8f1"),Object(c["a"])(B,G,H,!1,null,"2d93bbb6",null)),Q=K.exports;n["a"].use(m["a"]);var U=[{path:"/",name:"Search",component:F},{path:"/about",name:"LearnMore",component:Q}],W=new m["a"]({routes:U}),X=W;n["a"].config.productionTip=!1,new n["a"]({router:X,render:function(e){return e(l)}}).$mount("#app")},"649d":function(e,t,s){},7996:function(e,t,s){},"7b67":function(e,t,s){"use strict";var n=s("8d50"),a=s.n(n);a.a},"836b":function(e,t,s){},"83ac":function(e,t,s){},"85ec":function(e,t,s){},"8d50":function(e,t,s){},b3ec:function(e,t,s){"use strict";var n=s("d68f"),a=s.n(n);a.a},d68f:function(e,t,s){},d9f0:function(e,t,s){"use strict";var n=s("7996"),a=s.n(n);a.a},f8f1:function(e,t,s){"use strict";var n=s("836b"),a=s.n(n);a.a}});
//# sourceMappingURL=app.4419290c.js.map