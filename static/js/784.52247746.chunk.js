"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[784],{8010:function(e,a,s){s.d(a,{Z:function(){return q}});var r=s(9439),n="CarsListItem_carsListItem__qcu76",i="CarsListItem_carImg__N2L1k",c="CarsListItem_carDataWrapper__OF6El",l="CarsListItem_carData__kOvlM",t="CarsListItem_model__CEToK",o="CarsListItem_carDetailsWrapper__JHhKU",d="CarsListItem_carDetails__oZnQU",u="CarsListItem_container__A1OSY",m="CarsListItem_button__zMZyY",x=s(1213),_=s(9126),h=s(9434),p=s(8011),j=s(2791),f=s(3433),N="DetailsCar_modalContent__69Don",g="DetailsCar_carImg__InYMk",v="DetailsCar_carData__doYy9",b="DetailsCar_model__VjZj9",C="DetailsCar_carDetailsWrapper__1czlr",y="DetailsCar_carDetails__7z17V",D="DetailsCar_description__EUEqT",L="DetailsCar_accessories__HIPKR",k="DetailsCar_conditionWrapper__SJvHd",w="DetailsCar_condition__SblJ5",B="DetailsCar_blue__TqPoz",M="DetailsCar_button__OhDyV",I=s(184),S=function(e){var a=e.car,s=a.address.split(", "),n=(0,r.Z)(s,3),i=n[1],c=n[2],l=[].concat((0,f.Z)(a.accessories),(0,f.Z)(a.functionalities)),t=a.rentalConditions.split("\n"),o=a.mileage.toLocaleString("en-US");return(0,I.jsxs)("div",{className:N,children:[(0,I.jsx)("img",{className:g,src:a.img,alt:a.model}),(0,I.jsxs)("p",{className:v,children:[a.make," ",(0,I.jsx)("span",{className:b,children:null===a||void 0===a?void 0:a.model}),", ",null===a||void 0===a?void 0:a.year]}),(0,I.jsxs)("div",{className:C,children:[(0,I.jsx)("span",{className:y,children:i}),(0,I.jsx)(x.N6B,{color:"rgba(18, 20, 23, 0.10)"}),(0,I.jsx)("span",{className:y,children:c}),(0,I.jsx)(x.N6B,{color:"rgba(18, 20, 23, 0.10)"}),(0,I.jsxs)("span",{className:y,children:["Id: ",a.id]}),(0,I.jsx)(x.N6B,{color:"rgba(18, 20, 23, 0.10)"}),(0,I.jsxs)("span",{className:y,children:["Year: ",a.year]}),(0,I.jsx)(x.N6B,{color:"rgba(18, 20, 23, 0.10)"}),(0,I.jsxs)("span",{className:y,children:["Type: ",a.type]}),(0,I.jsx)(x.N6B,{color:"rgba(18, 20, 23, 0.10)"}),(0,I.jsxs)("span",{className:y,children:["Fuel Consumption: ",a.fuelConsumption]}),(0,I.jsx)(x.N6B,{color:"rgba(18, 20, 23, 0.10)"}),(0,I.jsxs)("span",{className:y,children:["Engine Size: ",a.engineSize]})]}),(0,I.jsx)("p",{className:D,children:a.description}),(0,I.jsx)("span",{className:L,children:"Accessories and functionalities:"}),(0,I.jsx)("div",{className:C,children:l.map((function(e,a){return(0,I.jsxs)(j.Fragment,{children:[(0,I.jsx)("span",{className:y,children:e}),a!==l.length-1&&(0,I.jsx)(x.N6B,{color:"rgba(18, 20, 23, 0.10)"})]},a)}))}),(0,I.jsx)("span",{className:L,children:"Rental Conditions:"}),(0,I.jsxs)("div",{className:k,children:[t.map((function(e,a){return(0,I.jsx)("span",{className:w,children:0===a?(0,I.jsxs)("span",{children:["Minimum age: ",(0,I.jsx)("span",{className:B,children:e})]}):e},a)})),(0,I.jsxs)("span",{className:w,children:["Milage: ",(0,I.jsx)("span",{className:B,children:o})]}),(0,I.jsxs)("span",{className:w,children:["Price: ",(0,I.jsx)("span",{className:B,children:a.rentalPrice})]})]}),(0,I.jsx)("a",{href:"tel:+380730000000",className:M,children:"Rental car"})]})},F=s(630),z=s(245),P=s(662),W=s(4164),Z="Modal_overlay__r63M6",A="Modal_active__-p53x",E="Modal_modal__DJDMv",T="Modal_closeBtn__mlOa4",U="Modal_closing__0krBa",Y=s(3733),H=document.querySelector("#modal-root");var O=function(e){var a=e.onClose,s=e.children,n=(0,j.useState)(!0),i=(0,r.Z)(n,2),c=i[0],l=i[1],t=(0,j.useCallback)((function(){l(!1),setTimeout((function(){a()}),300)}),[a]);return(0,j.useEffect)((function(){document.body.style.overflow="hidden";var e=function(e){"Escape"===e.code&&t()};return document.addEventListener("keydown",e),function(){document.body.style.overflow="auto",document.removeEventListener("keydown",e)}}),[t]),(0,W.createPortal)((0,I.jsx)(F.a,{color:"white",backgroundOpacity:.35,blur:3,center:!0,fixed:!0,onMouseDown:function(e){e.target===e.currentTarget&&t()},className:(0,Y.Z)(Z,c&&A),children:(0,I.jsxs)(z.x,{className:(0,Y.Z)(E,!c&&U),children:[(0,I.jsx)(P.P,{classNames:{root:T},onClick:t}),s]})}),H)},R=function(e){var a=e.onClose,s=e.car;return(0,I.jsx)(O,{onClose:a,children:(0,I.jsx)(S,{car:s})})},q=function(e){var a=e.car,s=(0,j.useState)(!1),f=(0,r.Z)(s,2),N=f[0],g=f[1],v=(0,h.v9)((function(e){return e.cars.selectedCars.includes(a.id)})),b=(0,h.I0)(),C=a.address.split(", "),y=(0,r.Z)(C,3),D=y[1],L=y[2];return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("li",{className:n,children:[(0,I.jsxs)("label",{className:u,children:[(0,I.jsx)("input",{type:"checkbox",checked:v,onChange:function(){b((0,p.h)(a.id))}}),v?(0,I.jsx)(_.PP_,{color:"#3470FF"}):(0,I.jsx)(_.bL$,{color:"white"})]}),(0,I.jsx)("img",{className:i,src:a.img,alt:a.model}),(0,I.jsxs)("div",{className:c,children:[(0,I.jsxs)("p",{className:l,children:[a.make," ",(0,I.jsx)("span",{className:t,children:null===a||void 0===a?void 0:a.model}),","," ",null===a||void 0===a?void 0:a.year]}),(0,I.jsx)("span",{className:l,children:a.rentalPrice})]}),(0,I.jsxs)("div",{className:o,children:[(0,I.jsx)("span",{className:d,children:D}),(0,I.jsx)(x.N6B,{color:"rgba(18, 20, 23, 0.10)"}),(0,I.jsx)("span",{className:d,children:L}),(0,I.jsx)(x.N6B,{color:"rgba(18, 20, 23, 0.10)"}),(0,I.jsx)("span",{className:d,children:a.rentalCompany}),(0,I.jsx)(x.N6B,{color:"rgba(18, 20, 23, 0.10)"}),(0,I.jsx)("span",{className:d,children:a.type}),(0,I.jsx)(x.N6B,{color:"rgba(18, 20, 23, 0.10)"}),(0,I.jsx)("span",{className:d,children:a.model}),(0,I.jsx)(x.N6B,{color:"rgba(18, 20, 23, 0.10)"}),(0,I.jsx)("span",{className:d,children:a.mileage})]}),(0,I.jsx)("button",{className:m,onClick:function(){g(!0)},children:"Learn more"})]}),N&&(0,I.jsx)(R,{onClose:function(){g(!1)},car:a})]})}},784:function(e,a,s){s.r(a),s.d(a,{default:function(){return v}});var r=s(7606),n="BrandFilter_filterWrap__za+jP",i="BrandFilter_button__IyioT",c=s(9434),l=s(6895),t=s(6351),o=s(184),d=["All","Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"].map((function(e){return e})),u=function(){var e=(0,c.I0)(),a=(0,c.v9)(t.AD);return(0,o.jsxs)("div",{className:n,children:[(0,o.jsx)(r.P,{label:"Car brand",placeholder:a||"Pick brand",data:d,withScrollArea:!1,onChange:function(a){e("All"===a?(0,l.h)(""):(0,l.h)(a))},styles:{dropdown:{maxHeight:200,overflowY:"auto",borderRadius:"14px",border:"1px solid rgba(18, 20, 23, 0.05)",background:"#FFF",boxShadow:"0px 4px 36px 0px rgba(0, 0, 0, 0.02)"},input:{height:"44px",borderRadius:"14px",background:"#F7F7FB",border:"none",color:"#121417",fontSize:"18px",fontFamily:"Manrope",fontWeight:"500"},wrapper:{width:"224px"},label:{color:"#8A8A89",fontSize:"14px",fontWeight:"500",marginBottom:"5px"},option:{color:"rgba(18, 20, 23, 0.20)",fontSize:"16px",fontWeight:"500",lineHeight:"20px"}}}),(0,o.jsx)("button",{className:i,children:"Search"})]})},m=s(8010),x="CarsList_carsList__PSLgy",_=s(4382),h=function(){var e=(0,c.v9)(t.Wz),a=(0,c.v9)(t.AD),s=function(){var s=a.toLowerCase();return e.filter((function(e){return e.make.toLowerCase().includes(s)}))}();return(0,o.jsx)(_.k,{rowGap:"50px",columnGap:"24px",justify:"center",align:"flex-start",direction:"row",wrap:"wrap",className:x,children:s.map((function(e){return(0,o.jsx)(m.Z,{car:e},e.id)}))})},p=s(8027),j="Loader_loaderWrap__NiYjU",f=function(){return(0,o.jsx)("div",{className:j,children:(0,o.jsx)(p.g4,{height:"80",width:"80",radius:"9",color:"#3470FF",ariaLabel:"three-dots-loading",visible:!0})})},N=s(2791),g=s(2526),v=function(){var e=(0,c.I0)(),a=(0,c.v9)(t.xU),s=(0,c.v9)(t.zh),r=(0,c.v9)(t.Wz);return(0,N.useEffect)((function(){e((0,g.c)())}),[e]),(0,o.jsxs)("div",{children:[a&&!s&&(0,o.jsx)(f,{}),(0,o.jsx)(u,{}),(null===r||void 0===r?void 0:r.length)>0?(0,o.jsx)(h,{}):(0,o.jsx)("p",{children:"There aren't any cars"})]})}},6351:function(e,a,s){s.d(a,{AD:function(){return n},Wz:function(){return r},pY:function(){return l},xU:function(){return i},zh:function(){return c}});var r=function(e){return e.cars.cars},n=function(e){return e.filter},i=function(e){return e.cars.isLoading},c=function(e){return e.cars.error},l=function(e){return e.cars.selectedCars}}}]);
//# sourceMappingURL=784.52247746.chunk.js.map