(this.webpackJsonpmarckon=this.webpackJsonpmarckon||[]).push([[0],{26:function(e,t,n){e.exports=n.p+"static/media/banner.0ec55d2a.jpg"},29:function(e,t,n){e.exports=n(41)},34:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),c=n.n(o),i=(n(34),n(60)),l=n(66),u=n(67),s=n(62),d=n(63),f=n(65),m=n(24),p=n.n(m),v=n(25),b=n.n(v),w=n(15),h=new(n(64).a),g=function(){var e=Object(a.useState)(!1),t=Object(w.a)(e,2),n=t[0],r=t[1];return h.subscribe({next:function(e){r(e)}}),{isHide:n,setHide:function(e){return h.next(e)}}},x=Object(i.a)((function(e){return Object(l.a)({mainTransParent:{position:"fixed",top:0,backgroundColor:"rgba(0,0,0,0.65)",color:"#fff",boxShadow:"none"},btnGroup:{display:"flex",flexGrow:1,justifyContent:"flex-end"}})})),E=function(){var e=x(),t=g().isHide;return console.log("rxHide:",t),r.a.createElement(u.a,{position:"static",className:e.mainTransParent},r.a.createElement(s.a,null,r.a.createElement(d.a,{variant:"h6"},"Marckon"),r.a.createElement("div",{className:e.btnGroup},r.a.createElement(f.a,null,r.a.createElement(p.a,{style:{color:"#fff"}})),r.a.createElement(f.a,null,r.a.createElement(b.a,{style:{color:"#fff"}})))))},j=n(26),O=n.n(j);function k(e){var t=Object(a.useState)({windowTop:0,windowLeft:0}),n=Object(w.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){function t(t){o({windowTop:window.scrollY,windowLeft:window.scrollX,elementTop:e?e.getBoundingClientRect().top:void 0,elementLeft:e?e.getBoundingClientRect().left:void 0})}return document.addEventListener("scroll",t),function(){document.removeEventListener("scroll",t)}}),[e]),r}var y=Object(i.a)((function(e){return Object(l.a)({pageBackGround:{height:"50vh",overflow:"hidden",zIndex:-1,backgroundImage:"url(".concat(O.a,")"),backgroundSize:"cover",backgroundPosition:"center"}})})),T=function(){var e=y(),t=k();return r.a.createElement("div",{className:e.pageBackGround,style:{transform:"translate3d(0px, ".concat(.5*-t.windowTop,"px, 0px)")}})},C=Object(i.a)((function(e){return Object(l.a)({avatar:{width:"30vw",height:"30vw",maxWidth:"160px",maxHeight:"160px",minHeight:"80px",minWidth:"80px",boxShadow:"0 0 30px rgba(0,0,0,0.65)",borderRadius:"100%",backgroundColor:"#fff",overflow:"hidden"}})})),H=function(e){var t=Object(a.useRef)(null),n=k(t.current||void 0),o=C(),c=g(),i=c.isHide,l=c.setHide;return n.elementTop&&n.elementTop<=64&&!i&&l(!0),n.elementTop&&n.elementTop>64&&i&&l(!1),r.a.createElement("div",{className:"".concat(o.avatar," ").concat(e.className),ref:t},r.a.createElement("img",{src:"https://avatars0.githubusercontent.com/u/24504081?s=460&v=4",width:"100%"}))},N=n(27),L=n.n(N),B=function(){var e=Object(a.useRef)(null);return Object(a.useEffect)((function(){if(e.current){console.log(e.current);new L.a(e.current)}}),[e.current]),r.a.createElement("div",{ref:e},r.a.createElement("div",{"data-depth":"0.2"},"My first Layer!"),r.a.createElement("div",{"data-depth":"0.6"},"My second Layer!"))},R=Object(i.a)((function(e){return Object(l.a)({personalCard:{width:"90vw",height:"50vh",margin:"-15vh 5vw 0 5vw",backgroundColor:"#fff",borderRadius:"5vw",position:"relative",boxShadow:"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);"},avatar:{position:"absolute",left:"50%",top:0,transform:"translate(-50%, -50%)"}})})),S=function(){var e=R();return r.a.createElement("div",{className:e.personalCard},r.a.createElement(H,{className:e.avatar}),r.a.createElement(B,null))},G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(T,null),r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.05e839aa.chunk.js.map