"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{863:function(t,e,n){function r(t,e,n,r,a,c,s){try{var u=t[c](s),o=u.value}catch(i){return void n(i)}u.done?e(o):Promise.resolve(o).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,c){var s=t.apply(e,n);function u(t){r(s,a,c,u,o,"next",t)}function o(t){r(s,a,c,u,o,"throw",t)}u(void 0)}))}}n.d(e,{a2:function(){return f},Iu:function(){return l},GK:function(){return m},Nz:function(){return p},wm:function(){return i}});var c=n(687),s=n.n(c),u="https://api.themoviedb.org/3",o="44b5968d02afc5d51cc06c820ba3f06d",i=function(){var t=a(s().mark((function t(){var e,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(u,"/trending/movie/day?api_key=").concat(o));case 3:return e=t.sent,t.next=6,e.json();case 6:return n=t.sent,t.abrupt("return",n);case 10:t.prev=10,t.t0=t.catch(0),alert(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=a(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&include_adult=false&language=en-US&page=1"));case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),alert(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=a(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(u,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),alert(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=a(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),alert(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=a(s().mark((function t(e){var n,r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),alert(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},76:function(t,e,n){n.r(e),n.d(e,{default:function(){return i}});var r=n(439),a=n(791),c=n(863),s=n(689),u={castList:"Cast_castList__ARoWn",castItem:"Cast_castItem__-Jcfe",actorProfile:"Cast_actorProfile__d5X10",tumb:"Cast_tumb__WxCQd",actorName:"Cast_actorName__XabVA"},o=n(184),i=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],i=e[1],p=(0,s.UO)("").movieId;return(0,a.useEffect)((function(){(0,c.Iu)(p).then((function(t){i(t.cast)}))}),[p]),(0,o.jsx)("ul",{className:u.castList,children:n&&n.map((function(t){var e=t.id,n=t.character,r=t.name,a=t.profile_path;return(0,o.jsxs)("li",{className:u.castItem,children:[a?(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:r,className:u.actorProfile}):(0,o.jsx)("img",{src:"../../images/images.png",alt:"\ud83e\udd7a No profile",className:u.actorProfile,height:"120"}),(0,o.jsxs)("div",{className:u.tumb,children:[(0,o.jsx)("p",{className:u.actorName,children:r}),(0,o.jsxs)("p",{className:u.actorCharacter,children:["Character: ",n]})]})]},e)}))})}}}]);
//# sourceMappingURL=76.fa5c6680.chunk.js.map