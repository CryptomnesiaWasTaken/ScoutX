(this.webpackJsonpfb=this.webpackJsonpfb||[]).push([[9],{196:function(e,t,c){},197:function(e,t,c){},198:function(e,t,c){},204:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),r=c(5),a=c(7),i=c(1),o=c(10),j=c(17),l=c(48),u=c(16),b=(c(196),c(2)),O=function(e){var t=e.posts,c=e.onClose;return Object(b.jsxs)("div",{className:"maingallery",children:[Object(b.jsx)("button",{onClick:c,"aria-label":"close",children:Object(b.jsx)("img",{src:u.e,alt:"close"})}),t.map((function(e){return Object(b.jsx)(j.b,{to:"/post/".concat(e._id),children:Object(b.jsx)("img",{src:e.image.src,alt:"post-images"})},e._id)}))]})},f=(c(197),function(){var e=Object(o.c)((function(e){return e.post})).userPosts.posts.filter((function(e){return!!e.image})),t=Object(i.useState)(!1),c=Object(a.a)(t,2),s=c[0],n=c[1];return Object(b.jsxs)("section",{className:"gallery",children:[Object(b.jsx)(l.a,{show:s,onClose:function(){n(!1)},children:Object(b.jsx)(O,{posts:e})}),Object(b.jsx)("div",{className:"gallery__images",children:e.map((function(e,t){return t<3&&Object(b.jsx)(j.b,{to:"/post/".concat(e._id),children:Object(b.jsx)("img",{src:null===e||void 0===e?void 0:e.image.src,alt:"postimage"})},e._id)}))}),e.length>3&&Object(b.jsx)("button",{onClick:function(){return n(!0)},children:"View All"})]})}),p=c(64),d=c(188),x=c(6),h=c(65),g=c(29),m=c(23),v=c(184),_=c(20),w=c(183);c(198),t.default=function(){var e=Object(x.q)().id,t=Object(o.c)((function(e){return e.post})).userPosts,c=t.posts,s=t.page,j=e===Object(o.c)((function(e){return e.user.id})),l=Object(i.useState)(!0),u=Object(a.a)(l,2),O=u[0],N=u[1],k=Object(o.b)(),P=Object(m.a)();Object(i.useEffect)((function(){Object(r.a)(n.a.mark((function t(){var c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return N(!0),t.next=3,P(_.f,{userId:e});case 3:(c=t.sent)&&k(Object(g.m)(c)),N(!1);case 6:case"end":return t.stop()}}),t)})))()}),[k,e,P]);var y=function(){var t=Object(r.a)(n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(_.f,{userId:e,page:s+1});case 2:return r=t.sent,k(Object(g.m)({posts:c.concat(r.posts),page:r.page})),t.abrupt("return",r.posts.length);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("section",{className:"profile",children:[Object(b.jsxs)("article",{className:"profile__left",children:[Object(b.jsx)(d.a,{id:e,isOwnProfile:j}),Object(b.jsx)(f,{})]}),Object(b.jsx)(w.a,{getNextPage:y,children:Object(b.jsxs)("article",{className:"profile__center",children:[j&&Object(b.jsx)(h.a,{}),c.length<1&&!O&&Object(b.jsx)("h2",{children:"No Posts"}),Object(b.jsx)(v.a,{posts:c,isLoading:O})]})}),Object(b.jsx)("article",{className:"profile__right gradient-border",children:Object(b.jsx)(p.a,{})})]})}}}]);
//# sourceMappingURL=9.cab65399.chunk.js.map