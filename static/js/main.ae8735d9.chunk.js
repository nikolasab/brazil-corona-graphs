(this["webpackJsonpbrazil-corona-graphs"]=this["webpackJsonpbrazil-corona-graphs"]||[]).push([[0],{156:function(e,t,a){e.exports=a(269)},161:function(e,t,a){},162:function(e,t,a){},269:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(138),o=a.n(c);a(161),a(162),a(163);var i=function(){return r.a.createElement("div",{className:"p-8 w-full text-center text-3xl text-blue-800 shadow-xs font-thin"},"Novo Coronavirus (Covid-19) - Brasil")},l=a(97),s=a.n(l),m=a(139),d=a(57),u=a(280),f=a(283),h=a(284),p=a(288),E=a(286),b=a(282),x=a(279),v=a(281),y=a(140),g=a(95),w=a.n(g);function S(){return fetch("https://pomber.github.io/covid19/timeseries.json").then((function(e){return e.json()})).then((function(e){return e.Brazil}))}var C=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(),i=Object(d.a)(o,2),l=i[0],g=i[1],C=Object(n.useState)(),j=Object(d.a)(C,2),O=j[0],_=j[1],k=Object(n.useState)(window.innerWidth),N=Object(d.a)(k,2),z=N[0],D=N[1],I=function(e){D(e.target.innerWidth)};function L(){return M.apply(this,arguments)}function M(){return(M=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,c(t.map((function(e){return{x:e.date,y:e.confirmed}}))),g([{x:"Recuperados",y:t[t.length-1].recovered},{x:"Mortes",y:t[t.length-1].deaths},{x:"Confirmados",y:t[t.length-1].confirmed}]),_(z<500?Math.round(t.length/10+1):Math.round(t.length/5+1));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){L();var e=setInterval((function(){L()}),144e5);return function(){return clearInterval(e)}}),[]),Object(n.useEffect)((function(){return window.addEventListener("resize",Object(y.throttle)(I,600)),function(){window.removeEventListener("resize",I)}}),[]);var Y=a?r.a.createElement(u.a,{theme:f.a.material,width:z,height:550,domainPadding:50,animate:{duration:2500,onLoad:{duration:200}},containerComponent:r.a.createElement(h.a,{labels:function(e){var t=e.datum;return"".concat(w()(new Date(t.x),"DD/MM/YYYY").format("DD/MMM/YYYY"),"\nConfirmados: ").concat(t.y)},labelComponent:r.a.createElement(p.a,{cornerRadius:5,flyoutStyle:{stroke:"#d7d7d7",fill:"white"}})})},r.a.createElement(E.a,{tickCount:O,tickLabelComponent:r.a.createElement(b.a,{angle:-35,dy:10,style:{data:{fontSize:32}}})}),r.a.createElement(E.a,{style:{tickLabels:{fontSize:16}},dependentAxis:!0}),r.a.createElement(x.a,{data:a,style:{data:{stroke:"#c43a31"},labels:{fill:"#c43a31",fontSize:20,padding:5}}})):null,B=a?r.a.createElement(u.a,{theme:f.a.material,height:550,width:z,domainPadding:100,animate:{duration:1e3,onLoad:{duration:500}}},r.a.createElement(E.a,{style:{tickLabels:{fontSize:16}}}),r.a.createElement(E.a,{dependentAxis:!0,style:{tickLabels:{fontSize:16}}}),r.a.createElement(v.a,{data:l,style:{data:{fill:"#c43a31",stroke:"black",strokeWidth:1},labels:{fill:"#c43a31",fontSize:16}},labels:function(e){return e.datum.y},labelComponent:r.a.createElement(b.a,{dy:-10})})):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-12"},r.a.createElement("h1",{className:"text-xl text-gray-600 mx-auto text-center"},"N\xfamero de casos / Tempo"),Y),r.a.createElement("div",{className:"mt-20"},r.a.createElement("h1",{className:"text-xl text-gray-600 mx-auto text-center"}," Rela\xe7\xe3o entre Confirmados, recuperados e mortes"),B))};var j=function(){return r.a.createElement("div",{className:"grid min-h-screen",style:{placeItems:"center"}},r.a.createElement(i,null),r.a.createElement("div",{className:"w-full p-2 md:w-10/12 grid grid-cols-1"},r.a.createElement(C,null)),r.a.createElement("div",{className:"my-16"},r.a.createElement("p",{className:"text-xs text-gray-600 opacity-75"},"Dados coletados de ",r.a.createElement("a",{className:"text-blue-700",href:"https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series"},"https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series")),r.a.createElement("p",{className:"text-xs font-semibold text-gray-800 text-center my-8"},"#FiqueEmCasa")))};document.title="Covid-19 Brasil",o.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[156,1,2]]]);
//# sourceMappingURL=main.ae8735d9.chunk.js.map