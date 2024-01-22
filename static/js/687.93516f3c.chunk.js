"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[687],{7459:function(s,e,a){a.d(e,{Z:function(){return i}});a(2791);var n="Button_button__wiIYs",r="Button_loadingButton__XvISg",t=a(3733),c=a(184),i=function(s){var e=s.loadMore,a=s.children,i=s.isLoading;return(0,c.jsx)(c.Fragment,{children:i?(0,c.jsx)("button",{className:(0,t.Z)(n,r),type:"button",disabled:!0,children:"Loading..."}):(0,c.jsx)("button",{className:n,type:"button",onClick:function(){return e()},children:a})})}},5375:function(s,e,a){a.d(e,{Z:function(){return X}});var n=a(9439),r="CarsListItem_carImg__N2L1k",t="CarsListItem_thumb__r0c3E",c="CarsListItem_carDataWrapper__OF6El",i="CarsListItem_carData__kOvlM",l="CarsListItem_model__CEToK",o="CarsListItem_carDetailsWrapper__JHhKU",d="CarsListItem_carDetails__oZnQU",u="CarsListItem_icon__Y5iU1",m="CarsListItem_container__A1OSY",_="CarsListItem_button__zMZyY",x=a(1213),h=a(9126),j=a(9434),p=a(8011),N=a(2791),f=a(3433),v="DetailsCar_modalContent__69Don",C="DetailsCar_carImg__InYMk",g="DetailsCar_carData__doYy9",y="DetailsCar_model__VjZj9",b="DetailsCar_carDetailsWrapper__1czlr",D="DetailsCar_carDetails__7z17V",k="DetailsCar_icon__jfsig",L="DetailsCar_description__EUEqT",Z="DetailsCar_accessories__HIPKR",I="DetailsCar_conditionWrapper__SJvHd",w="DetailsCar_condition__SblJ5",B="DetailsCar_blue__TqPoz",M="DetailsCar_button__OhDyV",E=a(184),S=function(s){var e=s.car,a=e.address.split(", "),r=(0,n.Z)(a,3),t=r[1],c=r[2],i=[].concat((0,f.Z)(e.accessories),(0,f.Z)(e.functionalities)),l=e.rentalConditions.split("\n"),o=e.mileage.toLocaleString("en-US");return(0,E.jsxs)("div",{className:v,children:[(0,E.jsx)("img",{className:C,src:e.img,alt:e.model}),(0,E.jsxs)("p",{className:g,children:[e.make," ",(0,E.jsx)("span",{className:y,children:null===e||void 0===e?void 0:e.model}),", ",null===e||void 0===e?void 0:e.year]}),(0,E.jsxs)("div",{className:b,children:[(0,E.jsx)("span",{className:D,children:t}),(0,E.jsx)(x.N6B,{className:k}),(0,E.jsx)("span",{className:D,children:c}),(0,E.jsx)(x.N6B,{className:k}),(0,E.jsxs)("span",{className:D,children:["Id: ",e.id]}),(0,E.jsx)(x.N6B,{className:k}),(0,E.jsxs)("span",{className:D,children:["Year: ",e.year]}),(0,E.jsx)(x.N6B,{className:k}),(0,E.jsxs)("span",{className:D,children:["Type: ",e.type]}),(0,E.jsx)(x.N6B,{className:k}),(0,E.jsxs)("span",{className:D,children:["Fuel Consumption: ",e.fuelConsumption]}),(0,E.jsx)(x.N6B,{className:k}),(0,E.jsxs)("span",{className:D,children:["Engine Size: ",e.engineSize]})]}),(0,E.jsx)("p",{className:L,children:e.description}),(0,E.jsx)("span",{className:Z,children:"Accessories and functionalities:"}),(0,E.jsx)("div",{className:b,children:i.map((function(s,e){return(0,E.jsxs)(N.Fragment,{children:[(0,E.jsx)("span",{className:D,children:s}),e!==i.length-1&&(0,E.jsx)(x.N6B,{className:k})]},e)}))}),(0,E.jsx)("span",{className:Z,children:"Rental Conditions:"}),(0,E.jsxs)("div",{className:I,children:[l.map((function(s,e){return(0,E.jsx)("span",{className:w,children:0===e?(0,E.jsxs)("span",{children:["Minimum age: ",(0,E.jsx)("span",{className:B,children:s})]}):s},e)})),(0,E.jsxs)("span",{className:w,children:["Milage: ",(0,E.jsx)("span",{className:B,children:o})]}),(0,E.jsxs)("span",{className:w,children:["Price: ",(0,E.jsx)("span",{className:B,children:e.rentalPrice})]})]}),(0,E.jsx)("a",{href:"tel:+380730000000",className:M,children:"Rental car"})]})},Y=a(630),F=a(245),P=a(7925),O=a(4164),z="Modal_overlay__r63M6",T="Modal_active__-p53x",U="Modal_modal__DJDMv",q="Modal_closeBtn__mlOa4",A="Modal_closing__0krBa",W=a(3733),H=document.querySelector("#modal-root");var J=function(s){var e=s.onClose,a=s.children,r=(0,N.useState)(!0),t=(0,n.Z)(r,2),c=t[0],i=t[1],l=(0,N.useCallback)((function(){i(!1),setTimeout((function(){e()}),300)}),[e]);return(0,N.useEffect)((function(){document.body.style.overflow="hidden";var s=function(s){"Escape"===s.code&&l()};return document.addEventListener("keydown",s),function(){document.body.style.overflow="auto",document.removeEventListener("keydown",s)}}),[l]),(0,O.createPortal)((0,E.jsx)(Y.a,{color:"white",backgroundOpacity:.35,blur:3,center:!0,fixed:!0,onMouseDown:function(s){s.target===s.currentTarget&&l()},className:(0,W.Z)(z,c&&T),children:(0,E.jsxs)(F.x,{className:(0,W.Z)(U,!c&&A),children:[(0,E.jsx)(P.P,{classNames:{root:q},onClick:l}),a]})}),H)},R=function(s){var e=s.onClose,a=s.car;return(0,E.jsx)(J,{onClose:e,children:(0,E.jsx)(S,{car:a})})},G=a(9015),K=a(3441),V=function(s){var e=s.children,a=s.style,r=(0,K.YD)({triggerOnce:!0,threshold:.2}),t=(0,n.Z)(r,2),c=t[0],i=t[1];return(0,E.jsx)(G.E.li,{ref:c,style:a,initial:"hidden",animate:i?"visible":"hidden",variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0}},children:e})},X=function(s){var e=s.car,a=(0,N.useState)(!1),f=(0,n.Z)(a,2),v=f[0],C=f[1],g=(0,j.v9)((function(s){return s.cars.selectedCars.includes(e.id)})),y=(0,j.I0)(),b=e.address.split(", "),D=(0,n.Z)(b,3),k=D[1],L=D[2];return(0,E.jsxs)(V,{style:{position:"relative",width:"274px",overflow:"hidden",borderRadius:"12px"},children:[(0,E.jsxs)("label",{className:m,children:[(0,E.jsx)("input",{type:"checkbox",checked:g,onChange:function(){y((0,p.hZ)(e.id))}}),g?(0,E.jsx)(h.PP_,{color:"#3470FF"}):(0,E.jsx)(h.bL$,{color:"white"})]}),(0,E.jsx)("img",{className:r,src:e.img,alt:e.model}),(0,E.jsx)("div",{className:t}),(0,E.jsxs)("div",{className:c,children:[(0,E.jsxs)("p",{className:i,children:[e.make," ",(0,E.jsx)("span",{className:l,children:null===e||void 0===e?void 0:e.model}),","," ",null===e||void 0===e?void 0:e.year]}),(0,E.jsx)("span",{className:i,children:e.rentalPrice})]}),(0,E.jsxs)("div",{className:o,children:[(0,E.jsx)("span",{className:d,children:k}),(0,E.jsx)(x.N6B,{className:u}),(0,E.jsx)("span",{className:d,children:L}),(0,E.jsx)(x.N6B,{className:u}),(0,E.jsx)("span",{className:d,children:e.rentalCompany}),(0,E.jsx)(x.N6B,{className:u}),(0,E.jsx)("span",{className:d,children:e.type}),(0,E.jsx)(x.N6B,{className:u}),(0,E.jsx)("span",{className:d,children:e.model}),(0,E.jsx)(x.N6B,{className:u}),(0,E.jsx)("span",{className:d,children:e.mileage})]}),(0,E.jsx)("button",{className:_,onClick:function(){C(!0)},children:"Learn more"}),v&&(0,E.jsx)(R,{onClose:function(){C(!1)},car:e})]})}},6979:function(s,e,a){a.r(e),a.d(e,{default:function(){return f}});var n=a(9439),r=a(2791),t=a(4382),c=a(5375),i=a(9434),l=a(6351),o="FavoriteCars_carsList__owgsc",d="FavoriteCars_buttonWrap__q6d1X",u="FavoriteCars_title__HaqAA",m="FavoriteCars_button__2xwO1",_=a(2526),x=a(7459),h=a(7689),j=a(184),p=function(){var s=(0,i.v9)(l.tu),e=(0,i.v9)(l.pY),a=(0,r.useState)(12),p=(0,n.Z)(a,2),N=p[0],f=p[1],v=(0,i.I0)(),C=(0,h.s0)();(0,r.useEffect)((function(){v((0,_.oT)())}),[v]);var g=s.filter((function(s){return e.includes(s.id)})),y=g.slice(0,N);return(0,j.jsxs)("div",{children:[0===y.length?(0,j.jsxs)("div",{className:d,children:[(0,j.jsxs)("h1",{className:u,children:["You have no selected cars. ",(0,j.jsx)("br",{})," Go to the catalog"]}),(0,j.jsx)("button",{className:m,onClick:function(){C("/catalog")},children:"Catalog"})]}):(0,j.jsx)(t.k,{rowGap:"50px",columnGap:"24px",justify:"center",align:"flex-start",direction:"row",wrap:"wrap",className:o,children:y.map((function(s){return(0,j.jsx)(c.Z,{car:s},s.id)}))}),N<g.length&&(0,j.jsx)(x.Z,{loadMore:function(){f((function(s){return s+12}))},style:{margin:"20px auto"},children:"Load More"})]})},N=a(3087),f=function(){return(0,j.jsx)(N.Z,{children:(0,j.jsx)(p,{})})}},6351:function(s,e,a){a.d(e,{AD:function(){return t},Mu:function(){return r},pY:function(){return l},tu:function(){return n},xU:function(){return c},zh:function(){return i}});var n=function(s){return s.cars.allCars},r=function(s){return s.cars.filteredCars},t=function(s){return s.cars.filter},c=function(s){return s.cars.isLoading},i=function(s){return s.cars.error},l=function(s){return s.cars.selectedCars}}}]);
//# sourceMappingURL=687.93516f3c.chunk.js.map