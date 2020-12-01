(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{36:function(n,t,e){},37:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),a=e(15),i=e.n(a),o=e(2),u=e(7),s=e(5),b=e(3),l=e(4),j="@media screen and (min-width: 768px)",d="@media screen and (min-width: 1024px)",f=e(10),p=e.n(f),x=e(14),O=e(12),h="token",g=function(n){return localStorage.setItem(h,n)},m=function(){return localStorage.getItem(h)},v="https://student-json-api.lidemy.me",y=function(){return fetch("".concat(v,"/posts?_sort=createdAt&_order=desc")).then((function(n){return n.json()}))},w=function(n,t){return fetch("".concat(v,"/posts?_page=").concat(n,"&_limit=").concat(t,"&_sort=createdAt&_order=desc&_expand=user")).then((function(n){return n.json()}))},k=function(n){var t=n.username,e=n.password;return fetch("".concat(v,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:e})}).then((function(n){return n.json()}))},E=function(n){var t=n.nickname,e=n.username,r=n.password;return fetch("".concat(v,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:t,username:e,password:r})}).then((function(n){return n.json()}))},S=Object(O.b)({name:"user",initialState:{userId:null,userErrorMessage:null,isUserLoading:!1},reducers:{setIsUserLoading:function(n,t){n.isUserLoading=t.payload},setUserId:function(n,t){n.userId=t.payload},setUserErrorMessage:function(n,t){n.userErrorMessage=t.payload}}}),I=function(n){return n.user.userId},C=function(n){return n.user.isUserLoading},P=function(n){return n.user.userErrorMessage},N=S.actions,z=N.setIsUserLoading,F=N.setUserId,M=N.setUserErrorMessage,T=function(n,t){if(1===n.ok)return g(n.token);console.log(n),t(M(n.message))},L=function(){return function(n){if(n(z(!0)),m())return function(){var n=m();return fetch("".concat(v,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))}().then((function(t){if(n(z(!1)),1===t.ok)return n(F(t.data.id)),t.data.id;g(null)}));n(z(!1))}},$=S.reducer;function R(){var n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  margin:  0 6px;\n  "," {\n    margin: 0 30px;\n  }\n  height: 64px;\n"]);return R=function(){return n},n}function A(){var n=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  margin:  0 6px;\n  "," {\n    margin: 0 30px;\n  }\n  height: 64px;\n"]);return A=function(){return n},n}function U(){var n=Object(o.a)(["\n  font-size: 32px;\n  color: #017a75;\n  margin-top: 10px;\n  "," {\n    margin-top: 0px\n  }\n"]);return U=function(){return n},n}function B(){var n=Object(o.a)(["\n  display: flex;\n"]);return B=function(){return n},n}function D(){var n=Object(o.a)(["\n  height: 100px;\n  "," {\n    height: 64px;\n  }\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);\n  padding: 0px 5vw;\n  background: white;\n  flex-direction: column;\n  "," {\n    flex-direction: row;\n  }\n"]);return D=function(){return n},n}var _=b.a.div(D(),d,d),J=b.a.div(B()),Z=Object(b.a)(u.b)(U(),d),H=Object(b.a)(u.c)(A(),d),Y=b.a.a(R(),d);function V(){var n=Object(l.b)(),t=Object(s.g)(),e=Object(l.c)(I),c=Object(l.c)(C);return Object(r.jsxs)(_,{children:[Object(r.jsx)(Z,{to:"/react-blog",children:"React Blog"}),Object(r.jsxs)(J,{children:[Object(r.jsx)(H,{to:"/react-blog/about-me",children:"\u95dc\u65bc\u6211"}),Object(r.jsx)(H,{to:"/react-blog/posts",children:"\u6587\u7ae0\u5217\u8868"}),c?Object(r.jsx)(H,{to:"/",children:"\u6aa2\u67e5\u767b\u5165\u8cc7\u8a0a\u4e2d"}):Object(r.jsxs)(r.Fragment,{children:[e&&Object(r.jsx)(H,{to:"/react-blog/new-post",children:"\u767c\u8868\u6587\u7ae0"}),e&&Object(r.jsx)(Y,{onClick:function(){n((function(n){g(""),n(F(null)),alert("\u767b\u51fa\u6210\u529f")})),t("/react-blog")},children:"\u767b\u51fa"}),!e&&Object(r.jsx)(H,{to:"/react-blog/login",children:"\u767b\u5165"}),!e&&Object(r.jsx)(H,{to:"/react-blog/register",children:"\u8a3b\u518a"})]})]})]})}function q(){return(q=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function G(n,t){if(null==n)return{};var e,r,c=function(n,t){if(null==n)return{};var e,r,c={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(c[e]=n[e]);return c}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(c[e]=n[e])}return c}var K=c.createElement("g",null,c.createElement("circle",{cx:60,cy:50,r:4,fill:"#d7adb0"},c.createElement("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",values:"95;35",keyTimes:"0;1",begin:"-0.67s"}),c.createElement("animate",{attributeName:"fill-opacity",repeatCount:"indefinite",dur:"1s",values:"0;1;1",keyTimes:"0;0.2;1",begin:"-0.67s"})),c.createElement("circle",{cx:60,cy:50,r:4,fill:"#d7adb0"},c.createElement("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",values:"95;35",keyTimes:"0;1",begin:"-0.33s"}),c.createElement("animate",{attributeName:"fill-opacity",repeatCount:"indefinite",dur:"1s",values:"0;1;1",keyTimes:"0;0.2;1",begin:"-0.33s"})),c.createElement("circle",{cx:60,cy:50,r:4,fill:"#d7adb0"},c.createElement("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",values:"95;35",keyTimes:"0;1",begin:"0s"}),c.createElement("animate",{attributeName:"fill-opacity",repeatCount:"indefinite",dur:"1s",values:"0;1;1",keyTimes:"0;0.2;1",begin:"0s"}))),Q=c.createElement("g",{transform:"translate(-15 0)"},c.createElement("path",{d:"M50 50L20 50A30 30 0 0 0 80 50Z",fill:"#d7d3d0",transform:"rotate(90 50 50)"}),c.createElement("path",{d:"M50 50L20 50A30 30 0 0 0 80 50Z",fill:"#d7d3d0"},c.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;45 50 50;0 50 50",keyTimes:"0;0.5;1"})),c.createElement("path",{d:"M50 50L20 50A30 30 0 0 1 80 50Z",fill:"#d7d3d0"},c.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;-45 50 50;0 50 50",keyTimes:"0;0.5;1"})));function W(n,t){var e=n.title,r=n.titleId,a=G(n,["title","titleId"]);return c.createElement("svg",q({style:{margin:"auto",background:"none",display:"block",shapeRendering:"auto"},width:"136px",height:"136px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":r},a),e?c.createElement("title",{id:r},e):null,K,Q)}var X=c.forwardRef(W);e.p;function nn(){var n=Object(o.a)(["\n  display: flex\n  justify-content: center;\n"]);return nn=function(){return n},n}function tn(){var n=Object(o.a)(["\n  font-size: 36px;\n"]);return tn=function(){return n},n}function en(){var n=Object(o.a)(["\n  max-width: 600px;\n  height: 400px;\n  margin: 50px auto 0;\n  padding: 20px;\n  background: rgba(210, 210, 210, 0.4);\n  text-align: center;\n  transition: all linear 0.2s;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\n  &:hover {\n    transition: all linear 0.2s;\n    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.5);\n  }\n"]);return en=function(){return n},n}function rn(){var n=Object(o.a)(["\n  margin: 0 10vw;\n  height: calc(100vh - 133px);\n"]);return rn=function(){return n},n}var cn=b.a.div(rn()),an=b.a.div(en()),on=b.a.h1(tn()),un=b.a.div(nn());function sn(){return Object(r.jsx)(cn,{children:Object(r.jsxs)(an,{children:[Object(r.jsx)(on,{children:"A Simple Blog"}),Object(r.jsxs)(un,{children:["\u9019\u662f React SPA \u90e8\u843d\u683c\u7df4\u7fd2\uff5e",Object(r.jsx)("br",{}),"\u4f7f\u7528 React Hooks, Styled Components, React Router 6",Object(r.jsx)(X,{})]})]})})}function bn(){var n=Object(o.a)(["\n  padding-top: 150px;\n  margin: 0 auto;\n  text-align: center;\n"]);return bn=function(){return n},n}var ln=b.a.div(bn());function jn(){return Object(r.jsx)(ln,{children:Object(r.jsx)(X,{})})}function dn(){var n=Object(o.a)(["\n  padding: 5px 10px;\n  border-radius: 10px;\n  border: transparent;\n  background: #909090;\n  color: white;\n  outline: none;\n  cursor: pointer;\n  font-size: 16px;\n  box-shadow: 0px 5px 2px #707070;\n  &:active {\n    transform: translateY(2px);\n    box-shadow: 0px 3px 2px #888888;\n  }\n"]);return dn=function(){return n},n}var fn=b.a.button(dn()),pn=Object(O.b)({name:"posts",initialState:{isLoading:!1,totalPostNumber:null,posts:[],post:null,newPostResponse:null,errorMessage:null},reducers:{setIsLoading:function(n,t){n.isLoading=t.payload},setPost:function(n,t){n.post=t.payload},setTotalPostsNumber:function(n,t){n.totalPostNumber=t.payload.length},setPosts:function(n,t){n.posts=t.payload},setNewPostResponse:function(n,t){n.newPostResponse=t.payload},setErrorMessage:function(n,t){n.errorMessage=t.payload}}}),xn=function(n){return n.posts.post},On=function(n){return n.posts.posts},hn=function(n){return n.posts.isLoading},gn=function(n){return n.posts.errorMessage},mn=function(n){return n.posts.totalPostNumber},vn=pn.actions,yn=vn.setPost,wn=vn.setPosts,kn=vn.setIsLoading,En=vn.setErrorMessage,Sn=vn.setTotalPostsNumber,In=vn.setNewPostResponse,Cn=function(n,t){return function(){var e=Object(x.a)(p.a.mark((function e(r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(kn(!0)),e.next=3,y().then((function(n){return r(Sn(n))}));case 3:w(n,t).then((function(n){r(wn(n)),r(kn(!1))}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},Pn=function(n){return function(t){return t(kn(!0)),function(n){return fetch("".concat(v,"/posts?id=").concat(n,"&_expand=user")).then((function(n){return n.json()}))}(n).then((function(n){return t(yn(n[0])),t(kn(!1)),n[0]}))}},Nn=function(n){return function(t){return t(kn(!0)),function(n){var t=n.title,e=n.body,r=m();return fetch("".concat(v,"/posts"),{method:"POST",headers:{authorization:"Bearer ".concat(r),"content-type":"application/json"},body:JSON.stringify({title:t,body:e})}).then((function(n){return n.json()}))}(n).then((function(n){return t(In(n)),t(kn(!1)),n}))}},zn=function(n){return function(){return function(n){var t=n.title,e=n.body,r=n.id,c=m();return fetch("".concat(v,"/posts/").concat(r),{method:"PATCH",headers:{authorization:"Bearer ".concat(c),"content-type":"application/json"},body:JSON.stringify({title:t,body:e})}).then((function(n){return n.json()}))}(n)}},Fn=function(n){return function(){return function(n){var t=m();return fetch("".concat(v,"/posts/").concat(n),{method:"DELETE",headers:{authorization:"Bearer ".concat(t)}}).then((function(n){return n.json()}))}(n).then((function(n){return n}))}},Mn=pn.reducer;function Tn(){var n=Object(o.a)(["\n  margin: 10px 20px 10px 0px;\n"]);return Tn=function(){return n},n}function Ln(){var n=Object(o.a)(["\n  padding-bottom: 10px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n"]);return Ln=function(){return n},n}function $n(){var n=Object(o.a)(["\n  margin-top: 20px;\n  word-break: break-all;\n"]);return $n=function(){return n},n}function Rn(){var n=Object(o.a)(["\n  color: #707070;\n"]);return Rn=function(){return n},n}function An(){var n=Object(o.a)(["\n  font-size: 24px;\n  word-break: break-all;\n"]);return An=function(){return n},n}function Un(){var n=Object(o.a)(["\n  padding: 20px;\n  margin: 10px 0;\n  justify-content: space-between;\n"]);return Un=function(){return n},n}var Bn=b.a.div(Un()),Dn=b.a.h2(An()),_n=b.a.div(Rn()),Jn=b.a.div($n()),Zn=b.a.div(Ln()),Hn=Object(b.a)(fn)(Tn());function Yn(n){var t,e,c=n.post,a=Object(l.c)(I),i=Object(l.b)(),o=Object(s.g)();return Object(r.jsxs)(Bn,{children:[Object(r.jsxs)(Dn,{children:[a===c.userId?"[\u6211\u7684\u6587\u7ae0] ":"[".concat(c.user.nickname,"\u7684\u6587\u7ae0] "),c.title]}),Object(r.jsxs)(Zn,{children:[Object(r.jsx)(_n,{children:new Date(c.createdAt).toLocaleString()}),a===c.userId?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Hn,{onClick:(e=c.id,function(){return o("/react-blog/post/edit/".concat(e))}),children:"\u7de8\u8f2f"}),Object(r.jsx)(Hn,{onClick:(t=c.id,function(){return i(Fn(t)).then((function(n){0!==n.ok&&(i(Cn(1,5)),o("/react-blog"))}))}),children:" \u522a\u9664"})]}):null]}),Object(r.jsx)(Jn,{children:c.body})]})}function Vn(){var n=Object(o.a)(["\n  margin-bottom: 0;\n"]);return Vn=function(){return n},n}function qn(){var n=Object(o.a)(["\n  margin: 0 10vw;\n  min-height: calc(100vh - 123px);\n"]);return qn=function(){return n},n}var Gn=b.a.div(qn()),Kn=b.a.h1(Vn()),Qn=function(n){return n.posts.slice(0,5).map((function(n){return Object(r.jsx)(Yn,{post:n},n.id)}))};function Wn(){var n=Object(l.b)(),t=Object(l.c)(hn),e=Object(l.c)(On);return Object(c.useEffect)((function(){return n(Cn(1,5))}),[n]),Object(r.jsx)(Gn,{children:t?Object(r.jsx)(jn,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Kn,{children:"\u6700\u65b0\u6587\u7ae0"}),Object(r.jsx)(Qn,{posts:e})]})})}var Xn=e(6);function nt(){var n=Object(o.a)(["\n  height: ","px;\n  max-width: ","px;\n  margin: 20px auto 0;\n  padding: ",";\n  background: whitesmoke;\n  transition: all linear 0.2s;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\n  &:hover {\n    transition: all linear 0.2s;\n    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.5);\n  }\n"]);return nt=function(){return n},n}var tt=b.a.form(nt(),(function(n){return n.$height}),(function(n){return n.$width}),(function(n){return"post"===n.$paddingType?"10px 30px 30px 30px":"20px"}));function et(){var n=Object(o.a)(["\n  border: none;\n  outline: none;\n  padding: 5px 10px;\n  border-bottom: 1px solid #909090;\n  background: transparent;\n  letter-spacing: 5px;\n  color: #808080;\n  font-size: 16px;\n"]);return et=function(){return n},n}function rt(){var n=Object(o.a)(["\n  margin: 20px 0;\n"]);return rt=function(){return n},n}var ct=b.a.div(rt()),at=b.a.input(et());function it(n){var t=n.type,e=n.value,c=n.title,a=n.handleInputFocus,i=n.handleInputChange;return Object(r.jsxs)(ct,{children:[c,Object(r.jsx)(at,{type:t,value:e,onFocus:a,onChange:i})]})}function ot(){var n=Object(o.a)(["\n  color: red;\n  margin: 10px 0;\n  height: ","px;\n  display: ",";\n"]);return ot=function(){return n},n}var ut=b.a.div(ot(),(function(n){return n.$height}),(function(n){return n.errorMessage?"1":"hidden"}));function st(){var n=Object(o.a)(["\n  margin: 10px auto;\n"]);return st=function(){return n},n}function bt(){var n=Object(o.a)(["\n  margin: 40px auto;\n  color: #909090;\n"]);return bt=function(){return n},n}function lt(){var n=Object(o.a)(["\n  margin-top: 20px;\n"]);return lt=function(){return n},n}function jt(){var n=Object(o.a)(["\n  font-size: 24px;\n"]);return jt=function(){return n},n}function dt(){var n=Object(o.a)(["\n  margin: 0 10vw;\n  min-height: calc(100vh - 143px);\n"]);return dt=function(){return n},n}var ft=b.a.div(dt()),pt=b.a.h1(jt()),xt=b.a.div(lt()),Ot=b.a.div(bt()),ht=Object(b.a)(fn)(st());function gt(){var n=Object(l.b)(),t=Object(s.g)(),e=Object(c.useState)(""),a=Object(Xn.a)(e,2),i=a[0],o=a[1],u=Object(c.useState)(""),b=Object(Xn.a)(u,2),j=b[0],d=b[1],f=Object(c.useState)(!1),O=Object(Xn.a)(f,2),h=O[0],g=O[1],m=Object(l.c)(P),v=Object(l.c)(C),y=function(){return n(M(null))},w=function(n){return function(t){return n(t.target.value)}};return Object(c.useEffect)((function(){return function(){return n(M(null))}}),[n]),Object(r.jsx)(ft,{children:Object(r.jsxs)(tt,{onSubmit:function(e){var r;e.preventDefault(),n((r={username:i,password:j},function(){var n=Object(x.a)(p.a.mark((function n(t){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(z(!0)),n.next=3,k(r).then((function(n){return T(n,t)}));case 3:return n.abrupt("return",t(L()));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())).then((function(n){n&&t("/react-blog")}))},$height:290,$width:350,children:[Object(r.jsx)(pt,{children:"\u8acb\u767b\u5165\u90e8\u843d\u683c"}),Object(r.jsx)(it,{type:"text",title:"\u5e33\u865f\uff1a",value:i,handleInputFocus:y,handleInputChange:w(o)}),Object(r.jsx)(it,{type:h?"text":"password",title:"\u5bc6\u78bc\uff1a",value:j,handleInputFocus:y,handleInputChange:w(d)}),Object(r.jsxs)(xt,{children:[Object(r.jsx)("input",{type:"checkbox",onClick:function(){return g(!h)},id:"password"}),Object(r.jsx)("label",{htmlFor:"password",children:"\u986f\u793a\u5bc6\u78bc "})]}),v?Object(r.jsx)(Ot,{children:"Loading..."}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ut,{errorMessage:m,$height:15,children:m}),Object(r.jsx)(ht,{children:"\u767b\u5165"})]})]})})}function mt(){var n=Object(o.a)(["\n  margin: 10px auto;\n"]);return mt=function(){return n},n}function vt(){var n=Object(o.a)(["\n  margin: 20px 0 10px 0;\n  color: #909090;\n"]);return vt=function(){return n},n}function yt(){var n=Object(o.a)(["\n  color: red;\n  font-size: 16px;\n"]);return yt=function(){return n},n}function wt(){var n=Object(o.a)(["\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #808080;\n  outline: none;\n  height: 150px;\n  font-size: 16px;\n"]);return wt=function(){return n},n}function kt(){var n=Object(o.a)(["\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #808080;\n  outline: none;\n  font-size: 16px;\n"]);return kt=function(){return n},n}function Et(){var n=Object(o.a)(["\n  margin-bottom: 10px;\n"]);return Et=function(){return n},n}function St(){var n=Object(o.a)(["\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n"]);return St=function(){return n},n}function It(){var n=Object(o.a)(["\n  font-size: 28px;\n  margin: 0px;\n"]);return It=function(){return n},n}function Ct(){var n=Object(o.a)(["\n  margin-bottom: 10px;\n  text-align: center;\n"]);return Ct=function(){return n},n}function Pt(){var n=Object(o.a)(["\n  margin-top: 30px;\n  min-height: calc(100vh - 143px);\n"]);return Pt=function(){return n},n}var Nt=b.a.div(Pt()),zt=b.a.div(Ct()),Ft=b.a.h1(It()),Mt=b.a.div(St()),Tt=b.a.div(Et()),Lt=b.a.input(kt()),$t=b.a.textarea(wt()),Rt=b.a.div(yt()),At=b.a.div(vt()),Ut=Object(b.a)(fn)(mt());function Bt(){var n=Object(c.useState)(""),t=Object(Xn.a)(n,2),e=t[0],a=t[1],i=Object(c.useState)(""),o=Object(Xn.a)(i,2),u=o[0],b=o[1],j=Object(l.b)(),d=Object(s.g)(),f=Object(l.c)(gn),p=Object(l.c)(hn),x=Object(l.c)(I),O=function(){return j(En(null))},h=function(n){return function(t){return n(t.target.value)}};return Object(c.useEffect)((function(){x||d("/react-blog")}),[x,d]),Object(r.jsx)(Nt,{children:Object(r.jsxs)(tt,{onSubmit:function(n){n.preventDefault(),j(Nn({title:e,body:u})).then((function(n){if(!n.id)return j(En(n.message));d("/react-blog/post/"+n.id)}))},$height:390,$width:460,$paddingType:"post",children:[Object(r.jsx)(zt,{children:Object(r.jsx)(Ft,{children:"\u65b0\u6587\u7ae0"})}),Object(r.jsxs)(Mt,{children:[Object(r.jsx)(Tt,{children:"\u6a19\u984c\uff1a"}),Object(r.jsx)(Lt,{value:e,onChange:h(a),onFocus:O})]}),Object(r.jsxs)(Mt,{children:[Object(r.jsx)(Tt,{children:"\u5167\u5bb9\uff1a"}),Object(r.jsx)($t,{value:u,col:"20",onChange:h(b),onFocus:O})]}),p?Object(r.jsx)(At,{children:"Loading..."}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ut,{children:"\u9001\u51fa\u6587\u7ae0"}),f&&Object(r.jsx)(Rt,{children:f})]})]})})}function Dt(){var n=Object(o.a)(["\n  margin: 10px auto;\n"]);return Dt=function(){return n},n}function _t(){var n=Object(o.a)(["\n  color: red;\n  font-size: 16px;\n"]);return _t=function(){return n},n}function Jt(){var n=Object(o.a)(["\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #808080;\n  outline: none;\n  height: 150px;\n  font-size: 16px;\n"]);return Jt=function(){return n},n}function Zt(){var n=Object(o.a)(["\n  padding: 5px;\n  border-radius: 5px;\n  border: 1px solid #808080;\n  outline: none;\n  font-size: 16px;\n"]);return Zt=function(){return n},n}function Ht(){var n=Object(o.a)(["\n  margin-bottom: 10px;\n"]);return Ht=function(){return n},n}function Yt(){var n=Object(o.a)(["\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n"]);return Yt=function(){return n},n}function Vt(){var n=Object(o.a)(["\n  font-size: 28px;\n  margin: 0px;\n"]);return Vt=function(){return n},n}function qt(){var n=Object(o.a)(["\n  margin-bottom: 10px;\n  text-align: center;\n"]);return qt=function(){return n},n}function Gt(){var n=Object(o.a)(["\n  margin-top: 30px;\n  min-height: calc(100vh - 143px);\n"]);return Gt=function(){return n},n}var Kt=b.a.div(Gt()),Qt=b.a.div(qt()),Wt=b.a.h1(Vt()),Xt=b.a.div(Yt()),ne=b.a.div(Ht()),te=b.a.input(Zt()),ee=b.a.textarea(Jt()),re=b.a.div(_t()),ce=Object(b.a)(fn)(Dt());function ae(){var n=Object(s.h)().id,t=Object(l.c)(I),e=Object(c.useState)(""),a=Object(Xn.a)(e,2),i=a[0],o=a[1],u=Object(c.useState)(""),b=Object(Xn.a)(u,2),j=b[0],d=b[1],f=Object(l.b)(),p=Object(s.g)(),x=Object(l.c)(gn),O=function(){return f(En(null))},h=function(n){return function(t){return n(t.target.value)}};return Object(c.useEffect)((function(){f(Pn(n)).then((function(n){if(n.userId!==t)return p("/react-blog/");o(n.title),d(n.body)}))}),[f,p,n,t]),Object(r.jsx)(Kt,{children:Object(r.jsxs)(tt,{onSubmit:function(t){if(t.preventDefault(),!i||!j||""===i.trim()||""===j.trim())return f(En("\u4e0d\u80fd\u7a7a\u767d\u54e6"));f(zn({id:n,title:i,body:j})),p("/react-blog/post/"+n)},$height:390,$width:460,$paddingType:"post",children:[Object(r.jsx)(Qt,{children:Object(r.jsxs)(Wt,{children:["\u7de8\u8f2f\u6587\u7ae0 #",n]})}),Object(r.jsxs)(Xt,{children:[Object(r.jsx)(ne,{children:"\u6a19\u984c\uff1a"}),Object(r.jsx)(te,{value:i,onChange:h(o),onFocus:O})]}),Object(r.jsxs)(Xt,{children:[Object(r.jsx)(ne,{children:"\u5167\u5bb9\uff1a"}),Object(r.jsx)(ee,{value:j,col:"20",onChange:h(d),onFocus:O})]}),Object(r.jsx)(ce,{children:"\u9001\u51fa\u6587\u7ae0"}),x&&Object(r.jsx)(re,{children:x})]})})}function ie(){var n=Object(o.a)(["\n  margin: 0 10vw;\n  min-height: calc(100vh - 123px);\n"]);return ie=function(){return n},n}var oe=b.a.div(ie());function ue(){var n=Object(s.h)().id,t=Object(l.b)(),e=Object(l.c)(hn),a=Object(l.c)(xn);return Object(c.useEffect)((function(){return t(Pn(n))}),[t,n]),Object(r.jsx)(oe,{children:!e&&a?Object(r.jsx)(Yn,{post:a}):Object(r.jsx)(jn,{})})}function se(){var n=Object(o.a)(["\n  margin-bottom: 10px;\n"]);return se=function(){return n},n}function be(){var n=Object(o.a)(["\n  margin: 0 15px;\n"]);return be=function(){return n},n}function le(){var n=Object(o.a)(["\n  display: flex;\n"]);return le=function(){return n},n}function je(){var n=Object(o.a)(["\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return je=function(){return n},n}var de=b.a.div(je()),fe=b.a.div(le()),pe=b.a.a(be()),xe=b.a.div(se());function Oe(n){var t=n.pagination,e=n.limit,c=n.totalPostsNumber,a=n.currentPage,i=n.setCurrentPage,o=Object(l.b)(),u=function(n){return function(){o(Cn(n,e)),i(n)}};return Object(r.jsxs)(de,{children:[Object(r.jsx)(xe,{children:"\u5171\u6709 ".concat(c," \u7bc7\u6587\u7ae0\uff0c\u76ee\u524d\u5728\u7b2c ").concat(a," \u9801")}),Object(r.jsx)(fe,{children:t.map((function(n){return Object(r.jsx)(pe,{onClick:u(n),children:n},n)}))})]})}function he(){var n=Object(o.a)(["\n  color: #707070;\n"]);return he=function(){return n},n}function ge(){var n=Object(o.a)(["\n  font-size: 20px;\n  "," {\n    padding-bottom: 10px;\n  }\n"]);return ge=function(){return n},n}function me(){var n=Object(o.a)(["\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 20px;\n  display: flex;\n  algin-items: flex-end;\n  justify-content: space-between;\n  "," {\n    flex-direction: column;\n  }\n  "," {\n    flex-direction: row;\n  }\n"]);return me=function(){return n},n}function ve(){var n=Object(o.a)(["\n  min-height: 90vh;\n  margin-top: 20px;\n  margin: 45px 10vw;\n  "," {\n    margin: 0 10vw;\n  }\n"]);return ve=function(){return n},n}var ye=b.a.div(ve(),d),we=b.a.div(me(),j,d),ke=Object(b.a)(u.b)(ge(),j),Ee=b.a.div(he());function Se(n){var t=n.post;return Object(r.jsxs)(we,{children:[Object(r.jsxs)(ke,{to:"/react-blog/post/".concat(t.id),children:[t.user.nickname.length>10?"[".concat(t.user.nickname.slice(0,9),"...\u7684\u6587\u7ae0] "):"[".concat(t.user.nickname,"\u7684\u6587\u7ae0] "),t.title.length>20?"".concat(t.title.slice(0,20),"..."):"".concat(t.title)]}),Object(r.jsx)(Ee,{children:new Date(t.createdAt).toLocaleString()})]})}function Ie(){var n=Object(c.useState)([]),t=Object(Xn.a)(n,2),e=t[0],a=t[1],i=Object(c.useRef)(),o=Object(l.b)(),u=Object(l.c)(hn),s=Object(l.c)(On),b=Object(l.c)(mn),j=Object(c.useState)(1),d=Object(Xn.a)(j,2),f=d[0],p=d[1];return Object(c.useEffect)((function(){o(Cn(1,5)),i.current=Math.ceil(b/5),a(Array.from({length:i.current}).map((function(n,t){return t+1})))}),[o,b]),Object(r.jsx)(ye,{children:u?Object(r.jsx)(jn,{}):Object(r.jsxs)(r.Fragment,{children:[s[0]&&s.map((function(n){return Object(r.jsx)(Se,{post:n},n.id)})),Object(r.jsx)(Oe,{totalPostsNumber:b,pagination:e,limit:5,getData:Cn,setValue:wn,currentPage:f,setCurrentPage:p})]})})}function Ce(){var n=Object(o.a)(["\n  margin: 10px auto;\n"]);return Ce=function(){return n},n}function Pe(){var n=Object(o.a)(["\n  margin: 40px auto;\n  color: #909090;\n"]);return Pe=function(){return n},n}function Ne(){var n=Object(o.a)(["\n  margin-top: 20px;\n"]);return Ne=function(){return n},n}function ze(){var n=Object(o.a)(["\n  font-size: 24px;\n"]);return ze=function(){return n},n}function Fe(){var n=Object(o.a)(["\n  margin: 0 10vw;\n  min-height: calc(100vh - 143px);\n"]);return Fe=function(){return n},n}var Me=b.a.div(Fe()),Te=b.a.h1(ze()),Le=b.a.div(Ne()),$e=b.a.div(Pe()),Re=Object(b.a)(fn)(Ce());function Ae(){var n=Object(s.g)(),t=Object(l.b)(),e=Object(c.useState)(""),a=Object(Xn.a)(e,2),i=a[0],o=a[1],u=Object(c.useState)(""),b=Object(Xn.a)(u,2),j=b[0],d=b[1],f=Object(c.useState)(""),O=Object(Xn.a)(f,2),h=O[0],g=O[1],m=Object(c.useState)(!1),v=Object(Xn.a)(m,2),y=v[0],w=v[1],k=Object(l.c)(C),S=Object(l.c)(P),I=function(){return t(M(null))},N=function(n){return function(t){return n(t.target.value)}};return Object(c.useEffect)((function(){return function(){return t(M(null))}}),[t]),Object(r.jsx)(Me,{children:Object(r.jsxs)(tt,{onSubmit:function(e){var r;e.preventDefault(),t((r={nickname:i,username:j,password:h},function(){var n=Object(x.a)(p.a.mark((function n(t){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(z(!0)),n.next=3,E(r).then((function(n){return T(n,t)}));case 3:return n.abrupt("return",t(L()));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())).then((function(t){t&&n("/react-blog")}))},$height:360,$width:360,children:[Object(r.jsx)(Te,{children:"\u8a3b\u518a\u65b0\u5e33\u865f"}),Object(r.jsx)(it,{type:"text",title:"\u66b1\u7a31\uff1a",value:i,handleInputFocus:I,handleInputChange:N(o)}),Object(r.jsx)(it,{type:"text",title:"\u5e33\u865f\uff1a",value:j,handleInputFocus:I,handleInputChange:N(d)}),Object(r.jsx)(it,{type:y?"text":"password",title:"\u5bc6\u78bc\uff1a",value:h,handleInputFocus:I,handleInputChange:N(g)}),Object(r.jsxs)(Le,{children:[Object(r.jsx)("input",{type:"checkbox",onClick:function(){return w(!y)},id:"password"}),Object(r.jsx)("label",{htmlFor:"password",children:"\u986f\u793a\u5bc6\u78bc "})]}),k?Object(r.jsx)($e,{children:"Loading..."}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ut,{errorMessage:S,$height:35,children:S}),Object(r.jsx)(Re,{children:"\u8a3b\u518a"})]})]})})}function Ue(){var n=Object(o.a)(["\n  background: rgb(49 49 49);\n  padding: 6px 0;\n  width: 100%;\n  color: whitesmoke;\n  text-align: center;\n"]);return Ue=function(){return n},n}function Be(){var n=Object(o.a)(["\n  padding-top: 84px;\n  height: 100%;\n"]);return Be=function(){return n},n}var De=b.a.div(Be()),_e=b.a.div(Ue());var Je=function(){var n=Object(l.b)();return Object(c.useEffect)((function(){n(L())}),[n]),Object(r.jsx)(De,{children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(V,{}),Object(r.jsxs)(s.c,{basename:"/react-blog",children:[Object(r.jsx)(s.a,{path:"/",element:Object(r.jsx)(Wn,{})}),Object(r.jsx)(s.a,{path:"/register",element:Object(r.jsx)(Ae,{})}),Object(r.jsx)(s.a,{path:"/login",element:Object(r.jsx)(gt,{})}),Object(r.jsx)(s.a,{path:"/posts",element:Object(r.jsx)(Ie,{})}),Object(r.jsx)(s.a,{path:"/post/:id",element:Object(r.jsx)(ue,{})}),Object(r.jsx)(s.a,{path:"/post/edit/:id",element:Object(r.jsx)(ae,{})}),Object(r.jsx)(s.a,{path:"/new-post",element:Object(r.jsx)(Bt,{})}),Object(r.jsx)(s.a,{path:"/about-me",element:Object(r.jsx)(sn,{})})]}),Object(r.jsx)(_e,{children:"Made with \u2764\ufe0f by Nicolas"})]})})},Ze=Object(O.a)({reducer:{posts:Mn,user:$}});e(36);i.a.render(Object(r.jsx)(l.a,{store:Ze,children:Object(r.jsx)(Je,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.245e2747.chunk.js.map