(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={btnPanel:"Todolist_btnPanel__3BRnK",btnRemove:"Todolist_btnRemove__2MgBG",wrapperTodo:"Todolist_wrapperTodo__7yWU5",btnHigh:"Todolist_btnHigh__1RYl0",btnMiddle:"Todolist_btnMiddle__275_o",btnLow:"Todolist_btnLow__2xXmu"}},,,,,,,function(e,t,a){e.exports={inputNya:"InputNya_inputNya__1wSwc",error:"InputNya_error__fb_uA",inp:"InputNya_inp__26Yvz"}},,,,,function(e,t,a){e.exports={firstname:"Person_firstname__2kpgw",lastname:"Person_lastname__36YRQ",patronymic:"Person_patronymic__28gHk"}},function(e,t,a){e.exports={container:"Junior_container__1zmVY"}},function(e,t,a){e.exports={activeLink:"NavBar_activeLink__3nV0Z"}},,function(e,t,a){e.exports={wrapper:"Form_wrapper__1MaRp",span:"Form_span__p1dZ7",btn:"Form_btn__F8mpG"}},function(e,t,a){e.exports={modal:"Time_modal__3GPY0",time:"Time_time__1Buyj"}},,,,,,,function(e,t,a){e.exports={message:"Message_message__2wJdY"}},function(e,t,a){e.exports={text:"Text_text__1MZlo"}},function(e,t,a){e.exports={time:"Time_time__Zj23j"}},function(e,t,a){e.exports={container:"EditableSpan_container__1_cXL"}},function(e,t,a){e.exports={container:"Select_container__3mkEj"}},,function(e,t,a){e.exports={ldsRipple:"Loader_ldsRipple__fcYM1"}},,,,function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),i=(a(44),a(36)),o=a(2),u=(a(45),a(53)),m=a(8),s=a(1),d=a(29),p=a.n(d),E=a(17),v=a.n(E);var f=function(e){return r.a.createElement("div",null,r.a.createElement("span",{className:v.a.firstname},e.firstname," "),r.a.createElement("span",{className:v.a.lastname},e.lastname," "),r.a.createElement("span",{className:v.a.patronymic},e.patronymic))},g=a(30),_=a.n(g);var b=function(e){return r.a.createElement("div",{className:_.a.text},e.text)},h=a(31),y=a.n(h);var j=function(e){return r.a.createElement("div",{className:y.a.time},r.a.createElement("span",null,e.time),r.a.createElement("img",{src:"https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711433.jpg",alt:"check"}))};var k=function(){return r.a.createElement("div",{className:p.a.message},r.a.createElement(f,{firstname:"\u0414\u043e\u0440\u043e\u0444\u0435\u0439\u0447\u0438\u043a",lastname:"\u0410\u043b\u0435\u043a\u0441\u0435\u0439",patronymic:"\u0410\u043d\u0430\u0442\u043e\u043b\u044c\u0435\u0432\u0438\u0447"}),r.a.createElement(b,{text:"Hi, my name is Alex"}),r.a.createElement(j,{time:"7:30"}))},O=a(5),N=a.n(O);var C=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",Object.assign({className:e.className},e)))};var S=function(e){return r.a.createElement("div",{className:N.a.wrapperTodo},r.a.createElement("ul",null,e.tasks.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("span",null,t.deal," : "),r.a.createElement("span",null,t.priority," "),r.a.createElement(C,{className:N.a.btnRemove,onClick:function(){e.deleteTask(t.id)}},"delete"))}))),r.a.createElement("div",{className:N.a.btnPanel},r.a.createElement(C,{className:N.a.btnHigh,onClick:function(){e.changeFilter("high")}},"High"),r.a.createElement(C,{className:N.a.btnMiddle,onClick:function(){e.changeFilter("middle")}},"Middle"),r.a.createElement(C,{className:N.a.btnLow,onClick:function(){e.changeFilter("low")}},"Low"),r.a.createElement(C,{onClick:function(){e.changeFilter("all")}},"All")))},w=a(16),T=a(21),x=a.n(T),R=a(38),F=a(12),L=a.n(F);var H=function(e){e.onEnter;var t=e.error,a=Object(R.a)(e,["onEnter","error"]),n=t?"".concat(L.a.inputNya," ").concat(L.a.error):"".concat(L.a.inputNya);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({className:"".concat(L.a.inp," ").concat(n)},a,{type:"text",onKeyPress:function(t){13===t.charCode&&e.onEnter(t)}})),r.a.createElement("span",null,t))};var I=function(e){var t=Object(n.useState)(""),a=Object(w.a)(t,2),l=a[0],c=a[1];return r.a.createElement("div",{className:x.a.wrapper},r.a.createElement(H,{onEnter:function(t){e.onEnter(t),c("")},error:e.error,onChange:function(e){c(e.currentTarget.value)},value:l}),r.a.createElement(C,{onClick:function(){e.sayHi(l),c("")}},"add"),r.a.createElement("span",{className:x.a.span},e.arr.length))};var V=function(e){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(S,{tasks:e.tasks,deleteTask:e.deleteTask,changeFilter:e.changeFilter}),r.a.createElement(I,{sayHi:e.sayHi,arr:e.arr,error:e.error,onEnter:e.onEnter}))},M=a(32),J=a.n(M);var P=function(e){var t=Object(n.useState)(!0),a=Object(o.a)(t,2),l=a[0],c=a[1],i=function(){return c(!l)};return r.a.createElement("div",{className:J.a.container},l?r.a.createElement("span",{onClick:i},e.value):r.a.createElement(H,{onEnter:e.onEnter,error:e.error,autoFocus:!0,onBlur:i,value:e.value,onChange:e.onChange}))};var A=a(33),Y=a.n(A);var B=function(e){var t=e.arr.map((function(e){return r.a.createElement("option",{value:e,key:e},e)}));return r.a.createElement("select",Object.assign({className:Y.a.container,value:e.value,onChange:e.onChange},e),t)};var G=function(e){var t=e.arr.map((function(t){return r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{key:t,type:"radio",name:e.name,value:t,onChange:e.onChangeRadio,checked:t===e.value}),t))}));return r.a.createElement("div",null,t)},D=a(18),K=a.n(D),Z=function(e,t){switch(t.type){case"SORT":if("asc"===t.payload)return e.map((function(e){return e})).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));if("desc"===t.payload)return e.map((function(e){return e})).sort((function(e,t){return e.name>t.name?-1:e.name<t.name?1:0}));case"CHECK":return e.filter((function(e){return e.age>t.payload}));default:return e}};var W=function(){var e=Object(n.useReducer)(Z,[{id:"1",name:"Victor",age:30},{id:"2",name:"Alex",age:17},{id:"3",name:"Sergey",age:22},{id:"4",name:"Valera",age:6},{id:"5",name:"Kim",age:33},{id:"6",name:"Andrey",age:16},{id:"7",name:"Yan",age:5}]),t=Object(w.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,a.map((function(e){return e.name+" "})),r.a.createElement(C,{onClick:function(){l({type:"SORT",payload:"asc"})}},"ascSort"),r.a.createElement(C,{onClick:function(){l({type:"SORT",payload:"desc"})}},"descSort"),r.a.createElement(C,{onClick:function(){l({type:"CHECK",payload:18})}},"checkSort"))},z=a(22),X=a.n(z);var Q=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(new Date),i=Object(o.a)(c,2),u=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("div",{className:X.a.time},r.a.createElement("div",{className:X.a.modal},u.toString()),u.toString()),r.a.createElement("button",{onClick:function(){var e=setInterval((function(){m(new Date)}),1e3);l(e)}},"start"),r.a.createElement("button",{onClick:function(){clearInterval(a)}},"stop"))},U=a(7),$=a(37),q={loading:!1};var ee=function(e){var t=["1","2","3"],a=["vasya","petya","serega"],l=Object(n.useState)(t[0]),c=Object(o.a)(l,2),i=c[0],u=c[1],m=Object(n.useState)(a[0]),s=Object(o.a)(m,2),d=s[0],p=s[1],E=Object(U.b)();return r.a.createElement("div",null,r.a.createElement(P,{onEnter:e.onEnter,error:e.error,value:e.value,setValue:e.setValue,onChange:e.onChange}),r.a.createElement("div",{className:K.a.container},r.a.createElement(C,{onClick:function(){!function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}("test",{inputValue:e.value})}},"save"),r.a.createElement(C,{onClick:function(){var t=function(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}("test",{inputValue:""});e.setValue(t.inputValue)}},"restore")),r.a.createElement("div",{className:K.a.container},r.a.createElement(B,{arr:t,value:i,onChange:function(e){u(e.currentTarget.value)}})),r.a.createElement("div",{className:K.a.container},r.a.createElement(G,{arr:a,name:"Ignat",value:d,onChangeRadio:function(e){p(e.currentTarget.value)}})),r.a.createElement("div",null,r.a.createElement(W,null)),r.a.createElement(Q,null),r.a.createElement("button",{onClick:function(){E({type:"SET-LOADING"}),setTimeout((function(){E({type:"SET-LOADING"})}),3e3)}},"loader"))};var te=function(){return r.a.createElement("div",null,"3")},ae=a(19),ne=a.n(ae);var re=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/prejunior",activeClassName:ne.a.activeLink},"PreJunior")),"  ",r.a.createElement("li",null,r.a.createElement(m.b,{to:"/junior",activeClassName:ne.a.activeLink},"Junior")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/juniorplus",activeClassName:ne.a.activeLink},"Junior+"))))};var le=function(e){return r.a.createElement("div",null,r.a.createElement("h3",{onClick:function(){e.onClick(!e.collapsed)}},e.name),e.collapsed&&r.a.createElement(re,null))},ce=a(35),ie=a.n(ce),oe=function(){return r.a.createElement("div",{className:ie.a.ldsRipple},r.a.createElement("div",null),r.a.createElement("div",null))};var ue=function(){var e=Object(n.useState)([{deal:"learn react",priority:"high",id:1},{deal:"learn javascript",priority:"high",id:2},{deal:"learn html",priority:"middle",id:3},{deal:"learn css",priority:"middle",id:4},{deal:"learn redux",priority:"middle",id:5},{deal:"cook food",priority:"low",id:6},{deal:"call friends",priority:"low",id:7}]),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),d=Object(o.a)(c,2),p=d[0],E=d[1],v=Object(n.useState)(""),f=Object(o.a)(v,2),g=f[0],_=f[1],b=Object(n.useState)(!1),h=Object(o.a)(b,2),y=h[0],j=h[1],k=Object(n.useState)("Click me!"),O=Object(o.a)(k,2),N=O[0],C=O[1];function S(e){a=a.filter((function(t){return t.id!=e})),l(a)}function w(e){E(e)}var T=a;"high"===p&&(T=a.filter((function(e){return"high"===e.priority}))),"middle"===p&&(T=a.filter((function(e){return"middle"===e.priority}))),"low"===p&&(T=a.filter((function(e){return"low"===e.priority})));var x=Object(n.useState)([]),R=Object(o.a)(x,2),F=R[0],L=R[1];function H(e){e.trim()?(alert("Hello: ".concat(e)),L([].concat(Object(i.a)(F),[{name:e,id:Object(u.a)()}])),_("")):_("Input value is empty")}var I=function(e){H(e.currentTarget.value)},M=function(e){C(e.currentTarget.value)};return Object(U.c)((function(e){return e.loader})).loading?r.a.createElement(oe,null):r.a.createElement(m.a,null,r.a.createElement(le,{name:"menu",collapsed:y,onClick:j}),r.a.createElement(s.a,{path:"/prejunior",render:function(){return r.a.createElement(V,{tasks:T,deleteTask:S,changeFilter:w,sayHi:H,arr:F,error:g,onEnter:I})}}),r.a.createElement(s.a,{path:"/junior",render:function(){return r.a.createElement(ee,{onEnter:I,error:g,value:N,setValue:C,onChange:M})}}),r.a.createElement(s.a,{path:"/juniorplus",render:function(){return r.a.createElement(te,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=a(11),se=Object(me.b)({loader:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-LOADING":return Object($.a)({},e,{loading:!e.loading});default:return e}}}),de=Object(me.c)(se);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U.a,{store:de},r.a.createElement(ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[39,1,2]]]);
//# sourceMappingURL=main.41e15897.chunk.js.map