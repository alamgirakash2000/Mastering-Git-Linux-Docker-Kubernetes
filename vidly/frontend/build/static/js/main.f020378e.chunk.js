(this["webpackJsonpvidly-frontend"]=this["webpackJsonpvidly-frontend"]||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(20),o=n.n(a),i=(n(27),n(11)),u=n(7),s=n(5),l=n(3),v=n.n(l),f=n(21),d=n(22),j=(n(29),n(0)),p=["onChange","placeholder","value"];var b=function(e){var t=e.onChange,n=e.placeholder,r=e.value,c=Object(d.a)(e,p);return Object(j.jsx)("input",Object(f.a)({onChange:t,className:"Input",placeholder:n,type:"text",value:r},c))};var h=function(e){var t=e.onAddMovie,n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],o=c[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),a&&(t(a),o(""))},children:Object(j.jsx)(b,{"aria-label":"New Movie",onChange:function(e){return o(e.target.value)},placeholder:"Add a new movie...",type:"text",value:a})})};n(31);var O=function(e){var t=e.movie,n=e.onDeleteMovie;return Object(j.jsxs)("li",{className:"MovieListItem",children:[t.title,Object(j.jsx)("button",{className:"MovieListItem__Delete",onClick:n,children:Object(j.jsx)("img",{src:"/images/delete.svg",alt:"Delete movie"})})]})};n(32);var m=function(e){var t=e.movies,n=e.onDeleteMovie;return Object(j.jsx)("ul",{className:"MovieList",children:t.map((function(e){return Object(j.jsx)(O,{movie:e,onDeleteMovie:function(){return n(e)}},e._id)}))})},x=n(8),g=n.n(x),_=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL||"http://localhost:3001/api",C={get:function(e){return g.a.get(_+e)},create:function(e,t){return g.a.post(_+e,t)},remove:function(e){return g.a.delete(_+e)}};n(52);var S=function(){var e="/movies",t=Object(r.useState)([]),n=Object(s.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)(),l=Object(s.a)(o,2),f=l[0],d=l[1],p=function(){var t=Object(u.a)(v.a.mark((function t(){var n,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.get(e);case 3:n=t.sent,r=n.data,a(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),d("Could not fetch the movies!");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(u.a)(v.a.mark((function t(n){var r,o,u;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r={_id:Date.now(),title:n},a([].concat(Object(i.a)(c),[r])),t.next=5,C.create(e,r);case 5:o=t.sent,u=o.data,a([].concat(Object(i.a)(c),[u])),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),d("Could not save the movie!"),a(c);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(c.filter((function(e){return e!==t}))),e.next=4,C.remove("/movies/"+t._id);case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),d("Could not delete the movie!"),a(c);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return p()}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(h,{onAddMovie:b}),f&&Object(j.jsx)("p",{role:"alert",className:"Error",children:f}),Object(j.jsx)(m,{movies:c,onDeleteMovie:O})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),D()}},[[53,1,2]]]);
//# sourceMappingURL=main.f020378e.chunk.js.map