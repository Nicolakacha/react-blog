(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{36:function(n,t,e){},37:function(n,t,e){},38:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),a=e(15),i=e.n(a),o=e(2),u=e(7),s=e(5),l=e(3),b=e(4),j="@media screen and (min-width: 768px)",d=e(10),f=e.n(d),p=e(14),x=e(12),O="token",h=function(n){return localStorage.setItem(O,n)},g=function(){return localStorage.getItem(O)},m="https://student-json-api.lidemy.me",v=function(){return fetch("".concat(m,"/posts?_sort=createdAt&_order=desc")).then((function(n){return n.json()}))},y=function(n,t){return fetch("".concat(m,"/posts?_page=").concat(n,"&_limit=").concat(t,"&_sort=createdAt&_order=desc&_expand=user")).then((function(n){return n.json()}))},w=function(n){var t=n.username,e=n.password;return fetch("".concat(m,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:e})}).then((function(n){return n.json()}))},k=function(n){var t=n.nickname,e=n.username,r=n.password;return fetch("".concat(m,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:t,username:e,password:r})}).then((function(n){return n.json()}))},E=Object(x.b)({name:"user",initialState:{userId:null,userErrorMessage:null,isUserLoading:!1},reducers:{setIsUserLoading:function(n,t){n.isUserLoading=t.payload},setUserId:function(n,t){n.userId=t.payload},setUserErrorMessage:function(n,t){n.userErrorMessage=t.payload}}}),S=function(n){return n.user.userId},I=function(n){return n.user.isUserLoading},P=function(n){return n.user.userErrorMessage},C=E.actions,N=C.setIsUserLoading,z=C.setUserId,M=C.setUserErrorMessage,T=function(n,t){if(1===n.ok)return h(n.token);console.log(n),t(M(n.message))},F=function(){return function(n){if(n(N(!0)),g())return function(){var n=g();return fetch("".concat(m,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))}().then((function(t){if(n(N(!1)),1===t.ok)return n(z(t.data.id)),t.data.id;h(null)}));n(N(!1))}},L=E.reducer;function A(){var n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0 6px;\n  height: 64px;\n  "," {\n    margin: 0 30px;\n  }\n"]);return A=function(){return n},n}function $(){var n=Object(o.a)(["\n  display: flex;\n  margin: 0 6px;\n  align-items: center;\n  height: 64px;\n  -webkit-tap-highlight-color: transparent;\n  "," {\n    margin: 0 30px;\n  }\n"]);return $=function(){return n},n}function R(){var n=Object(o.a)(["\n  font-size: 32px;\n  color: #017a75;\n  margin-top: 10px;\n  -webkit-tap-highlight-color: transparent;\n  "," {\n    margin-top: 0px;\n  }\n"]);return R=function(){return n},n}function U(){var n=Object(o.a)(["\n  display: flex;\n"]);return U=function(){return n},n}function B(){var n=Object(o.a)(["\n  height: 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);\n  padding: 0px 5vw;\n  background: white;\n  flex-direction: column;\n  "," {\n    height: 64px;\n    flex-direction: row;\n  }\n"]);return B=function(){return n},n}var D=l.a.div(B(),j),_=l.a.div(U()),J=Object(l.a)(u.b)(R(),j),Z=Object(l.a)(u.c)($(),j),Y=l.a.a(A(),j);function H(){var n=Object(b.b)(),t=Object(s.g)(),e=Object(b.c)(S),c=Object(b.c)(I);return Object(r.jsxs)(D,{children:[Object(r.jsx)(J,{to:"/react-blog",children:"React Blog"}),Object(r.jsxs)(_,{children:[Object(r.jsx)(Z,{to:"/react-blog/about-me",children:"\u95dc\u65bc\u6211"}),Object(r.jsx)(Z,{to:"/react-blog/posts",children:"\u6587\u7ae0\u5217\u8868"}),c?Object(r.jsx)(Z,{to:"/",children:"\u6aa2\u67e5\u767b\u5165\u8cc7\u8a0a\u4e2d"}):Object(r.jsxs)(r.Fragment,{children:[e&&Object(r.jsx)(Z,{to:"/react-blog/new-post",children:"\u767c\u8868\u6587\u7ae0"}),e&&Object(r.jsx)(Y,{onClick:function(){n((function(n){h(""),n(z(null)),alert("\u767b\u51fa\u6210\u529f")})),t("/react-blog")},children:"\u767b\u51fa"}),!e&&Object(r.jsx)(Z,{to:"/react-blog/login",children:"\u767b\u5165"}),!e&&Object(r.jsx)(Z,{to:"/react-blog/register",children:"\u8a3b\u518a"})]})]})]})}function V(){return(V=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function X(n,t){if(null==n)return{};var e,r,c=function(n,t){if(null==n)return{};var e,r,c={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(c[e]=n[e]);return c}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(c[e]=n[e])}return c}var q=c.createElement("g",null,c.createElement("circle",{cx:60,cy:50,r:4,fill:"#d7adb0"},c.createElement("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",values:"95;35",keyTimes:"0;1",begin:"-0.67s"}),c.createElement("animate",{attributeName:"fill-opacity",repeatCount:"indefinite",dur:"1s",values:"0;1;1",keyTimes:"0;0.2;1",begin:"-0.67s"})),c.createElement("circle",{cx:60,cy:50,r:4,fill:"#d7adb0"},c.createElement("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",values:"95;35",keyTimes:"0;1",begin:"-0.33s"}),c.createElement("animate",{attributeName:"fill-opacity",repeatCount:"indefinite",dur:"1s",values:"0;1;1",keyTimes:"0;0.2;1",begin:"-0.33s"})),c.createElement("circle",{cx:60,cy:50,r:4,fill:"#d7adb0"},c.createElement("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",values:"95;35",keyTimes:"0;1",begin:"0s"}),c.createElement("animate",{attributeName:"fill-opacity",repeatCount:"indefinite",dur:"1s",values:"0;1;1",keyTimes:"0;0.2;1",begin:"0s"}))),G=c.createElement("g",{transform:"translate(-15 0)"},c.createElement("path",{d:"M50 50L20 50A30 30 0 0 0 80 50Z",fill:"#d7d3d0",transform:"rotate(90 50 50)"}),c.createElement("path",{d:"M50 50L20 50A30 30 0 0 0 80 50Z",fill:"#d7d3d0"},c.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;45 50 50;0 50 50",keyTimes:"0;0.5;1"})),c.createElement("path",{d:"M50 50L20 50A30 30 0 0 1 80 50Z",fill:"#d7d3d0"},c.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;-45 50 50;0 50 50",keyTimes:"0;0.5;1"})));function K(n,t){var e=n.title,r=n.titleId,a=X(n,["title","titleId"]);return c.createElement("svg",V({style:{margin:"auto",background:"none",display:"block",shapeRendering:"auto"},width:"136px",height:"136px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":r},a),e?c.createElement("title",{id:r},e):null,q,G)}var Q=c.forwardRef(K);e.p;function W(){var n=Object(o.a)(["\n  transform: translateX(4%);\n"]);return W=function(){return n},n}function nn(){var n=Object(o.a)(["\n  display: flex\n  justify-content: center;\n"]);return nn=function(){return n},n}function tn(){var n=Object(o.a)(["\n  font-size: 36px;\n  margin-top: 1.67em;\n"]);return tn=function(){return n},n}function en(){var n=Object(o.a)(["\n  max-width: 600px;\n  height: 400px;\n  margin: 50px auto 0;\n  padding: 20px;\n  background: rgba(210, 210, 210, 0.4);\n  text-align: center;\n  transition: all linear 0.2s;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\n  &:hover {\n    transition: all linear 0.2s;\n    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.5);\n  }\n"]);return en=function(){return n},n}function rn(){var n=Object(o.a)(["\n  margin: 0 10vw;\n  height: calc(100vh - 133px);\n"]);return rn=function(){return n},n}var cn=l.a.div(rn()),an=l.a.div(en()),on=l.a.h1(tn()),un=l.a.div(nn()),sn=l.a.div(W());function ln(){return Object(r.jsx)(cn,{children:Object(r.jsxs)(an,{children:[Object(r.jsx)(on,{children:"A Simple Blog"}),Object(r.jsxs)(un,{children:["\u5229\u7528 React \u5be6\u4f5c SPA \u90e8\u843d\u683c\uff5e",Object(r.jsx)("br",{}),Object(r.jsx)(sn,{children:Object(r.jsx)(Q,{})})]})]})})}function bn(){var n=Object(o.a)(["\n  padding: 5px 10px;\n  border-radius: 10px;\n  border: transparent;\n  background: #909090;\n  color: white;\n  outline: none;\n  cursor: pointer;\n  font-size: 16px;\n  box-shadow: 0px 5px 2px #707070;\n  &:active {\n    transform: translateY(2px);\n    box-shadow: 0px 3px 2px #888888;\n  }\n"]);return bn=function(){return n},n}var jn=l.a.button(bn()),dn=Object(x.b)({name:"posts",initialState:{isLoading:!1,totalPostNumber:null,posts:[],post:null,newPostResponse:null,errorMessage:null},reducers:{setIsLoading:function(n,t){n.isLoading=t.payload},setPost:function(n,t){n.post=t.payload},setTotalPostsNumber:function(n,t){n.totalPostNumber=t.payload.length},setPosts:function(n,t){n.posts=t.payload},setNewPostResponse:function(n,t){n.newPostResponse=t.payload},setErrorMessage:function(n,t){n.errorMessage=t.payload}}}),fn=function(n){return n.posts.post},pn=function(n){return n.posts.posts},xn=function(n){return n.posts.isLoading},On=function(n){return n.posts.errorMessage},hn=function(n){return n.posts.totalPostNumber},gn=dn.actions,mn=gn.setPost,vn=gn.setPosts,yn=gn.setIsLoading,wn=gn.setErrorMessage,kn=gn.setTotalPostsNumber,En=gn.setNewPostResponse,Sn=function(n,t){return function(){var e=Object(p.a)(f.a.mark((function e(r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(yn(!0)),e.next=3,v().then((function(n){return r(kn(n))}));case 3:y(n,t).then((function(n){r(vn(n)),r(yn(!1))}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},In=function(n){return function(t){return t(yn(!0)),function(n){return fetch("".concat(m,"/posts?id=").concat(n,"&_expand=user")).then((function(n){return n.json()}))}(n).then((function(n){return t(mn(n[0])),t(yn(!1)),n[0]}))}},Pn=function(n){return function(t){return t(yn(!0)),function(n){var t=n.title,e=n.body,r=g();return fetch("".concat(m,"/posts"),{method:"POST",headers:{authorization:"Bearer ".concat(r),"content-type":"application/json"},body:JSON.stringify({title:t,body:e})}).then((function(n){return n.json()}))}(n).then((function(n){return t(En(n)),t(yn(!1)),n}))}},Cn=function(n){return function(){return function(n){var t=n.title,e=n.body,r=n.id,c=g();return fetch("".concat(m,"/posts/").concat(r),{method:"PATCH",headers:{authorization:"Bearer ".concat(c),"content-type":"application/json"},body:JSON.stringify({title:t,body:e})}).then((function(n){return n.json()}))}(n)}},Nn=function(n){return function(){return function(n){var t=g();return fetch("".concat(m,"/posts/").concat(n),{method:"DELETE",headers:{authorization:"Bearer ".concat(t)}}).then((function(n){return n.json()}))}(n).then((function(n){return n}))}},zn=dn.reducer;function Mn(){var n=Object(o.a)(["\n  margin: 10px 20px 10px 0px;\n"]);return Mn=function(){return n},n}function Tn(){var n=Object(o.a)(["\n  padding-bottom: 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n"]);return Tn=function(){return n},n}function Fn(){var n=Object(o.a)(["\n  margin-top: 20px;\n  word-break: break-all;\n"]);return Fn=function(){return n},n}function Ln(){var n=Object(o.a)(["\n  color: #707070;\n"]);return Ln=function(){return n},n}function An(){var n=Object(o.a)(["\n  font-size: 24px;\n  word-break: break-all;\n"]);return An=function(){return n},n}function $n(){var n=Object(o.a)(["\n  padding: 20px;\n  margin: 10px 0;\n  justify-content: space-between;\n"]);return $n=function(){return n},n}var Rn=l.a.div($n()),Un=l.a.h2(An()),Bn=l.a.div(Ln()),Dn=l.a.div(Fn()),_n=l.a.div(Tn()),Jn=Object(l.a)(jn)(Mn());function Zn(n){var t,e,c=n.post,a=Object(b.c)(S),i=Object(b.b)(),o=Object(s.g)();return Object(r.jsxs)(Rn,{children:[Object(r.jsxs)(Un,{children:[a===c.userId?"[\u6211\u7684\u6587\u7ae0] ":"[".concat(c.user.nickname,"\u7684\u6587\u7ae0] "),c.title]}),Object(r.jsxs)(_n,{children:[Object(r.jsx)(Bn,{children:new Date(c.createdAt).toLocaleString()}),a===c.userId?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Jn,{onClick:(e=c.id,function(){return o("/react-blog/post/edit/".concat(e))}),children:"\u7de8\u8f2f"}),Object(r.jsx)(Jn,{onClick:(t=c.id,function(){return i(Nn(t)).then((function(n){0!==n.ok&&(i(Sn(1,5)),o("/react-blog"))}))}),children:" \u522a\u9664"})]}):null]}),Object(r.jsx)(Dn,{children:c.body})]})}function Yn(){var n=Object(o.a)(["\n  padding-top: 150px;\n  margin: 0 auto;\n  text-align: center;\n"]);return Yn=function(){return n},n}var Hn=l.a.div(Yn());function Vn(){return Object(r.jsx)(Hn,{children:Object(r.jsx)(Q,{})})}function Xn(){var n=Object(o.a)([""]);return Xn=function(){return n},n}function qn(){var n=Object(o.a)(["\n  margin: 25px 10vw 0;\n  min-height: calc(100vh - 123px);\n"]);return qn=function(){return n},n}var Gn=l.a.div(qn()),Kn=l.a.h1(Xn()),Qn=function(n){return n.posts.slice(0,5).map((function(n){return Object(r.jsx)(Zn,{post:n},n.id)}))};function Wn(){var n=Object(b.b)(),t=Object(b.c)(xn),e=Object(b.c)(pn);return Object(c.useEffect)((function(){return n(Sn(1,5))}),[n]),Object(r.jsx)(Gn,{children:t?Object(r.jsx)(Vn,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Kn,{children:"\u6700\u65b0\u6587\u7ae0"}),Object(r.jsx)(Qn,{posts:e})]})})}var nt=e(6);function tt(){var n=Object(o.a)(["\n  height: auto;\n  min-height: 290px;\n  max-width: ","px;\n  margin: 35px auto 0;\n  padding: ",";\n  background: whitesmoke;\n  transition: all linear 0.2s;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\n  &:hover {\n    transition: all linear 0.2s;\n    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.5);\n  }\n"]);return tt=function(){return n},n}var et=l.a.form(tt(),(function(n){return n.$width}),(function(n){return"post"===n.$paddingType?"10px 30px 30px 30px":"20px"}));function rt(){var n=Object(o.a)(["\n  border: none;\n  outline: none;\n  padding: 5px 10px;\n  border-bottom: 1px solid #909090;\n  background: transparent;\n  letter-spacing: 5px;\n  color: #808080;\n  font-size: 16px;\n"]);return rt=function(){return n},n}function ct(){var n=Object(o.a)(["\n  margin: 20px 0;\n"]);return ct=function(){return n},n}var at=l.a.div(ct()),it=l.a.input(rt());function ot(n){var t=n.type,e=n.value,c=n.title,a=n.handleInputFocus,i=n.handleInputChange;return Object(r.jsxs)(at,{children:[c,Object(r.jsx)(it,{type:t,value:e,onFocus:a,onChange:i})]})}function ut(){var n=Object(o.a)(["\n  margin-left: 10px;\n"]);return ut=function(){return n},n}function st(){var n=Object(o.a)(["\n  margin-top: 20px;\n"]);return st=function(){return n},n}var lt=l.a.div(st()),bt=l.a.label(ut());function jt(n){var t=n.togglePassword;return Object(r.jsxs)(lt,{children:[Object(r.jsx)("input",{type:"checkbox",onClick:t,id:"password"}),Object(r.jsx)(bt,{htmlFor:"password",children:"\u986f\u793a\u5bc6\u78bc "})]})}function dt(){var n=Object(o.a)(["\n  color: red;\n  margin: 10px 0;\n  height: ","px;\n  display: ",";\n"]);return dt=function(){return n},n}var ft=l.a.div(dt(),(function(n){return n.$height}),(function(n){return n.errorMessage?"1":"hidden"}));function pt(){var n=Object(o.a)(["\n  margin: 30px auto 10px;\n"]);return pt=function(){return n},n}function xt(){var n=Object(o.a)(["\n  margin: 40px auto;\n  color: #909090;\n"]);return xt=function(){return n},n}function Ot(){var n=Object(o.a)(["\n  font-size: 24px;\n"]);return Ot=function(){return n},n}function ht(){var n=Object(o.a)(["\n  margin: 0 10vw;\n  min-height: calc(100vh - 143px);\n"]);return ht=function(){return n},n}var gt=l.a.div(ht()),mt=l.a.h1(Ot()),vt=l.a.div(xt()),yt=Object(l.a)(jn)(pt());function wt(){var n=Object(b.b)(),t=Object(s.g)(),e=Object(c.useState)(""),a=Object(nt.a)(e,2),i=a[0],o=a[1],u=Object(c.useState)(""),l=Object(nt.a)(u,2),j=l[0],d=l[1],x=Object(c.useState)(!1),O=Object(nt.a)(x,2),h=O[0],g=O[1],m=Object(b.c)(P),v=Object(b.c)(I),y=function(){return n(M(null))},k=function(n){return function(t){return n(t.target.value)}};return Object(c.useEffect)((function(){return function(){return n(M(null))}}),[n]),Object(r.jsx)(gt,{children:Object(r.jsxs)(et,{onSubmit:function(e){var r;e.preventDefault(),n((r={username:i,password:j},function(){var n=Object(p.a)(f.a.mark((function n(t){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(N(!0)),n.next=3,w(r).then((function(n){return T(n,t)}));case 3:return n.abrupt("return",t(F()));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())).then((function(n){n&&t("/react-blog")}))},$width:350,children:[Object(r.jsx)(mt,{children:"\u8acb\u767b\u5165\u90e8\u843d\u683c"}),Object(r.jsx)(ot,{type:"text",title:"\u5e33\u865f\uff1a",value:i,handleInputFocus:y,handleInputChange:k(o)}),Object(r.jsx)(ot,{type:h?"text":"password",title:"\u5bc6\u78bc\uff1a",value:j,handleInputFocus:y,handleInputChange:k(d)}),Object(r.jsx)(jt,{togglePassword:function(){return g(!h)}}),v?Object(r.jsx)(vt,{children:"Loading..."}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ft,{errorMessage:m,$height:15,children:m}),Object(r.jsx)(yt,{children:"\u767b\u5165"})]})]})})}function kt(){var n=Object(o.a)(["\n  margin: 10px auto;\n"]);return kt=function(){return n},n}function Et(){var n=Object(o.a)(["\n  margin: 20px 0 10px 0;\n  color: #909090;\n"]);return Et=function(){return n},n}function St(){var n=Object(o.a)(["\n  color: red;\n  font-size: 16px;\n"]);return St=function(){return n},n}function It(){var n=Object(o.a)(["\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #808080;\n  outline: none;\n  height: 150px;\n  font-size: 16px;\n"]);return It=function(){return n},n}function Pt(){var n=Object(o.a)(["\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #808080;\n  outline: none;\n  font-size: 16px;\n"]);return Pt=function(){return n},n}function Ct(){var n=Object(o.a)(["\n  margin-bottom: 10px;\n"]);return Ct=function(){return n},n}function Nt(){var n=Object(o.a)(["\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n"]);return Nt=function(){return n},n}function zt(){var n=Object(o.a)(["\n  font-size: 28px;\n  margin: 0px;\n"]);return zt=function(){return n},n}function Mt(){var n=Object(o.a)(["\n  margin-bottom: 10px;\n  text-align: center;\n"]);return Mt=function(){return n},n}function Tt(){var n=Object(o.a)(["\n  margin-top: 30px;\n  min-height: calc(100vh - 143px);\n"]);return Tt=function(){return n},n}var Ft=l.a.div(Tt()),Lt=l.a.div(Mt()),At=l.a.h1(zt()),$t=l.a.div(Nt()),Rt=l.a.div(Ct()),Ut=l.a.input(Pt()),Bt=l.a.textarea(It()),Dt=l.a.div(St()),_t=l.a.div(Et()),Jt=Object(l.a)(jn)(kt());function Zt(){var n=Object(c.useState)(""),t=Object(nt.a)(n,2),e=t[0],a=t[1],i=Object(c.useState)(""),o=Object(nt.a)(i,2),u=o[0],l=o[1],j=Object(b.b)(),d=Object(s.g)(),f=Object(b.c)(On),p=Object(b.c)(xn),x=Object(b.c)(S),O=function(){return j(wn(null))},h=function(n){return function(t){return n(t.target.value)}};return Object(c.useEffect)((function(){x||d("/react-blog")}),[x,d]),Object(r.jsx)(Ft,{children:Object(r.jsxs)(et,{onSubmit:function(n){n.preventDefault(),j(Pn({title:e,body:u})).then((function(n){if(!n.id)return j(wn(n.message));d("/react-blog/post/"+n.id)}))},$width:460,$paddingType:"post",children:[Object(r.jsx)(Lt,{children:Object(r.jsx)(At,{children:"\u65b0\u6587\u7ae0"})}),Object(r.jsxs)($t,{children:[Object(r.jsx)(Rt,{children:"\u6a19\u984c\uff1a"}),Object(r.jsx)(Ut,{value:e,onChange:h(a),onFocus:O})]}),Object(r.jsxs)($t,{children:[Object(r.jsx)(Rt,{children:"\u5167\u5bb9\uff1a"}),Object(r.jsx)(Bt,{value:u,col:"20",onChange:h(l),onFocus:O})]}),p?Object(r.jsx)(_t,{children:"Loading..."}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Jt,{children:"\u9001\u51fa\u6587\u7ae0"}),f&&Object(r.jsx)(Dt,{children:f})]})]})})}function Yt(){var n=Object(o.a)(["\n  margin: 10px auto;\n"]);return Yt=function(){return n},n}function Ht(){var n=Object(o.a)(["\n  color: red;\n  font-size: 16px;\n"]);return Ht=function(){return n},n}function Vt(){var n=Object(o.a)(["\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #808080;\n  outline: none;\n  height: 150px;\n  font-size: 16px;\n"]);return Vt=function(){return n},n}function Xt(){var n=Object(o.a)(["\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #808080;\n  outline: none;\n  font-size: 16px;\n"]);return Xt=function(){return n},n}function qt(){var n=Object(o.a)(["\n  margin-bottom: 10px;\n"]);return qt=function(){return n},n}function Gt(){var n=Object(o.a)(["\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n"]);return Gt=function(){return n},n}function Kt(){var n=Object(o.a)(["\n  font-size: 28px;\n  margin: 0px;\n"]);return Kt=function(){return n},n}function Qt(){var n=Object(o.a)(["\n  margin-bottom: 10px;\n  text-align: center;\n"]);return Qt=function(){return n},n}function Wt(){var n=Object(o.a)(["\n  margin-top: 30px;\n  min-height: calc(100vh - 143px);\n"]);return Wt=function(){return n},n}var ne=l.a.div(Wt()),te=l.a.div(Qt()),ee=l.a.h1(Kt()),re=l.a.div(Gt()),ce=l.a.div(qt()),ae=l.a.input(Xt()),ie=l.a.textarea(Vt()),oe=l.a.div(Ht()),ue=Object(l.a)(jn)(Yt());function se(){var n=Object(s.h)().id,t=Object(b.c)(S),e=Object(c.useState)(""),a=Object(nt.a)(e,2),i=a[0],o=a[1],u=Object(c.useState)(""),l=Object(nt.a)(u,2),j=l[0],d=l[1],f=Object(b.b)(),p=Object(s.g)(),x=Object(b.c)(On),O=function(){return f(wn(null))},h=function(n){return function(t){return n(t.target.value)}};return Object(c.useEffect)((function(){f(In(n)).then((function(n){if(n.userId!==t)return p("/react-blog/");o(n.title),d(n.body)}))}),[f,p,n,t]),Object(r.jsx)(ne,{children:Object(r.jsxs)(et,{onSubmit:function(t){if(t.preventDefault(),!i||!j||""===i.trim()||""===j.trim())return f(wn("\u4e0d\u80fd\u7a7a\u767d\u54e6"));f(Cn({id:n,title:i,body:j})),p("/react-blog/post/"+n)},$width:460,$paddingType:"post",children:[Object(r.jsx)(te,{children:Object(r.jsxs)(ee,{children:["\u7de8\u8f2f\u6587\u7ae0 #",n]})}),Object(r.jsxs)(re,{children:[Object(r.jsx)(ce,{children:"\u6a19\u984c\uff1a"}),Object(r.jsx)(ae,{value:i,onChange:h(o),onFocus:O})]}),Object(r.jsxs)(re,{children:[Object(r.jsx)(ce,{children:"\u5167\u5bb9\uff1a"}),Object(r.jsx)(ie,{value:j,onChange:h(d),onFocus:O})]}),Object(r.jsx)(ue,{children:"\u9001\u51fa\u6587\u7ae0"}),x&&Object(r.jsx)(oe,{children:x})]})})}function le(){var n=Object(o.a)(["\n  margin: 0 10vw;\n  min-height: calc(100vh - 123px);\n"]);return le=function(){return n},n}var be=l.a.div(le());function je(){var n=Object(s.h)().id,t=Object(b.b)(),e=Object(b.c)(xn),a=Object(b.c)(fn);return Object(c.useEffect)((function(){return t(In(n))}),[t,n]),Object(r.jsx)(be,{children:!e&&a?Object(r.jsx)(Zn,{post:a}):Object(r.jsx)(Vn,{})})}function de(){var n=Object(o.a)(["\n  margin-bottom: 10px;\n"]);return de=function(){return n},n}function fe(){var n=Object(o.a)(["\n  margin: 0 15px;\n"]);return fe=function(){return n},n}function pe(){var n=Object(o.a)(["\n  display: flex;\n"]);return pe=function(){return n},n}function xe(){var n=Object(o.a)(["\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return xe=function(){return n},n}var Oe=l.a.div(xe()),he=l.a.div(pe()),ge=l.a.a(fe()),me=l.a.div(de());function ve(n){var t=n.pagination,e=n.limit,c=n.totalPostsNumber,a=n.currentPage,i=n.setCurrentPage,o=Object(b.b)(),u=function(n){return function(){o(Sn(n,e)),i(n)}};return Object(r.jsxs)(Oe,{children:[Object(r.jsx)(me,{children:"\u5171\u6709 ".concat(c," \u7bc7\u6587\u7ae0\uff0c\u76ee\u524d\u5728\u7b2c ").concat(a," \u9801")}),Object(r.jsx)(he,{children:t.map((function(n){return Object(r.jsx)(ge,{onClick:u(n),children:n},n)}))})]})}function ye(){var n=Object(o.a)(["\n  color: #707070;\n"]);return ye=function(){return n},n}function we(){var n=Object(o.a)(["\n  font-size: 20px;\n  "," {\n    padding-bottom: 10px;\n  }\n"]);return we=function(){return n},n}function ke(){var n=Object(o.a)(["\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 20px;\n  display: flex;\n  algin-items: flex-end;\n  justify-content: space-between;\n  flex-direction: column;\n  "," {\n    flex-direction: row;\n  }\n"]);return ke=function(){return n},n}function Ee(){var n=Object(o.a)(["\n  min-height: 90vh;\n  margin-top: 20px;\n  margin: 45px 10vw;\n  "," {\n    margin: 0 10vw;\n  }\n"]);return Ee=function(){return n},n}var Se=l.a.div(Ee(),j),Ie=l.a.div(ke(),j),Pe=Object(l.a)(u.b)(we(),j),Ce=l.a.div(ye());function Ne(n){var t=n.post;return Object(r.jsxs)(Ie,{children:[Object(r.jsxs)(Pe,{to:"/react-blog/post/".concat(t.id),children:[t.user.nickname.length>10?"[".concat(t.user.nickname.slice(0,9),"...\u7684\u6587\u7ae0] "):"[".concat(t.user.nickname,"\u7684\u6587\u7ae0] "),t.title.length>20?"".concat(t.title.slice(0,20),"..."):"".concat(t.title)]}),Object(r.jsx)(Ce,{children:new Date(t.createdAt).toLocaleString()})]})}function ze(){var n=Object(c.useState)([]),t=Object(nt.a)(n,2),e=t[0],a=t[1],i=Object(c.useRef)(),o=Object(b.b)(),u=Object(b.c)(xn),s=Object(b.c)(pn),l=Object(b.c)(hn),j=Object(c.useState)(1),d=Object(nt.a)(j,2),f=d[0],p=d[1];return Object(c.useEffect)((function(){o(Sn(1,5)),i.current=Math.ceil(l/5),a(Array.from({length:i.current}).map((function(n,t){return t+1})))}),[o,l]),Object(r.jsx)(Se,{children:u?Object(r.jsx)(Vn,{}):Object(r.jsxs)(r.Fragment,{children:[s[0]&&s.map((function(n){return Object(r.jsx)(Ne,{post:n},n.id)})),Object(r.jsx)(ve,{totalPostsNumber:l,pagination:e,limit:5,getData:Sn,setValue:vn,currentPage:f,setCurrentPage:p})]})})}function Me(){var n=Object(o.a)(["\n  margin: 10px auto;\n"]);return Me=function(){return n},n}function Te(){var n=Object(o.a)(["\n  margin: 40px auto;\n  color: #909090;\n"]);return Te=function(){return n},n}function Fe(){var n=Object(o.a)(["\n  font-size: 24px;\n"]);return Fe=function(){return n},n}function Le(){var n=Object(o.a)(["\n  margin: 0 10vw;\n  min-height: calc(100vh - 143px);\n"]);return Le=function(){return n},n}var Ae=l.a.div(Le()),$e=l.a.h1(Fe()),Re=l.a.div(Te()),Ue=Object(l.a)(jn)(Me());function Be(){var n=Object(s.g)(),t=Object(b.b)(),e=Object(c.useState)(""),a=Object(nt.a)(e,2),i=a[0],o=a[1],u=Object(c.useState)(""),l=Object(nt.a)(u,2),j=l[0],d=l[1],x=Object(c.useState)(""),O=Object(nt.a)(x,2),h=O[0],g=O[1],m=Object(c.useState)(!1),v=Object(nt.a)(m,2),y=v[0],w=v[1],E=Object(b.c)(I),S=Object(b.c)(P),C=function(){return t(M(null))},z=function(n){return function(t){return n(t.target.value)}};return Object(c.useEffect)((function(){return function(){return t(M(null))}}),[t]),Object(r.jsx)(Ae,{children:Object(r.jsxs)(et,{onSubmit:function(e){var r;e.preventDefault(),t((r={nickname:i,username:j,password:h},function(){var n=Object(p.a)(f.a.mark((function n(t){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(N(!0)),n.next=3,k(r).then((function(n){return T(n,t)}));case 3:return n.abrupt("return",t(F()));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())).then((function(t){t&&n("/react-blog")}))},$width:360,children:[Object(r.jsx)($e,{children:"\u8a3b\u518a\u65b0\u5e33\u865f"}),Object(r.jsx)(ot,{type:"text",title:"\u66b1\u7a31\uff1a",value:i,handleInputFocus:C,handleInputChange:z(o)}),Object(r.jsx)(ot,{type:"text",title:"\u5e33\u865f\uff1a",value:j,handleInputFocus:C,handleInputChange:z(d)}),Object(r.jsx)(ot,{type:y?"text":"password",title:"\u5bc6\u78bc\uff1a",value:h,handleInputFocus:C,handleInputChange:z(g)}),Object(r.jsx)(jt,{togglePassword:function(){return w(!y)}}),E?Object(r.jsx)(Re,{children:"Loading..."}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ft,{errorMessage:S,$height:35,children:S}),Object(r.jsx)(Ue,{children:"\u8a3b\u518a"})]})]})})}function De(){var n=Object(o.a)(["\n  background: rgb(49 49 49);\n  padding: 6px 0;\n  width: 100%;\n  color: whitesmoke;\n  text-align: center;\n"]);return De=function(){return n},n}function _e(){var n=Object(o.a)(["\n  padding-top: 84px;\n  height: 100%;\n"]);return _e=function(){return n},n}var Je=l.a.div(_e()),Ze=l.a.div(De());var Ye=function(){var n=Object(b.b)();return Object(c.useEffect)((function(){n(F())}),[n]),Object(r.jsx)(Je,{children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(H,{}),Object(r.jsxs)(s.c,{basename:"/react-blog",children:[Object(r.jsx)(s.a,{path:"/",element:Object(r.jsx)(Wn,{})}),Object(r.jsx)(s.a,{path:"/register",element:Object(r.jsx)(Be,{})}),Object(r.jsx)(s.a,{path:"/login",element:Object(r.jsx)(wt,{})}),Object(r.jsx)(s.a,{path:"/posts",element:Object(r.jsx)(ze,{})}),Object(r.jsx)(s.a,{path:"/post/:id",element:Object(r.jsx)(je,{})}),Object(r.jsx)(s.a,{path:"/post/edit/:id",element:Object(r.jsx)(se,{})}),Object(r.jsx)(s.a,{path:"/new-post",element:Object(r.jsx)(Zt,{})}),Object(r.jsx)(s.a,{path:"/about-me",element:Object(r.jsx)(ln,{})})]}),Object(r.jsx)(Ze,{children:"Made with \u2764\ufe0f by Nicolas"})]})})},He=Object(x.a)({reducer:{posts:zn,user:L}});e(36),e(37);i.a.render(Object(r.jsx)(b.a,{store:He,children:Object(r.jsx)(Ye,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.60422ea6.chunk.js.map