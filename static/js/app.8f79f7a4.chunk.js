(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{145:function(e,t,n){"use strict";var r=n(20),o=n.n(r),s=(n(0),n(191)),a=n(78),c=n(192),u=function(e,t,n){var r,s,a,c;return o.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(e&&"string"==typeof e){u.next=5;break}return console.log("[APP -> CONNECTOR] NO LINK PROVIDED."),u.abrupt("return",-1);case 5:if(t&&n){u.next=10;break}return console.log("[APP -> CONNECTOR] NO DATA PROVIDED."),u.abrupt("return",-1);case 10:if("object"==typeof t&&"object"==typeof n){u.next=15;break}return console.log("[APP -> CONNECTOR] DATATYPE IS INCORRECT."),u.abrupt("return",-1);case 15:if(t.length==n.length){u.next=20;break}return console.log("[APP -> CONNECTOR] DATA IS INCONSISTENT."),u.abrupt("return",-1);case 20:for(r=new FormData,s=0;s<t.length;s++)r.append(t[s],n[s]);return u.prev=22,u.next=25,o.a.awrap(fetch(e,{method:"POST",mode:"cors",redirect:"follow",headers:{"Access-Control-Allow-Origin":"https://jakkunught.github.io/expo-gh-pages"},body:r}));case 25:return a=u.sent,u.t0=JSON,u.next=29,o.a.awrap(a.json());case 29:return u.t1=u.sent,c=u.t0.parse.call(u.t0,u.t1),u.abrupt("return",c);case 34:return u.prev=34,u.t2=u.catch(22),console.log("[APP -> CONNECTOR] FATAL ERROR."),console.log(u.t2),u.abrupt("return",-1);case 39:case"end":return u.stop()}}),null,null,[[22,34]],Promise)},l=n(71);t.a=function(){return Object(l.jsxs)(s.a,{children:[Object(l.jsx)(a.a,{fontSize:"m",children:"Hello Doumo!"}),Object(l.jsx)(c.a,{colorScheme:"primary",onPress:function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:u("https://jakku-night.herokuapp.com/products/insert/",["name","description","cost","sell_price","quantity"],["Onions","Onions from Paraguay","1000","3000","1000"]);case 1:case"end":return e.stop()}}),null,null,null,Promise)},children:"Send Request"})]})}},153:function(e,t,n){e.exports=n(179)}},[[153,1,2]]]);
//# sourceMappingURL=app.8f79f7a4.chunk.js.map