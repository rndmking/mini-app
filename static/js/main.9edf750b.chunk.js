(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{131:function(e,t,a){e.exports=a(169)},160:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),i=a.n(r),l=a(20),o=a.n(l),s=a(32),u=a.n(s),m=a(40),p=a(26),d=a(50),f=a.n(d),E=a(49),b=a.n(E),h=(a(137),a(25)),g=a.n(h),v=a(22),k=a.n(v),j=a(44),O=a.n(j),y=a(33),x=a.n(y),w=a(41),C=a.n(w),U=a(43),_=a.n(U),A=a(42),I=a.n(A),K=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(g.a,{id:t},c.a.createElement(k.a,null,"\u0417\u0414\u0410\u0420\u041e\u0412\u0410 \u0414\u0420\u0423\u0413"),n&&c.a.createElement(x.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(C.a,{before:n.photo_200?c.a.createElement(I.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(x.a,{title:"Navigation Example"},c.a.createElement(_.a,null,c.a.createElement(O.a,{size:"xl",level:"1",onClick:a,"data-to":"persik"},"\u041f\u041e\u041a\u0410\u0416\u0418 \u041c\u041d\u0415 \u041a\u041e\u0422\u042f\u0420\u0423"))))},P=a(34),V=a(48),N=a.n(V),S=a(45),W=a.n(S),z=a(46),J=a.n(z),T=a(47),B=a.n(T),D=(a(160),Object(P.b)()),F=function(e){return c.a.createElement(g.a,{id:e.id},c.a.createElement(k.a,{left:c.a.createElement(N.a,{onClick:e.go,"data-to":"home"},D===P.a?c.a.createElement(W.a,null):c.a.createElement(J.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:B.a,alt:"Persik The Cat"}))},G=function(){var e=Object(n.useState)("home"),t=Object(p.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),l=Object(p.a)(i,2),s=l[0],d=l[1],E=Object(n.useState)(c.a.createElement(b.a,{size:"large"})),h=Object(p.a)(E,2),g=h[0],v=h[1];Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,d(t),v(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var k=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(f.a,{activePanel:a,popout:g},c.a.createElement(K,{id:"home",fetchedUser:s,go:k}),c.a.createElement(F,{id:"persik",go:k}))};o.a.send("VKWebAppInit"),i.a.render(c.a.createElement(G,null),document.getElementById("root"))},47:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"}},[[131,1,2]]]);
//# sourceMappingURL=main.9edf750b.chunk.js.map