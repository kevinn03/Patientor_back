(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{174:function(e,a,t){e.exports=t(207)},200:function(e,a,t){},207:function(e,a,t){"use strict";t.r(a);var n,l,r=t(0),c=t.n(r),i=t(63),o=t.n(i),u=(t(179),t(87)),d=t.n(u),m=t(101),s=t(32),p=t(93),E=t.n(p),v=t(80),b=t(11),h=t(217),f=t(228),O=t(223),g=t(218),j="http://localhost:3001/api",y=t(94),w=t(36),k={patients:{}},C=Object(r.createContext)([k,function(){return k}]),T=function(e){var a=e.reducer,t=e.children,n=Object(r.useReducer)(a,k),l=Object(s.a)(n,2),i=l[0],o=l[1];return c.a.createElement(C.Provider,{value:[i,o]},t)},N=function(){return Object(r.useContext)(C)},S=(t(200),function(e){var a,t=e.entry;return c.a.createElement("div",{className:"entry-card"},t.description,c.a.createElement("div",null,null===(a=t.diagnosisCodes)||void 0===a?void 0:a.map(function(e,a){return c.a.createElement("li",{key:a},e)})))}),x=function(e){var a,t,n=e.id,l=N(),r=Object(s.a)(l,1)[0].patients;return c.a.createElement("div",null,c.a.createElement("h4",null,"entries"),c.a.createElement("div",null,null===(a=r[n])||void 0===a?void 0:null===(t=a.entries)||void 0===t?void 0:t.map(function(e){return c.a.createElement(S,{key:e.id,entry:e})})))},A=function(){var e,a,t,n=N(),l=Object(s.a)(n,1)[0].patients,r=Object(b.f)().id;return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("h2",null,null===(e=l[r])||void 0===e?void 0:e.name)),c.a.createElement("div",null,"ssn: ",null===(a=l[r])||void 0===a?void 0:a.ssn),c.a.createElement("div",null,"occupation: ",null===(t=l[r])||void 0===t?void 0:t.occupation),c.a.createElement(x,{id:r}))},H=t(222),R=t(221),F=t(226),I=t(225),P=t(24),B=t(220),D=(t(219),function(e){var a=e.name,t=e.label,n=e.options;return c.a.createElement(B.a.Field,null,c.a.createElement("label",null,t),c.a.createElement(P.b,{as:"select",name:a,className:"ui dropdown"},n.map(function(e){return c.a.createElement("option",{key:e.value,value:e.value},e.label||e.value)})))}),_=function(e){var a=e.field,t=e.label,n=e.placeholder;return c.a.createElement(B.a.Field,null,c.a.createElement("label",null,t),c.a.createElement(P.b,Object.assign({placeholder:n},a)),c.a.createElement("div",{style:{color:"red"}},c.a.createElement(P.a,{name:a.name})))};!function(e){e.Male="male",e.Female="female",e.Other="other"}(n||(n={})),function(e){e[e.Healthy=0]="Healthy",e[e.LowRisk=1]="LowRisk",e[e.HighRisk=2]="HighRisk",e[e.CriticalRisk=3]="CriticalRisk"}(l||(l={}));var M=[{value:n.Male,label:"Male"},{value:n.Female,label:"Female"},{value:n.Other,label:"Other"}],q=function(e){var a=e.onSubmit,t=e.onCancel;return c.a.createElement(P.d,{initialValues:{name:"",ssn:"",dateOfBirth:"",occupation:"",gender:n.Other},onSubmit:a,validate:function(e){var a={};return e.name||(a.name="Field is required"),e.ssn||(a.ssn="Field is required"),e.dateOfBirth||(a.dateOfBirth="Field is required"),e.occupation||(a.occupation="Field is required"),a}},function(e){var a=e.isValid,n=e.dirty;return c.a.createElement(P.c,{className:"form ui"},c.a.createElement(P.b,{label:"Name",placeholder:"Name",name:"name",component:_}),c.a.createElement(P.b,{label:"Social Security Number",placeholder:"SSN",name:"ssn",component:_}),c.a.createElement(P.b,{label:"Date Of Birth",placeholder:"YYYY-MM-DD",name:"dateOfBirth",component:_}),c.a.createElement(P.b,{label:"Occupation",placeholder:"Occupation",name:"occupation",component:_}),c.a.createElement(D,{label:"Gender",name:"gender",options:M}),c.a.createElement(I.a,null,c.a.createElement(I.a.Column,{floated:"left",width:5},c.a.createElement(O.a,{type:"button",onClick:t,color:"red"},"Cancel")),c.a.createElement(I.a.Column,{floated:"right",width:5},c.a.createElement(O.a,{type:"submit",floated:"right",color:"green",disabled:!n||!a},"Add"))))})},L=function(e){var a=e.modalOpen,t=e.onClose,n=e.onSubmit,l=e.error;return c.a.createElement(R.a,{open:a,onClose:t,centered:!1,closeIcon:!0},c.a.createElement(R.a.Header,null,"Add a new patient"),c.a.createElement(R.a.Content,null,l&&c.a.createElement(F.a,{inverted:!0,color:"red"},"Error: ".concat(l)),c.a.createElement(q,{onSubmit:n,onCancel:t})))},Y=t(227),G=["The patient is in great shape","The patient has a low risk of getting sick","The patient has a high risk of getting sick","The patient has a diagnosed condition"],J=function(e){var a=e.rating,t=e.showText;return c.a.createElement("div",{className:"health-bar"},c.a.createElement(Y.a,{icon:"heart",disabled:!0,rating:4-a,maxRating:4}),t?c.a.createElement("p",null,G[a]):null)},U=function(){var e=N(),a=Object(s.a)(e,2),t=a[0].patients,n=a[1],l=c.a.useState(!1),r=Object(s.a)(l,2),i=r[0],o=r[1],u=c.a.useState(),p=Object(s.a)(u,2),b=p[0],f=p[1],g=function(){o(!1),f(void 0)},y=function(){var e=Object(m.a)(d.a.mark(function e(a){var t,l,r,c,i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("".concat(j,"/patients"),a);case 3:t=e.sent,l=t.data,n({type:"ADD_PATIENT",payload:l}),g(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error((null===(r=e.t0.response)||void 0===r?void 0:r.data)||"Unknown Error"),f((null===(c=e.t0.response)||void 0===c?void 0:null===(i=c.data)||void 0===i?void 0:i.error)||"Unknown error");case 13:case"end":return e.stop()}},e,null,[[0,9]])}));return function(a){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement(h.a,{textAlign:"center"},c.a.createElement("h3",null,"Patient list")),c.a.createElement(H.a,{celled:!0},c.a.createElement(H.a.Header,null,c.a.createElement(H.a.Row,null,c.a.createElement(H.a.HeaderCell,null,"Name"),c.a.createElement(H.a.HeaderCell,null,"Gender"),c.a.createElement(H.a.HeaderCell,null,"Occupation"),c.a.createElement(H.a.HeaderCell,null,"Health Rating"))),c.a.createElement(H.a.Body,null,Object.values(t).map(function(e){return c.a.createElement(H.a.Row,{key:e.id},c.a.createElement(H.a.Cell,null,c.a.createElement(v.b,{to:"/patient/".concat(e.id)},c.a.createElement("span",null,e.name))),c.a.createElement(H.a.Cell,null,e.gender),c.a.createElement(H.a.Cell,null,e.occupation),c.a.createElement(H.a.Cell,null,c.a.createElement(J,{showText:!1,rating:1})))}))),c.a.createElement(L,{modalOpen:i,onSubmit:y,error:b,onClose:g}),c.a.createElement(O.a,{onClick:function(){return o(!0)}},"Add New Patient"))},V=function(){var e=N(),a=Object(s.a)(e,2)[1];return c.a.useEffect(function(){E.a.get("".concat(j,"/ping")),function(){var e=Object(m.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat(j,"/patients"));case 3:t=e.sent,n=t.data,a({type:"SET_PATIENT_LIST",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}()()},[a]),c.a.createElement("div",{className:"App"},c.a.createElement(v.a,null,c.a.createElement(h.a,null,c.a.createElement(f.a,{as:"h1"},"Patientor"),c.a.createElement(O.a,{as:v.b,to:"/",primary:!0},"Home"),c.a.createElement(g.a,{hidden:!0}),c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/patient/:id"},c.a.createElement(A,null)),c.a.createElement(b.a,{path:"/"},c.a.createElement(U,null))))))};o.a.render(c.a.createElement(T,{reducer:function(e,a){switch(a.type){case"SET_PATIENT_LIST":return Object(w.a)(Object(w.a)({},e),{},{patients:Object(w.a)(Object(w.a)({},a.payload.reduce(function(e,a){return Object(w.a)(Object(w.a)({},e),{},Object(y.a)({},a.id,a))},{})),e.patients)});case"ADD_PATIENT":return Object(w.a)(Object(w.a)({},e),{},{patients:Object(w.a)(Object(w.a)({},e.patients),{},Object(y.a)({},a.payload.id,a.payload))});default:return e}}},c.a.createElement(V,null)),document.getElementById("root"))}},[[174,1,2]]]);
//# sourceMappingURL=main.64cc39e0.chunk.js.map