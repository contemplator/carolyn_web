(function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],l=0,v=[];l<s.length;l++)i=s[l],a[i]&&v.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},i={app:0},a={app:0},o=[];function s(t){return u.p+"js/"+({Projects:"Projects"}[t]||t)+"."+{Projects:"2cb38ad3"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={Projects:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var r="css/"+({Projects:"Projects"}[t]||t)+"."+{Projects:"f8a84638"}[t]+".css",a=u.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return e()}var v=document.getElementsByTagName("style");for(s=0;s<v.length;s++){c=v[s],l=c.getAttribute("data-href");if(l===r||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete i[t],p.parentNode.removeChild(p),n(o)},p.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(p)}).then(function(){i[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t),c=function(e){l.onerror=l.onload=null,clearTimeout(v);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");o.type=r,o.request=i,n[1](o)}a[t]=void 0}};var v=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var v=0;v<c.length;v++)e(c[v]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"21bb":function(t,e,n){"use strict";var r=n("bcc9"),i=n.n(r);i.a},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),i=n.n(r);i.a},"5e27":function(t,e,n){},"9f2c":function(t,e,n){t.exports=n.p+"img/me.9a237bee.png"},bcc9:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{style:{height:t.navHeight+"px"},attrs:{id:"nav"}},[n("div",{staticClass:"title"},[t._v("\n\t\t\t\tCAROLYN YU\n\t\t\t")]),n("div",{staticClass:"buttoms"},[n("div",{staticClass:"buttom"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" |\n\t\t\t\t"),n("div",{staticClass:"buttom"},[n("router-link",{attrs:{to:"/projects"}},[t._v("Project")])],1),t._v(" |\n\t\t\t\t"),t._m(0)])]),n("div",{staticClass:"router-content",style:{height:t.height}},[n("router-view")],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"buttom"},[n("a",{attrs:{href:"#"}},[t._v("CV")])])}],o=r["a"].extend({name:"app",data:function(){return{navHeight:100,height:"auto"}},created:function(){window.addEventListener("resize",this.getHeight)},mounted:function(){this.getHeight(),console.log("hi")},methods:{getHeight:function(){var t=document.getElementById("nav"),e=t.getBoundingClientRect().bottom,n=window.innerHeight;console.log(t.getBoundingClientRect(),e,window.innerHeight),this.height=n-e+"px"}}}),s=o,u=(n("5c0b"),n("2877")),c=Object(u["a"])(s,i,a,!1,null,null,null),l=c.exports,v=n("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"avatar"},[r("img",{staticStyle:{"border-radius":"50%"},attrs:{alt:"profile",src:n("9f2c")}}),r("p",[t._v(" ❝ Carolyn Yu")]),r("p",[t._v(" ✐ 游佳霖 ")]),r("p",[t._v(" RA in Innovative User Interface Lab at NTUST.")]),r("br"),r("p",[t._v(" ✈ Taipei, Taiwan")]),r("p",[t._v(" ✉ Email ")])]),r("div",{staticClass:"info"},[r("h1",[t._v("About")]),t._v("\n\t\t\tHi, I'm Carolyn, research assistant in "),r("a",{attrs:{href:"http://nccuiuilab.github.io/index.html",target:"_blank"}},[t._v(" Innovation User Interface Lab ")]),t._v(" at National Taiwan University of Science and Technology lead by "),r("a",{attrs:{href:"#",target:"_blank"}},[t._v("Prof. Neng-Hao Yu")]),t._v(".\n\n\t\t\t"),r("br"),t._v("."),r("br"),t._v("."),r("br"),t._v(".\n\t\t\t"),r("p",[t._v(" QAQ ")]),r("br"),r("h1",[t._v("Publications")]),r("h4",[t._v(" WalkingVibe: Reducing Virtual Reality Sickness and Improving Realism while Walking in VR using Unobtrusive Head-mounted Vibrotactile Feedback ")]),t._v("\n\t\t\tYi-Hao Peng, "),r("b",[t._v("Carolyn Yu")]),t._v(", Shi-Hong Liu, Chung-Wei Wang, Paul Taele, Neng-Hao Yu, and Mike Y. Chen\n\t\t\t"),r("p",[t._v("CHI 2020 "),r("a",{attrs:{href:"https://www.yihaopeng.tw/pdf/CHI20_WalkingVibe_preprint.pdf"}},[t._v(" [PDF] ")])]),r("h4",[t._v(" BusMyFriend: Designing a Bus Reservation Service for People with Visual Impairments in Taipei City ")]),r("b",[t._v("Carolyn Yu")]),t._v(", Yee Li, Tsai-Yuan Huang, Wei-An Hsieh, Shao-Yu Lee, I-Hui Yeh, Gang Ku Lin, Neng-Hao Yu, Hsien-Hui Tang, and Yung-Ju Chang\n\t\t\t"),r("p",[t._v("DIS Pwip 2020 "),r("a",{attrs:{href:"#"}},[t._v(" [PDF] ")])]),r("h4",[t._v(" Construction and Optimization of Feature Descriptor based on Dynamic Local Intensity Order Relations of Pixel Group")]),t._v("\n\t\t\tWen-Hung Liao, "),r("b",[t._v("Carolyn Yu")]),t._v(", and Yi-Chieh Wu\n\t\t\t"),r("p",[t._v("ICIAR 2019 "),r("a",{attrs:{href:"https://doi.org/10.1007/978-3-030-27202-9_33"}},[t._v(" [PDF] ")])]),r("h1",[t._v("Education")]),r("p",[t._v(" M.S., Computer Science 2017")]),r("p",[t._v(" Visual Information Processing Lab")]),r("p",[t._v(" National Chengchi University")]),r("br"),r("p",[t._v(" B.S., Computer Science 2015 ")]),r("p",[t._v(" Double major, Digital Content & Technologies Program ")]),r("p",[t._v(" National Chengchi University")]),r("br"),r("br"),r("br")])])}],d=r["a"].extend({name:"home",components:{},computed:{getNavHeight:function(){}}}),f=d,g=(n("21bb"),Object(u["a"])(f,p,h,!1,null,null,null)),m=g.exports;r["a"].use(v["a"]);var b=new v["a"]({routes:[{path:"/",name:"home",component:m},{path:"/projects",name:"projects",component:function(){return n.e("Projects").then(n.bind(null,"acca"))}}]});r["a"].config.productionTip=!1,new r["a"]({router:b,render:function(t){return t(l)}}).$mount("#app")}});
//# sourceMappingURL=app.d3bef5c4.js.map