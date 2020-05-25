(this["webpackJsonprecipe-react-app"]=this["webpackJsonprecipe-react-app"]||[]).push([[0],{24:function(e,t,a){e.exports=a(41)},29:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),u=a.n(r),o=(a(29),a(8)),i=a.n(o),l=a(12),s=a(3),p=function(e){var t=e.inputValue,a=e.userInput,n=e.handleSubmit;return c.a.createElement("form",{onSubmit:function(e){return n(e)},action:"search-recipes"},c.a.createElement("input",{onChange:a,value:t,type:"text"}),c.a.createElement("input",{className:"search-bar",type:"submit",value:"Search"}))},m=a(5),f=function(e){e.data;var t=Object(n.useState)(""),a=Object(s.a)(t,2);a[0],a[1]},b="72a819a56a534035a421ce5497089e8a",h=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],u=Object(n.useState)(""),o=Object(s.a)(u,2),m=o[0],h=o[1],E=Object(n.useState)(!1),O=Object(s.a)(E,2),j=O[0],v=O[1],d=Object(n.useState)(""),g=Object(s.a)(d,2),S=g[0],w=g[1],x=Object(n.useState)(null),y=Object(s.a)(x,2),k=y[0],I=y[1],N=Object(n.useState)(""),A=Object(s.a)(N,2),B=A[0],C=A[1];return Object(n.useEffect)((function(){I("https://api.spoonacular.com/recipes/findByIngredients?ingredients=".concat(m,"&apiKey=").concat(b))}),[m]),Object(n.useEffect)((function(){k&&function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,fetch(k).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);console.log(t),w(t),v(!1),I("")}));case 4:e.next=12;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0),C(e.t0),alert(B),v(!1);case 12:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}()()}),[k]),c.a.createElement("div",{className:"wrapper"},c.a.createElement(p,{handleSubmit:function(e){e.preventDefault(),a?h(a):alert("type something in first")},inputValue:a,userInput:function(e){r(e.target.value)}}),j?c.a.createElement("p",null,"Loading..."):c.a.createElement(f,{isLoading:j,data:S}))},E=a(2),O=function(){return c.a.createElement("div",{className:"nav-bar"},c.a.createElement(m.c,{to:"/"},"Home"),c.a.createElement(m.c,{to:"/about"},"About"),c.a.createElement(m.c,{to:"/contact"},"Contact"),c.a.createElement(m.c,{to:"/login"},"Login"))},j=function(){return c.a.createElement("div",null,"This is about me")},v=function(e){var t=e.steps,a=Object(n.useState)([]),r=Object(s.a)(a,2);r[0],r[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"These are the steps"),t)},d=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],u=a[1],o=Object(n.useState)(""),p=Object(s.a)(o,2),f=p[0],h=p[1],E=Object(n.useState)(),O=Object(s.a)(E,2),j=O[0],d=O[1],g=Object(n.useState)([]),S=Object(s.a)(g,2),w=S[0],x=S[1],y=e.match,k=e.location.state;return Object(n.useEffect)((function(){u(y.params.id),h("https://api.spoonacular.com/recipes/".concat(r,"/analyzedInstructions?apiKey=").concat(b))}),[y.params.id,r]),Object(n.useEffect)((function(){f&&function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(f).then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);console.log(t),d(t),h("")}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()()}),[f]),Object(n.useEffect)((function(){if(j)for(var e=function(e){for(var t=j[e].steps,a=function(e){x((function(a){return[a,c.a.createElement("li",null,"".concat(e+1,". ")+t[e].step)]}))},n=0;n<t.length;n++)a(n)},t=0;t<j.length;t++)e(t)}),[j]),c.a.createElement("div",{className:"wrapper recipe-page"},c.a.createElement("h2",null,k.title),c.a.createElement("img",{src:k.image,alt:k.title}),c.a.createElement("p",null,"This will be a single recipe page"),c.a.createElement(v,{steps:w}),c.a.createElement(m.b,{to:"/"},"Go Home"))},g=a(10),S=a.n(g);a(35),a(42),a(38);S.a.initializeApp({apiKey:"AIzaSyAa_C4PGmQf-ZKXignqpOpS16WVhEO_f34",authDomain:"auth-react-1f57a.firebaseapp.com",databaseURL:"https://auth-react-1f57a.firebaseio.com",projectId:"auth-react-1f57a",storageBucket:"auth-react-1f57a.appspot.com",messagingSenderId:"671523696048",appId:"1:671523696048:web:695912e73d24578316ba75"});S.a.storage(),S.a.auth();var w=c.a.createContext(),x=(S.a.auth(),function(e){e.userSetup}),y=function(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),r=a[0],u=a[1],o=Object(n.useState)(null),i=Object(s.a)(o,2),l=(i[0],i[1]),p=Object(n.useState)(null),m=Object(s.a)(p,2),f=(m[0],m[1]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(w.Provider,{value:r},r?c.a.createElement("p",null,"Welcome!"):c.a.createElement(x,{userSetup:function(e,t,a){u(e),l(t),f(a)}})))};a(40);var k=function(){return c.a.createElement(m.a,null,c.a.createElement(O,null),c.a.createElement(E.c,null,c.a.createElement(E.a,{path:"/",component:h,exact:!0}),c.a.createElement(E.a,{path:"/about",component:j,exact:!0}),c.a.createElement(E.a,{path:"/recipes/:id",component:d}),c.a.createElement(E.a,{path:"/login",render:function(e){return c.a.createElement(y,e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.d9897087.chunk.js.map