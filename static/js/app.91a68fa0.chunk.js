(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{145:function(e,t,r){"use strict";r(0);var n=r(191),o=r(78),s=r(192),a=r(23),c=r.n(a),u=function(e,t,r){var n,o,s,a;return c.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(e&&"string"==typeof e){u.next=5;break}return console.log("[APP -> CONNECTOR] NO LINK PROVIDED."),u.abrupt("return",-1);case 5:if(t&&r){u.next=10;break}return console.log("[APP -> CONNECTOR] NO DATA PROVIDED."),u.abrupt("return",-1);case 10:if("object"==typeof t&&"object"==typeof r){u.next=15;break}return console.log("[APP -> CONNECTOR] DATATYPE IS INCORRECT."),u.abrupt("return",-1);case 15:if(t.length==r.length){u.next=20;break}return console.log("[APP -> CONNECTOR] DATA IS INCONSISTENT."),u.abrupt("return",-1);case 20:for(n=new FormData,o=0;o<t.length;o++)n.append(t[o],r[o]);return u.prev=22,u.next=25,c.a.awrap(fetch(e,{method:"POST",mode:"cors",redirect:"follow",headers:{"Access-Control-Allow-Origin":"*"},body:n}));case 25:return s=u.sent,u.t0=JSON,u.next=29,c.a.awrap(s.json());case 29:return u.t1=u.sent,a=u.t0.parse.call(u.t0,u.t1),u.abrupt("return",a);case 34:return u.prev=34,u.t2=u.catch(22),console.log("[APP -> CONNECTOR] FATAL ERROR."),console.log(u.t2),u.abrupt("return",-1);case 39:case"end":return u.stop()}}),null,null,[[22,34]],Promise)},l=r(71);t.a=function(){return Object(l.jsxs)(n.a,{children:[Object(l.jsx)(o.a,{fontSize:"m",children:"Hello Doumo!"}),Object(l.jsx)(s.a,{colorScheme:"primary",onPress:u("https://jakku-night.herokuapp.com/products/insert/",["name","description","cost","sell_price","quantity"],["Onions","Onions from Paraguay","1000","3000","1000"]),children:"Send Request"})]})}},153:function(e,t,r){e.exports=r(179)}},[[153,1,2]]]);
//# sourceMappingURL=app.91a68fa0.chunk.js.map