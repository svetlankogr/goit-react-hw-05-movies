"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[727],{217:function(e,t,r){r.d(t,{e:function(){return p}});var n=r(87),a=r(689),u="MovieItem_movie__item__nTjyc",c="MovieItem_movie_text__A6pAI",i=r(184),o=function(e){var t=e.posterPath,r=e.originaTitle,o=e.originalName,s=e.id,p=(0,a.TH)();return(0,i.jsx)("li",{className:u,children:(0,i.jsxs)(n.rU,{to:"/movies/".concat(s),state:{from:p},children:[(0,i.jsx)("h2",{className:c,children:null!==r&&void 0!==r?r:o}),(0,i.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w500".concat(t):"https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png",alt:null!==r&&void 0!==r?r:o})]})},s)},s="MovieList_movie__list__IZ1Q7",p=function(e){var t=e.movies;return(0,i.jsx)("ul",{className:s,children:t.map((function(e){var t=e.poster_path,r=e.original_title,n=e.original_name,a=e.id;return(0,i.jsx)(o,{posterPath:t,originaTitle:r,originalName:n,id:a},a)}))})}},54:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(439),a=r(791),u=r(87),c=r(390),i=r(217),o="SearchMovie_searchForm__unPlp",s="SearchMovie_searchFormBtn__Tv9Fa",p="SearchMovie_searchFormBtnLabel__MRHNf",f="SearchMovie_searchFormInput__QVP8q",m=r(184),l=function(){var e,t=(0,a.useState)([]),r=(0,n.Z)(t,2),l=r[0],v=r[1],h=(0,a.useState)(""),d=(0,n.Z)(h,2),_=d[0],g=d[1],x=(0,u.lr)(),w=(0,n.Z)(x,2),b=w[0],j=w[1],y=null!==(e=b.get("query"))&&void 0!==e?e:"";(0,a.useEffect)((function(){y&&(g(y),(0,c.Ph)(y).then((function(e){var t=e.results;v(t)})))}),[y]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault(),j({query:_})},children:[(0,m.jsx)("input",{className:f,name:"name",placeholder:"Search movie",type:"text",value:_,onChange:function(e){return g(e.target.value)}}),(0,m.jsx)("button",{className:s,type:"submit",children:(0,m.jsx)("span",{className:p,children:"Search"})})]}),(0,m.jsx)(i.e,{movies:l})]})},v=function(){return(0,m.jsx)(l,{})}},390:function(e,t,r){r.d(t,{JN:function(){return i},M1:function(){return f},Pg:function(){return s},Ph:function(){return o},tx:function(){return p}});var n=r(861),a=r(757),u=r.n(a),c=r(263).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"4d1fe51ed84bccfd5906e94a2d193282"}}),i=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/all/day",{params:{page:1}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=727.04a69b81.chunk.js.map