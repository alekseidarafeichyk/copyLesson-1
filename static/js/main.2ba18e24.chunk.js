(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={btnPanel:"Todolist_btnPanel__3BRnK",btnRemove:"Todolist_btnRemove__2MgBG",wrapperTodo:"Todolist_wrapperTodo__7yWU5",btnHigh:"Todolist_btnHigh__1RYl0",btnMiddle:"Todolist_btnMiddle__275_o",btnLow:"Todolist_btnLow__2xXmu"}},,,,function(e,a,t){e.exports={inputNya:"InputNya_inputNya__1wSwc",error:"InputNya_error__fb_uA",inp:"InputNya_inp__26Yvz"}},,function(e,a,t){e.exports={firstname:"Person_firstname__2kpgw",lastname:"Person_lastname__36YRQ",patronymic:"Person_patronymic__28gHk"}},function(e,a,t){e.exports={container:"Junior_container__1zmVY"}},function(e,a,t){e.exports={activeLink:"NavBar_activeLink__3nV0Z"}},,function(e,a,t){e.exports={wrapper:"Form_wrapper__1MaRp",span:"Form_span__p1dZ7",btn:"Form_btn__F8mpG"}},,,,,,,function(e,a,t){e.exports={message:"Message_message__2wJdY"}},function(e,a,t){e.exports={text:"Text_text__1MZlo"}},function(e,a,t){e.exports={time:"Time_time__Zj23j"}},function(e,a,t){e.exports={container:"EditableSpan_container__1_cXL"}},function(e,a,t){e.exports={container:"Select_container__3mkEj"}},,,,function(e,a,t){e.exports=t(42)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),c=t.n(l),i=(t(35),t(28)),o=t(2),u=(t(36),t(44)),m=t(6),s=t(1),d=t(22),p=t.n(d),E=t(11),v=t.n(E);var f=function(e){return r.a.createElement("div",null,r.a.createElement("span",{className:v.a.firstname},e.firstname," "),r.a.createElement("span",{className:v.a.lastname},e.lastname," "),r.a.createElement("span",{className:v.a.patronymic},e.patronymic))},g=t(23),_=t.n(g);var b=function(e){return r.a.createElement("div",{className:_.a.text},e.text)},h=t(24),y=t.n(h);var k=function(e){return r.a.createElement("div",{className:y.a.time},r.a.createElement("span",null,e.time),r.a.createElement("img",{src:"https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711433.jpg",alt:"check"}))};var j=function(){return r.a.createElement("div",{className:p.a.message},r.a.createElement(f,{firstname:"\u0414\u043e\u0440\u043e\u0444\u0435\u0439\u0447\u0438\u043a",lastname:"\u0410\u043b\u0435\u043a\u0441\u0435\u0439",patronymic:"\u0410\u043d\u0430\u0442\u043e\u043b\u044c\u0435\u0432\u0438\u0447"}),r.a.createElement(b,{text:"Hi, my name is Alex"}),r.a.createElement(k,{time:"7:30"}))},C=t(5),N=t.n(C);var O=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",Object.assign({className:e.className},e)))};var w=function(e){return r.a.createElement("div",{className:N.a.wrapperTodo},r.a.createElement("ul",null,e.tasks.map((function(a){return r.a.createElement("li",{key:a.id},r.a.createElement("span",null,a.deal," : "),r.a.createElement("span",null,a.priority," "),r.a.createElement(O,{className:N.a.btnRemove,onClick:function(){e.deleteTask(a.id)}},"delete"))}))),r.a.createElement("div",{className:N.a.btnPanel},r.a.createElement(O,{className:N.a.btnHigh,onClick:function(){e.changeFilter("high")}},"High"),r.a.createElement(O,{className:N.a.btnMiddle,onClick:function(){e.changeFilter("middle")}},"Middle"),r.a.createElement(O,{className:N.a.btnLow,onClick:function(){e.changeFilter("low")}},"Low"),r.a.createElement(O,{onClick:function(){e.changeFilter("all")}},"All")))},S=t(15),x=t.n(S),T=t(29),F=t(9),H=t.n(F);var R=function(e){e.onEnter;var a=e.error,t=Object(T.a)(e,["onEnter","error"]),n=a?"".concat(H.a.inputNya," ").concat(H.a.error):"".concat(H.a.inputNya);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({className:"".concat(H.a.inp," ").concat(n)},t,{type:"text",onKeyPress:function(a){13===a.charCode&&e.onEnter(a)}})),r.a.createElement("span",null,a))};var V=function(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),l=t[0],c=t[1];return r.a.createElement("div",{className:x.a.wrapper},r.a.createElement(R,{onEnter:function(a){e.onEnter(a),c("")},error:e.error,onChange:function(e){c(e.currentTarget.value)},value:l}),r.a.createElement(O,{onClick:function(){e.sayHi(l),c("")}},"add"),r.a.createElement("span",{className:x.a.span},e.arr.length))};var L=function(e){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(w,{tasks:e.tasks,deleteTask:e.deleteTask,changeFilter:e.changeFilter}),r.a.createElement(V,{sayHi:e.sayHi,arr:e.arr,error:e.error,onEnter:e.onEnter}))},J=t(25),M=t.n(J);var I=function(e){var a=Object(n.useState)(!0),t=Object(o.a)(a,2),l=t[0],c=t[1],i=function(){return c(!l)};return r.a.createElement("div",{className:M.a.container},l?r.a.createElement("span",{onClick:i},e.value):r.a.createElement(R,{onEnter:e.onEnter,error:e.error,autoFocus:!0,onBlur:i,value:e.value,onChange:e.onChange}))};var P=t(26),B=t.n(P);var Y=function(e){var a=e.arr.map((function(e){return r.a.createElement("option",{value:e,key:e},e)}));return r.a.createElement("select",Object.assign({className:B.a.container,value:e.value,onChange:e.onChange},e),a)};var A=function(e){var a=e.arr.map((function(a){return r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{key:a,type:"radio",name:e.name,value:a,onChange:e.onChangeRadio,checked:a===e.value}),a))}));return r.a.createElement("div",null,a)},K=t(12),Z=t.n(K),W=function(e,a){switch(a.type){case"SORT":if("asc"===a.payload)return e.map((function(e){return e})).sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0}));if("desc"===a.payload)return e.map((function(e){return e})).sort((function(e,a){return e.name>a.name?-1:e.name<a.name?1:0}));case"CHECK":return e.filter((function(e){return e.age>a.payload}));default:return e}};var z=function(){var e=Object(n.useReducer)(W,[{id:"1",name:"Victor",age:30},{id:"2",name:"Alex",age:17},{id:"3",name:"Sergey",age:22},{id:"4",name:"Valera",age:6},{id:"5",name:"Kim",age:33},{id:"6",name:"Andrey",age:16},{id:"7",name:"Yan",age:5}]),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,t.map((function(e){return e.name+" "})),r.a.createElement(O,{onClick:function(){l({type:"SORT",payload:"asc"})}},"ascSort"),r.a.createElement(O,{onClick:function(){l({type:"SORT",payload:"desc"})}},"descSort"),r.a.createElement(O,{onClick:function(){l({type:"CHECK",payload:18})}},"checkSort"))};var G=function(e){var a=["1","2","3"],t=["vasya","petya","serega"],l=Object(n.useState)(a[0]),c=Object(o.a)(l,2),i=c[0],u=c[1],m=Object(n.useState)(t[0]),s=Object(o.a)(m,2),d=s[0],p=s[1];return r.a.createElement("div",null,r.a.createElement(I,{onEnter:e.onEnter,error:e.error,value:e.value,setValue:e.setValue,onChange:e.onChange}),r.a.createElement("div",{className:Z.a.container},r.a.createElement(O,{onClick:function(){!function(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}("test",{inputValue:e.value})}},"save"),r.a.createElement(O,{onClick:function(){var a=function(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}("test",{inputValue:""});e.setValue(a.inputValue)}},"restore")),r.a.createElement("div",{className:Z.a.container},r.a.createElement(Y,{arr:a,value:i,onChange:function(e){u(e.currentTarget.value)}})),r.a.createElement("div",{className:Z.a.container},r.a.createElement(A,{arr:t,name:"Ignat",value:d,onChangeRadio:function(e){p(e.currentTarget.value)}})),r.a.createElement(z,null))};var X=function(){return r.a.createElement("div",null,"3")},Q=t(13),U=t.n(Q);var $=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/prejunior",activeClassName:U.a.activeLink},"PreJunior")),"  ",r.a.createElement("li",null,r.a.createElement(m.b,{to:"/junior",activeClassName:U.a.activeLink},"Junior")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/juniorplus",activeClassName:U.a.activeLink},"Junior+"))))};var q=function(e){return r.a.createElement("div",null,r.a.createElement("h3",{onClick:function(){e.onClick(!e.collapsed)}},e.name),e.collapsed&&r.a.createElement($,null))};var D=function(){var e=Object(n.useState)([{deal:"learn react",priority:"high",id:1},{deal:"learn javascript",priority:"high",id:2},{deal:"learn html",priority:"middle",id:3},{deal:"learn css",priority:"middle",id:4},{deal:"learn redux",priority:"middle",id:5},{deal:"cook food",priority:"low",id:6},{deal:"call friends",priority:"low",id:7}]),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),d=Object(o.a)(c,2),p=d[0],E=d[1],v=Object(n.useState)(""),f=Object(o.a)(v,2),g=f[0],_=f[1],b=Object(n.useState)(!1),h=Object(o.a)(b,2),y=h[0],k=h[1],j=Object(n.useState)("Click me!"),C=Object(o.a)(j,2),N=C[0],O=C[1];function w(e){t=t.filter((function(a){return a.id!=e})),l(t)}function S(e){E(e)}var x=t;"high"===p&&(x=t.filter((function(e){return"high"===e.priority}))),"middle"===p&&(x=t.filter((function(e){return"middle"===e.priority}))),"low"===p&&(x=t.filter((function(e){return"low"===e.priority})));var T=Object(n.useState)([]),F=Object(o.a)(T,2),H=F[0],R=F[1];function V(e){e.trim()?(alert("Hello: ".concat(e)),R([].concat(Object(i.a)(H),[{name:e,id:Object(u.a)()}])),_("")):_("Input value is empty")}var J=function(e){V(e.currentTarget.value)},M=function(e){O(e.currentTarget.value)};return r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(q,{name:"menu",collapsed:y,onClick:k})),r.a.createElement("div",null,r.a.createElement(s.a,{path:"/prejunior",render:function(){return r.a.createElement(L,{tasks:x,deleteTask:w,changeFilter:S,sayHi:V,arr:H,error:g,onEnter:J})}}),r.a.createElement(s.a,{path:"/junior",render:function(){return r.a.createElement(G,{onEnter:J,error:g,value:N,setValue:O,onChange:M})}}),r.a.createElement(s.a,{path:"/juniorplus",render:function(){return r.a.createElement(X,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.2ba18e24.chunk.js.map