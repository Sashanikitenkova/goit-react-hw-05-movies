"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{1247:function(e,r,t){t.r(r);var n=t(5861),a=t(885),c=t(7757),u=t.n(c),s=t(2791),i=t(6871),o=t(3243),p=t(3325),f=t(184);r.default=function(){var e=(0,i.UO)().movieId,r=(0,s.useState)([]),t=(0,a.Z)(r,2),c=t[0],l=t[1],h=(0,s.useState)(!1),d=(0,a.Z)(h,2),v=d[0],g=d[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return g(!0),r.prev=1,r.next=4,(0,o.y)(e);case 4:t=r.sent,l(t),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.log(r.t0);case 11:return r.prev=11,g(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,f.jsxs)("div",{children:[v&&(0,f.jsx)(p.a,{}),0===c.length?(0,f.jsx)("p",{children:"There is no information about the cast..."}):(0,f.jsx)("ul",{children:c.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+e.profile_path,alt:"",width:"100"}),(0,f.jsx)("h2",{children:e.name}),(0,f.jsxs)("h3",{children:["Character:",e.character]})]},e.id)}))})]})}},3325:function(e,r,t){t.d(r,{a:function(){return u}});var n=t(4691),a="loader_Loader__rtbh8",c=t(184),u=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.VL,{visible:!0,height:"80",width:"80",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})})}},3243:function(e,r,t){t.d(r,{Bt:function(){return h},Tg:function(){return o},Y5:function(){return f},bI:function(){return p},y:function(){return l}});var n=t(5861),a=t(7757),c=t.n(a),u=t(4569),s=t.n(u);s().defaults.baseURL="https://api.themoviedb.org/3/";var i="6fdda2cf7740f9f0b3187603c7864dcc",o=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("trending/movie/day?api_key=".concat(i));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(r));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("movie/".concat(r,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("movie/".concat(r,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("movie/".concat(r,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.d28bff0e.chunk.js.map