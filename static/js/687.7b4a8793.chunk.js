"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[687],{7459:function(s,a,e){e.d(a,{Z:function(){return i}});e(2791);var n="Button_button__wiIYs",r="Button_loadingButton__XvISg",c=e(3733),t=e(184),i=function(s){var a=s.loadMore,e=s.children,i=s.isLoading;return(0,t.jsx)(t.Fragment,{children:i?(0,t.jsx)("button",{className:(0,c.Z)(n,r),type:"button",disabled:!0,children:"Loading..."}):(0,t.jsx)("button",{className:n,type:"button",onClick:function(){return a()},children:e})})}},8010:function(s,a,e){e.d(a,{Z:function(){return R}});var n=e(9439),r="CarsListItem_carsListItem__qcu76",c="CarsListItem_carImg__N2L1k",t="CarsListItem_thumb__r0c3E",i="CarsListItem_carDataWrapper__OF6El",l="CarsListItem_carData__kOvlM",o="CarsListItem_model__CEToK",d="CarsListItem_carDetailsWrapper__JHhKU",u="CarsListItem_carDetails__oZnQU",m="CarsListItem_icon__Y5iU1",_="CarsListItem_container__A1OSY",x="CarsListItem_button__zMZyY",j=e(1213),h=e(9126),N=e(9434),p=e(8011),f=e(2791),C=e(3433),v="DetailsCar_modalContent__69Don",g="DetailsCar_carImg__InYMk",b="DetailsCar_carData__doYy9",D="DetailsCar_model__VjZj9",y="DetailsCar_carDetailsWrapper__1czlr",L="DetailsCar_carDetails__7z17V",k="DetailsCar_icon__jfsig",I="DetailsCar_description__EUEqT",Z="DetailsCar_accessories__HIPKR",B="DetailsCar_conditionWrapper__SJvHd",M="DetailsCar_condition__SblJ5",w="DetailsCar_blue__TqPoz",S="DetailsCar_button__OhDyV",E=e(184),F=function(s){var a=s.car,e=a.address.split(", "),r=(0,n.Z)(e,3),c=r[1],t=r[2],i=[].concat((0,C.Z)(a.accessories),(0,C.Z)(a.functionalities)),l=a.rentalConditions.split("\n"),o=a.mileage.toLocaleString("en-US");return(0,E.jsxs)("div",{className:v,children:[(0,E.jsx)("img",{className:g,src:a.img,alt:a.model}),(0,E.jsxs)("p",{className:b,children:[a.make," ",(0,E.jsx)("span",{className:D,children:null===a||void 0===a?void 0:a.model}),", ",null===a||void 0===a?void 0:a.year]}),(0,E.jsxs)("div",{className:y,children:[(0,E.jsx)("span",{className:L,children:c}),(0,E.jsx)(j.N6B,{className:k}),(0,E.jsx)("span",{className:L,children:t}),(0,E.jsx)(j.N6B,{className:k}),(0,E.jsxs)("span",{className:L,children:["Id: ",a.id]}),(0,E.jsx)(j.N6B,{className:k}),(0,E.jsxs)("span",{className:L,children:["Year: ",a.year]}),(0,E.jsx)(j.N6B,{className:k}),(0,E.jsxs)("span",{className:L,children:["Type: ",a.type]}),(0,E.jsx)(j.N6B,{className:k}),(0,E.jsxs)("span",{className:L,children:["Fuel Consumption: ",a.fuelConsumption]}),(0,E.jsx)(j.N6B,{className:k}),(0,E.jsxs)("span",{className:L,children:["Engine Size: ",a.engineSize]})]}),(0,E.jsx)("p",{className:I,children:a.description}),(0,E.jsx)("span",{className:Z,children:"Accessories and functionalities:"}),(0,E.jsx)("div",{className:y,children:i.map((function(s,a){return(0,E.jsxs)(f.Fragment,{children:[(0,E.jsx)("span",{className:L,children:s}),a!==i.length-1&&(0,E.jsx)(j.N6B,{className:k})]},a)}))}),(0,E.jsx)("span",{className:Z,children:"Rental Conditions:"}),(0,E.jsxs)("div",{className:B,children:[l.map((function(s,a){return(0,E.jsx)("span",{className:M,children:0===a?(0,E.jsxs)("span",{children:["Minimum age: ",(0,E.jsx)("span",{className:w,children:s})]}):s},a)})),(0,E.jsxs)("span",{className:M,children:["Milage: ",(0,E.jsx)("span",{className:w,children:o})]}),(0,E.jsxs)("span",{className:M,children:["Price: ",(0,E.jsx)("span",{className:w,children:a.rentalPrice})]})]}),(0,E.jsx)("a",{href:"tel:+380730000000",className:S,children:"Rental car"})]})},Y=e(630),P=e(245),z=e(7925),O=e(4164),T="Modal_overlay__r63M6",q="Modal_active__-p53x",U="Modal_modal__DJDMv",A="Modal_closeBtn__mlOa4",W="Modal_closing__0krBa",H=e(3733),J=document.querySelector("#modal-root");var G=function(s){var a=s.onClose,e=s.children,r=(0,f.useState)(!0),c=(0,n.Z)(r,2),t=c[0],i=c[1],l=(0,f.useCallback)((function(){i(!1),setTimeout((function(){a()}),300)}),[a]);return(0,f.useEffect)((function(){document.body.style.overflow="hidden";var s=function(s){"Escape"===s.code&&l()};return document.addEventListener("keydown",s),function(){document.body.style.overflow="auto",document.removeEventListener("keydown",s)}}),[l]),(0,O.createPortal)((0,E.jsx)(Y.a,{color:"white",backgroundOpacity:.35,blur:3,center:!0,fixed:!0,onMouseDown:function(s){s.target===s.currentTarget&&l()},className:(0,H.Z)(T,t&&q),children:(0,E.jsxs)(P.x,{className:(0,H.Z)(U,!t&&W),children:[(0,E.jsx)(z.P,{classNames:{root:A},onClick:l}),e]})}),J)},K=function(s){var a=s.onClose,e=s.car;return(0,E.jsx)(G,{onClose:a,children:(0,E.jsx)(F,{car:e})})},R=function(s){var a=s.car,e=(0,f.useState)(!1),C=(0,n.Z)(e,2),v=C[0],g=C[1],b=(0,N.v9)((function(s){return s.cars.selectedCars.includes(a.id)})),D=(0,N.I0)(),y=a.address.split(", "),L=(0,n.Z)(y,3),k=L[1],I=L[2];return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("li",{className:r,children:[(0,E.jsxs)("label",{className:_,children:[(0,E.jsx)("input",{type:"checkbox",checked:b,onChange:function(){D((0,p.hZ)(a.id))}}),b?(0,E.jsx)(h.PP_,{color:"#3470FF"}):(0,E.jsx)(h.bL$,{color:"white"})]}),(0,E.jsx)("img",{className:c,src:a.img,alt:a.model}),(0,E.jsx)("div",{className:t}),(0,E.jsxs)("div",{className:i,children:[(0,E.jsxs)("p",{className:l,children:[a.make," ",(0,E.jsx)("span",{className:o,children:null===a||void 0===a?void 0:a.model}),","," ",null===a||void 0===a?void 0:a.year]}),(0,E.jsx)("span",{className:l,children:a.rentalPrice})]}),(0,E.jsxs)("div",{className:d,children:[(0,E.jsx)("span",{className:u,children:k}),(0,E.jsx)(j.N6B,{className:m}),(0,E.jsx)("span",{className:u,children:I}),(0,E.jsx)(j.N6B,{className:m}),(0,E.jsx)("span",{className:u,children:a.rentalCompany}),(0,E.jsx)(j.N6B,{className:m}),(0,E.jsx)("span",{className:u,children:a.type}),(0,E.jsx)(j.N6B,{className:m}),(0,E.jsx)("span",{className:u,children:a.model}),(0,E.jsx)(j.N6B,{className:m}),(0,E.jsx)("span",{className:u,children:a.mileage})]}),(0,E.jsx)("button",{className:x,onClick:function(){g(!0)},children:"Learn more"})]}),v&&(0,E.jsx)(K,{onClose:function(){g(!1)},car:a})]})}},6979:function(s,a,e){e.r(a),e.d(a,{default:function(){return f}});var n=e(9439),r=e(2791),c=e(4382),t=e(8010),i=e(9434),l=e(6351),o="FavoriteCars_carsList__owgsc",d="FavoriteCars_buttonWrap__q6d1X",u="FavoriteCars_title__HaqAA",m="FavoriteCars_button__2xwO1",_=e(2526),x=e(7459),j=e(7689),h=e(184),N=function(){var s=(0,i.v9)(l.tu),a=(0,i.v9)(l.pY),e=(0,r.useState)(12),N=(0,n.Z)(e,2),p=N[0],f=N[1],C=(0,i.I0)(),v=(0,j.s0)();(0,r.useEffect)((function(){C((0,_.oT)())}),[C]);var g=s.filter((function(s){return a.includes(s.id)})),b=g.slice(0,p);return(0,h.jsxs)("div",{children:[0===b.length?(0,h.jsxs)("div",{className:d,children:[(0,h.jsxs)("h1",{className:u,children:["You have no selected cars. ",(0,h.jsx)("br",{})," Go to the catalog"]}),(0,h.jsx)("button",{className:m,onClick:function(){v("/catalog")},children:"Catalog"})]}):(0,h.jsx)(c.k,{rowGap:"50px",columnGap:"24px",justify:"center",align:"flex-start",direction:"row",wrap:"wrap",className:o,children:b.map((function(s){return(0,h.jsx)(t.Z,{car:s},s.id)}))}),p<g.length&&(0,h.jsx)(x.Z,{loadMore:function(){f((function(s){return s+12}))},style:{margin:"20px auto"},children:"Load More"})]})},p=e(3087),f=function(){return(0,h.jsx)(p.Z,{children:(0,h.jsx)(N,{})})}},6351:function(s,a,e){e.d(a,{AD:function(){return c},Mu:function(){return r},pY:function(){return l},tu:function(){return n},xU:function(){return t},zh:function(){return i}});var n=function(s){return s.cars.allCars},r=function(s){return s.cars.filteredCars},c=function(s){return s.cars.filter},t=function(s){return s.cars.isLoading},i=function(s){return s.cars.error},l=function(s){return s.cars.selectedCars}}}]);
//# sourceMappingURL=687.7b4a8793.chunk.js.map