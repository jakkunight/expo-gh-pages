(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{145:function(e,t,n){"use strict";var r=n(20),o=n.n(r),s=(n(0),n(191)),a=n(78),c=n(192),u=function(e,t,n){var r,s,a,c,u;return o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(e&&"string"==typeof e){l.next=5;break}return console.log("[APP -> CONNECTOR] NO LINK PROVIDED."),l.abrupt("return",-1);case 5:if(t&&n){l.next=10;break}return console.log("[APP -> CONNECTOR] NO DATA PROVIDED."),l.abrupt("return",-1);case 10:if("object"==typeof t&&"object"==typeof n){l.next=15;break}return console.log("[APP -> CONNECTOR] DATATYPE IS INCORRECT."),l.abrupt("return",-1);case 15:if(t.length==n.length){l.next=20;break}return console.log("[APP -> CONNECTOR] DATA IS INCONSISTENT."),l.abrupt("return",-1);case 20:for(r=new FormData,s=0;s<t.length;s++)r.append(t[s],n[s]);return(a=new Headers).append("Access-Control-Allow-Origin","https://jakkunught.github.io/"),l.prev=24,l.next=27,o.a.awrap(fetch(e,{method:"POST",mode:"no-cors",redirect:"follow",headers:a,body:r}));case 27:return c=l.sent,l.t0=JSON,l.next=31,o.a.awrap(c.json());case 31:return l.t1=l.sent,u=l.t0.parse.call(l.t0,l.t1),l.abrupt("return",u);case 36:return l.prev=36,l.t2=l.catch(24),console.log("[APP -> CONNECTOR] FATAL ERROR."),console.log(l.t2),l.abrupt("return",-1);case 41:case"end":return l.stop()}}),null,null,[[24,36]],Promise)},l=n(71);t.a=function(){return Object(l.jsxs)(s.a,{children:[Object(l.jsx)(a.a,{fontSize:"m",children:"Hello Doumo!"}),Object(l.jsx)(c.a,{colorScheme:"primary",onPress:function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:u("https://jakku-night.herokuapp.com/products/insert/",["name","description","cost","sell_price","quantity"],["Onions","Onions from Paraguay","1000","3000","1000"]);case 1:case"end":return e.stop()}}),null,null,null,Promise)},children:"Send Request"})]})}},153:function(e,t,n){e.exports=n(179)}},[[153,1,2]]]);
//# sourceMappingURL=app.8a8e91a2.chunk.js.map