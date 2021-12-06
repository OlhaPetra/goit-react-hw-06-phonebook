(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={list:"ContactList_list__1lM57",item:"ContactList_item__103xk",text:"ContactList_text__3b1HF",button:"ContactList_button__maZf2",label:"ContactList_label__wv28P",input:"ContactList_input__GkkP7"}},13:function(t,e,n){t.exports={label:"Filter_label__1TXGV",input:"Filter_input__2o_kN"}},17:function(t,e,n){t.exports={button:"Button_button__1X5OR"}},4:function(t,e,n){t.exports={form:"ContactForm_form__ylFuX",label:"ContactForm_label__QvTdJ",input:"ContactForm_input__3JFh6"}},40:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(7),r=n.n(o),i=n(14),u=n(2),s="phonebook/Add",l="phonebook/Delete",b="phonebook/ChangeFilter",m=n(16),j=n.n(m),d=function(t){var e=t.name,n=t.number;return{type:s,payload:{id:j.a.generate(),name:e,number:n}}},p=function(t){return{type:l,payload:t}},h=function(t){return{type:b,payload:t}},f=n(17),_=n.n(f),O=n(1);function x(t){var e=t.title;return Object(O.jsx)("button",{type:"submit",className:_.a.button,children:e})}var v=n(4),C=n.n(v);var N=Object(u.b)(null,(function(t){return{onSubmit:function(e){var n=e.name,a=e.number;return t(d({name:n,number:a}))}}}))((function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],r=c[1],u=Object(a.useState)(""),s=Object(i.a)(u,2),l=s[0],b=s[1],m=function(){r(""),b("")};return Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:o,number:l}),m()},className:C.a.form,children:[Object(O.jsxs)("label",{className:C.a.label,children:["Name",Object(O.jsx)("input",{className:C.a.input,type:"text",name:"name",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:function(t){r(t.target.value)},required:!0})]}),Object(O.jsxs)("label",{className:C.a.label,children:["Number",Object(O.jsx)("input",{className:C.a.input,type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:function(t){b(t.target.value)},required:!0})]}),Object(O.jsx)(x,{title:"Add contact"})]})})),g=n(13),y=n.n(g);var k=Object(u.b)((function(t){return{value:t.phonebook.filter}}),(function(t){return{onChange:function(e){return t(h(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(O.jsxs)("label",{className:y.a.label,children:["Find contacts by name"," ",Object(O.jsx)("input",{className:y.a.input,type:"text",name:"filter",value:e,onChange:n})]})})),F=n(9),w=n.n(F),A=function(t){var e=t.name,n=t.number;return Object(O.jsxs)("div",{className:w.a.contactItem,children:[Object(O.jsxs)("p",{className:w.a.contactName,children:[" ","".concat(e,":")]})," ",Object(O.jsxs)("p",{className:w.a.contactNumber,children:[" ",n]})]})},L=n(10),I=n.n(L),S=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},D=Object(u.b)((function(t){return{contacts:S(t.phonebook.contacts,t.phonebook.filter)}}),(function(t){return{onDeleteContact:function(e){return t(p(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(k,{}),Object(O.jsx)("ul",{className:I.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(O.jsxs)("li",{className:I.a.item,children:[Object(O.jsx)(A,{name:a,number:c}),Object(O.jsx)("button",{type:"button",onClick:function(){return n(e)},className:I.a.button,children:"Delete"})]},e)}))})]})}));function z(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"Title",children:"Phonebook"}),Object(O.jsx)(N,{}),Object(O.jsx)("h2",{className:"Title",children:"Contacts"}),Object(O.jsx)("div",{className:"Contacts",children:Object(O.jsx)(D,{})})]})}var J=n(3),T=n(18),Z=n(19),B=Object(J.combineReducers)({contacts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case s:return[].concat(Object(Z.a)(t),[a]);case l:return t.filter((function(t){return t.id!==a}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;return n===b?a:t}}),M=Object(J.combineReducers)({phonebook:B}),P=Object(J.createStore)(M,Object(T.composeWithDevTools)());n(39),n(40);r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(u.a,{store:P,children:Object(O.jsx)(z,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={contactItem:"ContactItem_contactItem__3nQa2",contactName:"ContactItem_contactName__2lzp1",contactNumber:"ContactItem_contactNumber__3a74A"}}},[[41,1,2]]]);
//# sourceMappingURL=main.3d09d820.chunk.js.map