(function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-1d09f1a2":"277eca1a","chunk-3f7db929":"e65604ec"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-1d09f1a2":1,"chunk-3f7db929":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1d09f1a2":"66ea641f","chunk-3f7db929":"cdf8f1b9"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/whereintheworld/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"application",class:"theme-"+e.actual_theme,attrs:{id:"application"}},[e.is_loaded?e._e():n("div",{attrs:{id:"loading"}},[n("div",{staticClass:"_indicator"}),e._v(" Wait a bit while we get all countries of the world ")]),n("div",{staticClass:"unselectable",attrs:{id:"navbar"}},[n("div",{staticClass:"g-wrapper"},[e._m(0),n("div",{staticClass:"right"},[n("a",{staticClass:"btn-themeswitch",on:{click:e.theme_switch}},[n("d3-icon",{staticClass:"icon ion-ios-color-palette"}),e._v("Dark Mode")],1)])])]),n("div",{attrs:{id:"page-content"}},[n("div",{staticClass:"g-wrapper"},[e.is_url_root?e._e():n("div",{staticClass:"g-actionbar"},[n("div",{staticClass:"back-button d3-card",on:{click:function(t){return e.$router.push({name:"home"})}}},[n("d3-icon",{staticClass:"icon ion-ios-arrow-back"}),e._v("Back ")],1)]),n("transition",{attrs:{name:"page"},on:{enter:e.beforeEnter}},[n("router-view")],1)],1)])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"left"},[n("h1",[e._v("Where in the world?")])])}],i=(n("b0c0"),n("957e")),c={data:function(){return{dark_mode:"true"===localStorage.getItem("dark_mode"),is_url_root:!0,countries:[]}},watch:{$route:function(){this.is_url_root="home"==this.$route.name}},computed:{actual_theme:function(){return this.dark_mode?"dark":"light"},is_loaded:function(){return this.countries.length&&(document.title="Where in the world?"),!!this.countries.length}},methods:{theme_switch:function(){this.dark_mode=!this.dark_mode,localStorage.setItem("dark_mode",this.dark_mode)},beforeEnter:function(){document.querySelector("html").scrollTop=0},fetchCountries:function(){var e=this,t={method:"get",url:"https://restcountries.eu/rest/v2/all"};Object(i["a"])(t).then((function(t){var n=t.data;e.countries=n})).catch((function(e){alert("Sorry, we couldn't load the countries. Please refresh the page to try again."),window.console.warn(e)}))}},created:function(){this.fetchCountries()}},u=c,s=(n("5c0b"),n("2877")),l=Object(s["a"])(u,o,a,!1,null,null,null),d=l.exports,f=(n("d3b7"),n("8c4f"));r["a"].use(f["a"]);var h=[{path:"/",name:"home",component:function(){return n.e("chunk-1d09f1a2").then(n.bind(null,"bb51"))}},{path:"/:country_code",name:"details",component:function(){return n.e("chunk-3f7db929").then(n.bind(null,"9f52"))}}],p=new f["a"]({mode:"history",base:"/whereintheworld/",routes:h}),m=p;r["a"].config.productionTip=!1,r["a"].config.ignoredElements=[/^d3-/],new r["a"]({router:m,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"957e":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("bc3a"),o=n.n(r),a={"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"},i=o.a.create(a)},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.0ceb2745.js.map