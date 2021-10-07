(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={Label:"Filter_Label__3FoRN",Input:"Filter_Input__20k7U"}},22:function(t,e,n){t.exports={Container:"Container_Container__3tQ9A"}},40:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),s=n(6),o=n.n(s),i=n(3),l=n(19),u=n(11),b=n(4),j=n(20),d=n.n(j),O=n(5),m=n(21),p=n.n(m),h=n(12),f=n(2),_=n(45),x=Object(b.b)("contacts/add",(function(t,e){return{payload:{id:Object(_.a)(),name:t,number:e}}})),C=Object(b.b)("contacts/delete"),v=Object(b.b)("contacts/filter"),L=Object(b.c)([],(a={},Object(h.a)(a,x,(function(t,e){var n=e.payload;return[].concat(Object(u.a)(t),[n])})),Object(h.a)(a,C,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),g=Object(b.c)("",Object(h.a)({},v,(function(t,e){return e.payload}))),N=Object(f.b)({items:L,filter:g}),A=[].concat(Object(u.a)(Object(b.d)({serializableCheck:{ignoredActions:[O.a,O.f,O.b,O.c,O.d,O.e]}})),[d.a]),k={key:"contacts",storage:p.a,blacklist:["filter"]},y=Object(b.a)({reducer:{contacts:Object(O.g)(k,N)},middleware:A,devTools:!1}),I=Object(O.h)(y),F=n(22),z=n.n(F),B=n(1);var S=function(t){var e=t.children;return Object(B.jsx)("div",{className:z.a.Container,children:e})},w=n(17),Z=n(7),T=n.n(Z),q=n(23),J=n.n(q);var M=function(){var t=Object(i.b)(),e=Object(c.useState)(""),n=Object(w.a)(e,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(w.a)(s,2),l=o[0],u=o[1],b=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":u(a);break;default:return}},j=function(){r(""),u("")};return Object(B.jsxs)("form",{className:T.a.Form,onSubmit:function(e){e.preventDefault(),t(x(a,l)),j()},children:[Object(B.jsxs)("label",{className:T.a.Label,children:["\u0406\u043c'\u044f",Object(B.jsx)("input",{className:T.a.Input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0406\u043c'\u044f \u043c\u043e\u0436\u0435 \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438\u0441\u044c \u043b\u0438\u0448\u0435 \u0456\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0442\u0430 \u043f\u0440\u043e\u0431\u0456\u043b\u0456\u0432. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0456 \u0442.\u0434.",required:!0,value:a,onChange:b,placeholder:"Sylvester Stalone"})]}),Object(B.jsxs)("label",{className:T.a.Label,children:["\u041d\u043e\u043c\u0435\u0440",Object(B.jsx)(J.a,{className:T.a.Input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 \u043c\u043e\u0436\u0435 \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438\u0441\u044c \u0437 \u0446\u0438\u0444\u0440 \u0456 \u043c\u043e\u0436\u0435 \u0441\u043a\u0430\u043b\u0430\u0434\u0442\u0438\u0441\u044c \u0437 \u043f\u0440\u043e\u0431\u0456\u043b\u0456\u0432, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u0438\u0445 \u0434\u0443\u0436\u043e\u043a \u0456 \u043c\u043e\u0436\u0435 \u043f\u043e\u0447\u0438\u043d\u0430\u0442\u0438\u0441\u044c \u0437 +",required:!0,onChange:b,value:l,placeholder:"+38 (099) 999-99-99",mask:"+38 (099) 999-99-99"})]}),Object(B.jsx)("button",{className:T.a.Button,type:"submit",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})},E=function(t){return t.contacts.items},W=function(t){return t.contacts.filter},D=function(t){var e=E(t),n=W(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},U=n(16),$=n.n(U),P=function(){var t=Object(i.b)(),e=Object(i.c)(W);return Object(i.c)(E).length?Object(B.jsxs)("label",{className:$.a.Label,children:["\u0417\u043d\u0430\u0439\u0434\u0456\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438 \u0437\u0430 \u0456\u043c\u0435\u043d\u0435\u043c",Object(B.jsx)("input",{type:"text",name:"filter",className:$.a.Input,value:e,onChange:function(e){return t(v(e.target.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0406\u043c'\u044f \u043c\u043e\u0436\u0435 \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438\u0441\u044c \u043b\u0438\u0448\u0435 \u0456\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0442\u0430 \u043f\u0440\u043e\u0431\u0456\u043b\u0456\u0432. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0456 \u0442.\u0434.",required:!0})]}):Object(B.jsx)("p",{children:"\u0412\u0430\u0448\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430 \u043a\u043d\u0438\u0433\u0430 \u043f\u043e\u0440\u043e\u0436\u043d\u044f. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0434\u043e\u0434\u0430\u0439\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442. "})},Q=n(8),R=n.n(Q),Y=function(){var t=Object(i.b)(),e=Object(i.c)(D);return Object(B.jsx)("ul",{className:R.a.List,children:e.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(B.jsxs)("li",{className:R.a.Item,children:[Object(B.jsxs)("p",{className:R.a.Text,children:[a,": ",Object(B.jsx)("span",{className:R.a.Span,children:c})]}),Object(B.jsx)("button",{className:R.a.Button,type:"button",onClick:function(){return t(C(n))},title:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438",children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]},n)}))})},G=n(24);n(39),n(40);var H=function(){return Object(B.jsxs)(S,{children:[Object(B.jsx)("h1",{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0438\u0439 \u0434\u043e\u0432\u0456\u0434\u043d\u0438\u043a"}),Object(B.jsx)(M,{}),Object(B.jsx)("h2",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"}),Object(B.jsx)(P,{}),Object(B.jsx)(Y,{}),Object(B.jsx)(G.a,{autoClose:3700})]})};n(41),n(42);o.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(i.a,{store:y,children:Object(B.jsx)(l.a,{loading:null,persistor:I,children:Object(B.jsx)(H,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={Form:"FormContacts_Form__1PDtW",Label:"FormContacts_Label__13aMi",Input:"FormContacts_Input__2v-lW",Button:"FormContacts_Button__uqumT"}},8:function(t,e,n){t.exports={List:"ListContacts_List__2LALo",Item:"ListContacts_Item__1md0j",Text:"ListContacts_Text__3EW7Y",Span:"ListContacts_Span__1L_ta",Button:"ListContacts_Button__g8jEU"}}},[[43,1,2]]]);
//# sourceMappingURL=main.6b699d4d.chunk.js.map