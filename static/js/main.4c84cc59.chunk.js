(this["webpackJsonpfirts-react-app"]=this["webpackJsonpfirts-react-app"]||[]).push([[0],{38:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(2),r=a.n(n),s=a(30),i=a.n(s),l=(a(38),a(13)),o=a(4),j=a(8),b=a.n(j),d=a(15),u=a(14),h=function(){var e=Object(o.f)().id,t=r.a.useState([]),a=Object(u.a)(t,2),n=a[0],s=a[1];return r.a.useEffect((function(){(function(){var t=Object(d.a)(b.a.mark((function t(){var a,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/".concat(e));case 2:return a=t.sent,t.next=5,a.json();case 5:c=t.sent,console.log(c),s(c);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:n.name}),Object(c.jsx)("p",{children:n.team_bonus})]})},p=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Contacto"})})},x=a(22),m=a(32),v=a(26);a(46);v.a.initializeApp({apiKey:"AIzaSyACk9CWr3k3FI8s8jxSvbgEr8oxdhhXzzY",authDomain:"fir-photos-5e1e3.firebaseapp.com",projectId:"fir-photos-5e1e3",storageBucket:"fir-photos-5e1e3.appspot.com",messagingSenderId:"304709571565",appId:"1:304709571565:web:876e5e186f51f6c7aa0de4",measurementId:"G-XHFLT0QTNJ"});var O=function(){var e=r.a.useState(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],s=r.a.useState(""),i=Object(u.a)(s,2),l=i[0],o=i[1],j=r.a.useState([]),h=Object(u.a)(j,2),p=h[0],O=h[1],f=r.a.useState(null),g=Object(u.a)(f,2),N=g[0],k=g[1],C=r.a.useState(""),w=Object(u.a)(C,2),y=w[0],S=w[1],T=v.a.firestore(),E=function(){var e=Object(d.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),l.trim()){e.next=5;break}return console.log("Campo vacio"),k("El campo es obligatorio"),e.abrupt("return");case 5:return e.prev=5,e.next=8,T.collection("tareas").doc(y).update({name:l});case 8:a=p.map((function(e){return e.id===y?{id:e.id,fecha:e.fecha,name:l}:e})),O(a),n(!1),o(""),S(""),k(null),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[5,16]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(d.a)(b.a.mark((function e(t){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),l.trim()){e.next=5;break}return console.log("Campo vacio"),k("El campo es obligatorio"),e.abrupt("return");case 5:return e.prev=5,a={name:l,fecha:Date.now()},e.next=9,T.collection("tareas").add(a);case 9:c=e.sent,O([].concat(Object(m.a)(p),[Object(x.a)(Object(x.a)({},a),{},{id:c.id})])),o(""),k(null),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(d.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.collection("tareas").doc(t).delete();case 3:a=p.filter((function(e){return e.id!==t})),O(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return r.a.useState((function(){(function(){var e=Object(d.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.collection("tareas").get();case 3:t=e.sent,console.log(t.docs),a=t.docs.map((function(e){return Object(x.a)({id:e.id},e.data())})),console.log(a),O(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[a]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Crud Firebase"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-8",children:[Object(c.jsx)("h4",{className:"text-center",children:"Lista de Tareas"}),Object(c.jsx)("ul",{className:"list-group",children:0===p.length?Object(c.jsx)("li",{className:"list-group-item",children:Object(c.jsx)("strong",{children:"No hay tareas"})}):p.map((function(e){return Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("span",{className:"lead",children:e.name}),Object(c.jsxs)("button",{onClick:function(){return z(e.id)},className:"btn btn-sm btn-danger float-end mx-2",children:[Object(c.jsx)("i",{className:"far fa-trash-alt"})," Eliminar"]}),Object(c.jsxs)("button",{onClick:function(){return function(e){n(!0),o(e.name),S(e.id)}(e)},className:"btn btn-sm btn-warning float-end",children:[Object(c.jsx)("i",{className:"far fa-edit"})," Editar"]})]},e.id)}))})]}),Object(c.jsxs)("div",{className:"col-4",children:[Object(c.jsx)("h4",{className:"text-center",children:a?"Editar Tarea":"Agregar Tarea"}),Object(c.jsxs)("form",{noValidate:!0,onSubmit:a?E:I,children:[Object(c.jsx)("label",{htmlFor:"validationTarea",className:"form-label",children:"Tarea"}),Object(c.jsx)("input",{required:!0,id:"validationTarea",type:"text",className:"form-control mb-2",placeholder:"Ingrese Tarea",onChange:function(e){return o(e.target.value)},value:l}),N?Object(c.jsx)("div",{className:"text-danger",children:N}):null,Object(c.jsx)("div",{className:"d-grid gap-2",children:a?Object(c.jsxs)("button",{className:"btn btn-warning",type:"submit",children:[Object(c.jsx)("i",{className:"fas fa-edit"})," Editar"]}):Object(c.jsxs)("button",{className:"btn btn-dark",type:"submit",children:[Object(c.jsx)("i",{className:"fas fa-plus"})," Agregar"]})})]})]})]})]})},f=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Inicio"})})},g=function(){var e=r.a.useState([]),t=Object(u.a)(e,2),a=t[0],n=t[1];r.a.useEffect((function(){s()}),[]);var s=function(){var e=Object(d.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a.civilizations),n(a.civilizations);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Civilizaci\xf3n"}),Object(c.jsx)("hr",{}),Object(c.jsxs)("table",{className:"table table-hover table-striped my-4",children:[Object(c.jsx)("thead",{className:"table-dark",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Nombre Civilizaci\xf3n"}),Object(c.jsx)("th",{scope:"col",children:"Expansion"})]})}),Object(c.jsx)("tbody",{children:a.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)(l.b,{to:"/nosotros/".concat(e.id),children:e.name})}),Object(c.jsx)("td",{children:e.expansion})]},e.id)}))})]})]})},N=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-md",children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)(l.b,{to:"/",className:"navbar-brand",children:"Navbar"}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(c.jsxs)("ul",{className:"navbar-nav",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(l.c,{to:"/inicio",className:"nav-link",activeClassName:"active",children:"Inicio"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(l.c,{to:"/nosotros",className:"nav-link",activeClassName:"active",children:"Nosotros"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(l.c,{to:"/contacto",className:"nav-link",activeClassName:"active",children:"Contacto"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(l.c,{to:"/crudfirebase",className:"nav-link",activeClassName:"active",children:"CRUD Firebase"})})]})})]})}),Object(c.jsx)("div",{className:"container my-5",children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/nosotros",exact:!0,children:Object(c.jsx)(g,{})}),Object(c.jsx)(o.a,{path:"/nosotros/:id",children:Object(c.jsx)(h,{})}),Object(c.jsx)(o.a,{path:"/inicio",children:Object(c.jsx)(f,{})}),Object(c.jsx)(o.a,{path:"/contacto",children:Object(c.jsx)(p,{})}),Object(c.jsx)(o.a,{path:"/crudfirebase",children:Object(c.jsx)(O,{})}),Object(c.jsx)(o.a,{path:"/",exact:!0,children:Object(c.jsx)(f,{})})]})})]})})};var k=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("div",{children:Object(c.jsx)(N,{})})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),C()}},[[45,1,2]]]);
//# sourceMappingURL=main.4c84cc59.chunk.js.map