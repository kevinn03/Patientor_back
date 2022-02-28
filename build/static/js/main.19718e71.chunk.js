(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,a,t){e.exports=t(206)},206:function(e,a,t){"use strict";t.r(a);var n,l=t(0),r=t.n(l),c=t(63),o=t.n(c),i=(t(179),t(86)),u=t.n(i),m=t(100),d=t(59),s=t(92),p=t.n(s),E=t(138),b=t(11),h=t(216),f=t(227),v=t(222),O=t(217),g="http://localhost:3001/api",j=t(93),w=t(35),C={patients:{}},y=Object(l.createContext)([C,function(){return C}]),T=function(e){var a=e.reducer,t=e.children,n=Object(l.useReducer)(a,C),c=Object(d.a)(n,2),o=c[0],i=c[1];return r.a.createElement(y.Provider,{value:[o,i]},t)},k=function(){return Object(l.useContext)(y)},N=t(221),S=t(220),x=t(225),A=t(224),F=t(24),H=t(219),I=(t(218),function(e){var a=e.name,t=e.label,n=e.options;return r.a.createElement(H.a.Field,null,r.a.createElement("label",null,t),r.a.createElement(F.b,{as:"select",name:a,className:"ui dropdown"},n.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label||e.value)})))}),P=function(e){var a=e.field,t=e.label,n=e.placeholder;return r.a.createElement(H.a.Field,null,r.a.createElement("label",null,t),r.a.createElement(F.b,Object.assign({placeholder:n},a)),r.a.createElement("div",{style:{color:"red"}},r.a.createElement(F.a,{name:a.name})))};!function(e){e.Male="male",e.Female="female",e.Other="other"}(n||(n={}));var B=[{value:n.Male,label:"Male"},{value:n.Female,label:"Female"},{value:n.Other,label:"Other"}],D=function(e){var a=e.onSubmit,t=e.onCancel;return r.a.createElement(F.d,{initialValues:{name:"",ssn:"",dateOfBirth:"",occupation:"",gender:n.Other},onSubmit:a,validate:function(e){var a={};return e.name||(a.name="Field is required"),e.ssn||(a.ssn="Field is required"),e.dateOfBirth||(a.dateOfBirth="Field is required"),e.occupation||(a.occupation="Field is required"),a}},function(e){var a=e.isValid,n=e.dirty;return r.a.createElement(F.c,{className:"form ui"},r.a.createElement(F.b,{label:"Name",placeholder:"Name",name:"name",component:P}),r.a.createElement(F.b,{label:"Social Security Number",placeholder:"SSN",name:"ssn",component:P}),r.a.createElement(F.b,{label:"Date Of Birth",placeholder:"YYYY-MM-DD",name:"dateOfBirth",component:P}),r.a.createElement(F.b,{label:"Occupation",placeholder:"Occupation",name:"occupation",component:P}),r.a.createElement(I,{label:"Gender",name:"gender",options:B}),r.a.createElement(A.a,null,r.a.createElement(A.a.Column,{floated:"left",width:5},r.a.createElement(v.a,{type:"button",onClick:t,color:"red"},"Cancel")),r.a.createElement(A.a.Column,{floated:"right",width:5},r.a.createElement(v.a,{type:"submit",floated:"right",color:"green",disabled:!n||!a},"Add"))))})},_=function(e){var a=e.modalOpen,t=e.onClose,n=e.onSubmit,l=e.error;return r.a.createElement(S.a,{open:a,onClose:t,centered:!1,closeIcon:!0},r.a.createElement(S.a.Header,null,"Add a new patient"),r.a.createElement(S.a.Content,null,l&&r.a.createElement(x.a,{inverted:!0,color:"red"},"Error: ".concat(l)),r.a.createElement(D,{onSubmit:n,onCancel:t})))},M=t(226),R=["The patient is in great shape","The patient has a low risk of getting sick","The patient has a high risk of getting sick","The patient has a diagnosed condition"],q=function(e){var a=e.rating,t=e.showText;return r.a.createElement("div",{className:"health-bar"},r.a.createElement(M.a,{icon:"heart",disabled:!0,rating:4-a,maxRating:4}),t?r.a.createElement("p",null,R[a]):null)},Y=function(){var e=k(),a=Object(d.a)(e,2),t=a[0].patients,n=a[1],l=r.a.useState(!1),c=Object(d.a)(l,2),o=c[0],i=c[1],s=r.a.useState(),E=Object(d.a)(s,2),b=E[0],f=E[1],O=function(){i(!1),f(void 0)},j=function(){var e=Object(m.a)(u.a.mark(function e(a){var t,l,r,c,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("".concat(g,"/patients"),a);case 3:t=e.sent,l=t.data,n({type:"ADD_PATIENT",payload:l}),O(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error((null===(r=e.t0.response)||void 0===r?void 0:r.data)||"Unknown Error"),f((null===(c=e.t0.response)||void 0===c?void 0:null===(o=c.data)||void 0===o?void 0:o.error)||"Unknown error");case 13:case"end":return e.stop()}},e,null,[[0,9]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,{textAlign:"center"},r.a.createElement("h3",null,"Patient list")),r.a.createElement(N.a,{celled:!0},r.a.createElement(N.a.Header,null,r.a.createElement(N.a.Row,null,r.a.createElement(N.a.HeaderCell,null,"Name"),r.a.createElement(N.a.HeaderCell,null,"Gender"),r.a.createElement(N.a.HeaderCell,null,"Occupation"),r.a.createElement(N.a.HeaderCell,null,"Health Rating"))),r.a.createElement(N.a.Body,null,Object.values(t).map(function(e){return r.a.createElement(N.a.Row,{key:e.id},r.a.createElement(N.a.Cell,null,e.name),r.a.createElement(N.a.Cell,null,e.gender),r.a.createElement(N.a.Cell,null,e.occupation),r.a.createElement(N.a.Cell,null,r.a.createElement(q,{showText:!1,rating:1})))}))),r.a.createElement(_,{modalOpen:o,onSubmit:j,error:b,onClose:O}),r.a.createElement(v.a,{onClick:function(){return i(!0)}},"Add New Patient"))},G=function(){var e=k(),a=Object(d.a)(e,2)[1];return r.a.useEffect(function(){p.a.get("".concat(g,"/ping")),function(){var e=Object(m.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("".concat(g,"/patients"));case 3:t=e.sent,n=t.data,a({type:"SET_PATIENT_LIST",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}()()},[a]),r.a.createElement("div",{className:"App"},r.a.createElement(E.a,null,r.a.createElement(h.a,null,r.a.createElement(f.a,{as:"h1"},"Patientor"),r.a.createElement(v.a,{as:E.b,to:"/",primary:!0},"Home"),r.a.createElement(O.a,{hidden:!0}),r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/"},r.a.createElement(Y,null))))))};o.a.render(r.a.createElement(T,{reducer:function(e,a){switch(a.type){case"SET_PATIENT_LIST":return Object(w.a)(Object(w.a)({},e),{},{patients:Object(w.a)(Object(w.a)({},a.payload.reduce(function(e,a){return Object(w.a)(Object(w.a)({},e),{},Object(j.a)({},a.id,a))},{})),e.patients)});case"ADD_PATIENT":return Object(w.a)(Object(w.a)({},e),{},{patients:Object(w.a)(Object(w.a)({},e.patients),{},Object(j.a)({},a.payload.id,a.payload))});default:return e}}},r.a.createElement(G,null)),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.19718e71.chunk.js.map