"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[580],{8580:(A,s,e)=>{e.r(s),e.d(s,{default:()=>p});var t=e(5043),a=e(4516),r=e(7067),l=e(3592),o=e(5215),n=e(4441);const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAYAAAB2pebxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEVSURBVHgBrZPPTcMwFMbf50QV4sQKXBCcCBO4bAITABuUDdiAESATkLYDwA21p27Q5FopfnWspHq2HLVp+7v4/fPn92IHFPA/Hj8p5hcQlWHOGJPfzucftI+l1j99uYXWv7E4bOLLnnrVBZgos/5frDiWu5lOHyFG+KQBGOb3u9ls0tiKzoATUXVdDt0I5tITMSLQ4nxmzu3yLWMdLHwnkqSpV2Cv8s0uKwBre0DVBp89kSTxRerImwgJu0XYyak4kYsDOgmpw06ui2KwyOVms/ZEjqEajaqYyKozEuCexK/QkCqlpf8guk8pAgOvrZkpwIkZYEI9SJHYd8l69nm1u3Ew7IbiInyCyG4cO3Pz1HM6jEI6W45DY97bPS8HAAAAAElFTkSuQmCC";var c=e(9883),d=e(2675),m=e(3637),x=e(579);const u={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"75%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function p(){const{cart:A,getTotalPrice:s,removeFromCart:e,increaseQuantity:p,decreaseQuantity:h}=(0,t.useContext)(n.M),[g,j]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{console.log("Cart items:",A)}),[A]),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(o.A,{open:()=>j(!0),onClose:()=>j(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,x.jsxs)(a.A,{sx:u,children:[(0,x.jsx)(l.A,{id:"modal-modal-title",variant:"h6",component:"h2",fontFamily:"Taviraj",className:"row",children:0===A.length?(0,x.jsx)("p",{children:"No items in the cart."}):A.map((A=>(0,x.jsxs)("div",{className:"row mt-2",children:[(0,x.jsxs)("div",{className:"col-5 flex mt-3 gap-2",children:[" ",(0,x.jsx)("img",{className:"w-32 bg-[#F1DDC9]",src:A.thumbnail,alt:A.title}),(0,x.jsxs)("div",{className:"col-4 text-center ",children:[" ",(0,x.jsxs)("p",{className:"text-sm",children:[" ",A.title]})," ",(0,x.jsxs)("p",{children:[" RP ",A.price]})," "]})]}),(0,x.jsxs)("div",{className:" col text-end gap-0  ",children:[(0,x.jsxs)("div",{className:" flex justify-end flex-col  mt-2",children:[(0,x.jsx)("label",{for:"formControlInput",class:"form-label text-sm",children:"Select Packaging"}),(0,x.jsx)("input",{class:"form-control w-50 ms-auto ",id:"formControlInput"})]}),(0,x.jsxs)("div",{className:"mt-2 pt-5 flex justify-end",children:[(0,x.jsx)("button",{onClick:()=>h(A.id),className:"bg-transparent py-3 border-2 border-gray-400 px-2  transform transition-transform duration-300 ease-in-out hover:scale-110",children:(0,x.jsx)(m.A,{src:d,alt:"minus"})}),(0,x.jsx)("span",{className:"mx-1 mt-2",children:A.quantity}),(0,x.jsx)("button",{onClick:()=>p(A.id),className:"bg-custom-red py-2 px-2  transform transition-transform duration-300 ease-in-out hover:scale-110 ",children:(0,x.jsx)(m.A,{src:c,alt:"plus"})}),(0,x.jsxs)("h5",{className:"mx-3 mt-2",children:[" RP ",s().toFixed(2)]}),(0,x.jsxs)("button",{onClick:()=>e(A.id),children:[" ",(0,x.jsx)("img",{className:"border-1 border-custom-red p-2",src:i,alt:i})]})]})]})]},A.id)))}),(0,x.jsx)("hr",{}),(0,x.jsxs)(l.A,{id:"modal-modal-description",sx:{mt:2},children:[(0,x.jsxs)("div",{className:" flex justify-start  ",children:[(0,x.jsx)("label",{for:"formControlInput ",class:"form-label text-sm",children:"Kode Promo"}),(0,x.jsx)("input",{class:"form-control w-25 bg-white me-auto ms-2  ",id:"formControlInput"})]}),(0,x.jsx)("div",{className:"col text-end font-taviraj",children:(0,x.jsxs)("h5",{children:["Subtotal: RP ",s().toFixed(2)," "]})})]}),(0,x.jsx)(r.A,{className:"w-full text-white",style:{background:"rgba(216, 71, 39, 1)",fontFamily:"Taviraj"},href:"/CheckOut",children:"CheckOut"})]})})})}},2675:A=>{A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAACCAYAAABR7VzxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAaSURBVHgBpcAxAQAAAAFBhP5ZdCGcgeoQnQbxhgHm1HXDCAAAAABJRU5ErkJggg=="},9883:A=>{A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA7SURBVHgB7ZLBCQAwCAPTLtbVulonSyn0HR/qQ/BA/MghJICA5H6jbiactCBAMIyY1t8HWR9IukhVBBdNIRKNmDyuDwAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=580.aa4e574f.chunk.js.map