"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[438],{217:function(t,e,n){n.d(e,{e:function(){return p}});var r=n(87),a=n(689),i="MovieItem_movie__item__nTjyc",u="MovieItem_movie_text__A6pAI",c=n(184),o=function(t){var e=t.posterPath,n=t.originaTitle,o=t.originalName,s=t.id,p=(0,a.TH)();return(0,c.jsx)("li",{className:i,children:(0,c.jsxs)(r.rU,{to:"/movies/".concat(s),state:{from:p},children:[(0,c.jsx)("h2",{className:u,children:null!==n&&void 0!==n?n:o}),(0,c.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png",alt:null!==n&&void 0!==n?n:o})]})},s)},s="MovieList_movie__list__IZ1Q7",p=function(t){var e=t.movies;return(0,c.jsx)("ul",{className:s,children:e.map((function(t){var e=t.poster_path,n=t.original_title,r=t.original_name,a=t.id;return(0,c.jsx)(o,{posterPath:e,originaTitle:n,originalName:r,id:a},a)}))})}},438:function(t,e,n){n.r(e),n.d(e,{default:function(){return s}});var r=n(439),a=n(791),i=n(390),u=n(217),c="TrendingMovie_trending__title__pXukb",o=n(184),s=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],s=e[1];return(0,a.useEffect)((function(){(0,i.JN)().then((function(t){var e=t.results;s(e)}))}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:c,children:"Trending today"}),(0,o.jsx)(u.e,{movies:n})]})}},390:function(t,e,n){n.d(e,{JN:function(){return c},M1:function(){return f},Pg:function(){return s},Ph:function(){return o},tx:function(){return p}});var r=n(861),a=n(757),i=n.n(a),u=n(263).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"4d1fe51ed84bccfd5906e94a2d193282"}}),c=function(){var t=(0,r.Z)(i().mark((function t(){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/trending/all/day",{params:{page:1}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/search/movie",{params:{query:e}});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/reviews"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(e,"/credits"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=438.05b73997.chunk.js.map