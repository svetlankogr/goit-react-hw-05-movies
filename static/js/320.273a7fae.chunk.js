"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[320],{320:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(439),a=n(791),c=n(689),u=n(390),s="Cast_cast__list__yNezN",i="Cast_cast__item__UfPEI",o="Cast_img__-isbW",p=n(184),f=function(t){var e=t.movieCast;return(0,p.jsx)("ul",{className:s,children:e.map((function(t){var e=t.id,n=t.original_name,r=t.character,a=t.profile_path;return(0,p.jsxs)("li",{className:i,children:[(0,p.jsx)("img",{className:o,src:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png",alt:n}),(0,p.jsxs)("p",{children:["Name: ",n]}),(0,p.jsxs)("p",{children:["Character: ",r]})]},e)}))})},m=n(289),h=function(){var t=(0,a.useState)(null),e=(0,r.Z)(t,2),n=e[0],s=e[1],i=(0,c.UO)().idMovie;if((0,a.useEffect)((function(){i&&(0,u.M1)(i).then((function(t){s(t.cast)}))}),[i]),n)return(0,p.jsx)(p.Fragment,{children:0===n.length?(0,p.jsx)("p",{className:m.Z.info,children:"We don't have information about cast!"}):(0,p.jsx)(f,{movieCast:n})})}},390:function(t,e,n){n.d(e,{JN:function(){return s},M1:function(){return f},Pg:function(){return o},Ph:function(){return i},tx:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(263).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"4d1fe51ed84bccfd5906e94a2d193282"}}),s=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/trending/all/day",{params:{page:1}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/search/movie",{params:{query:e}});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/reviews"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/credits"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=320.273a7fae.chunk.js.map