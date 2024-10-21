"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[565],{2565:(e,r,s)=>{s.r(r),s.d(r,{default:()=>h});var l=s(5043),a=s(4282),i=s(3519),d=s(1072),n=s(8602),o=s(8628),t=s(3814),c=s(3216),x=s(4441),p=s(579);function h(){const{getTotalPrice:e}=(0,l.useContext)(x.M),[r,s]=(0,l.useState)({username:"",email:"",password:"",confirmPassword:""}),[h,m]=(0,l.useState)({}),b=e=>{const{name:l,value:a}=e.target;s({...r,[l]:a})},j=(0,c.Zp)();return(0,p.jsx)(i.A,{className:"mt-16",style:{fontFamily:"Taviraj"},children:(0,p.jsxs)(d.A,{className:"w-10/12 mx-auto",children:[(0,p.jsx)(n.A,{children:(0,p.jsx)(o.A,{className:"border-0 rounded-none p-3",children:(0,p.jsxs)(o.A.Body,{children:[(0,p.jsxs)(o.A.Title,{children:[" ",(0,p.jsx)("h3",{children:"Detail Order"})]}),(0,p.jsxs)(o.A.Text,{className:"row mt-5",children:[(0,p.jsxs)(n.A,{children:[(0,p.jsx)("p",{children:" Subtotal"}),(0,p.jsx)("p",{children:"Shipping Cost"}),(0,p.jsx)("p",{children:"Promo Code"}),(0,p.jsx)("p",{children:"Packaging"})]}),(0,p.jsxs)(n.A,{children:[(0,p.jsxs)("p",{children:["RP ",e().toFixed(2)]}),(0,p.jsx)("p",{children:"RP  000"}),(0,p.jsx)("p",{children:"\u0640\u0640\u0640\u0640"}),(0,p.jsx)("p",{children:"RP  000"})]}),(0,p.jsx)("hr",{className:" border-2 mt-4"})]}),(0,p.jsxs)(d.A,{children:[(0,p.jsx)(n.A,{children:(0,p.jsx)("p",{children:"Grand Total"})}),(0,p.jsx)(n.A,{children:(0,p.jsxs)("p",{children:["RP ",e().toFixed(2)]})})]})]})})}),(0,p.jsx)(n.A,{children:(0,p.jsx)(o.A,{className:"border-0 rounded-none p-3",children:(0,p.jsxs)(o.A.Body,{children:[(0,p.jsxs)(o.A.Title,{children:[" ",(0,p.jsx)("h3",{children:"Billing Address"})]}),(0,p.jsx)(o.A.Text,{children:(0,p.jsxs)(t.A,{onSubmit:e=>{e.preventDefault();const s={};r.username.trim()||(s.username="Username is required"),r.email.trim()?/\S+@\S+\.\S+/.test(r.email)||(s.email="Email is not valid"):s.email="Email is required",null===!r.phoneNumber&&(s.phoneNumber="Invalid phone number format"),null===!r.shippingAdress&&(s.shippingAddress="Shipping Adress is required"),null===!r.zipCode&&(s.zipCode="Zip Code is required"),m(s),0===Object.keys(s).length&&j("/Payment",{state:{formData:r}})},children:[(0,p.jsxs)(t.A.Group,{className:"mb-3 mt-5",controlId:"formBasicFullName",children:[(0,p.jsx)(t.A.Label,{children:"FullName"}),(0,p.jsx)(t.A.Control,{type:"text",name:"username",onChange:b,placeholder:"Ex: Rasyidin Arsyad Nasution",style:{borderTop:"0px",borderLeft:"0px",borderRight:"0px",borderRadius:"0px"}}),h.username&&(0,p.jsx)("span",{className:"text-black text-sm bg-red-200 px-5",children:h.username})]}),(0,p.jsxs)(t.A.Group,{className:"mb-3 mt-4",controlId:"formBasicEmail",children:[(0,p.jsx)(t.A.Label,{children:"Email Address"}),(0,p.jsx)(t.A.Control,{type:"email",name:"email",onChange:b,placeholder:"Ex: rasyid.arsyad@gmail.com",style:{borderTop:"0px",borderLeft:"0px",borderRight:"0px",borderRadius:"0px"}}),h.email&&(0,p.jsx)("span",{className:"text-black text-sm bg-red-200 px-5",children:h.email})]}),(0,p.jsxs)(t.A.Group,{className:"mb-3 mt-4",controlId:"formBasicphone",children:[(0,p.jsx)(t.A.Label,{children:"Phone Number"}),(0,p.jsx)(t.A.Control,{type:"text",name:"phoneNumber",onChange:b,placeholder:"Ex: 089111888999",style:{borderTop:"0px",borderLeft:"0px",borderRight:"0px",borderRadius:"0px"}}),h.phoneNumber&&(0,p.jsx)("span",{className:"text-black text-sm bg-red-200 px-5",children:h.phoneNumber})]}),(0,p.jsxs)(t.A.Group,{className:"mb-3 mt-4",controlId:"formBasicAdress",children:[(0,p.jsx)(t.A.Label,{children:"Shipping Address"}),(0,p.jsx)(t.A.Control,{type:"text",name:"shippingAddress",onChange:b,placeholder:"Ex: Patriot Street Number 666, Ngaklik, Sleman",style:{borderTop:"0px",borderLeft:"0px",borderRight:"0px",borderRadius:"0px"}}),h.shippingAddress&&(0,p.jsx)("span",{className:"text-black text-sm bg-red-200 px-5",children:h.shippingAddress})]}),(0,p.jsxs)(t.A.Group,{className:"mb-3 mt-4",controlId:"formBasicCountry",children:[(0,p.jsx)(t.A.Label,{children:"Country"}),(0,p.jsxs)(t.A.Select,{"aria-label":"Default select example",style:{borderTop:"0px",borderLeft:"0px",borderRight:"0px",borderRadius:"0px"},children:[(0,p.jsx)("option",{children:"United State of America (USA)"}),(0,p.jsx)("option",{value:"Egypt",children:"Egypt"}),(0,p.jsx)("option",{value:"Saudi Arabia",children:"Saudi Arabia"}),(0,p.jsx)("option",{value:"Emirates",children:"Emirates"})]})]}),(0,p.jsxs)(t.A.Group,{className:"mb-3 mt-4",controlId:"formBasicAdress",children:[(0,p.jsx)(t.A.Label,{children:"State/Province"}),(0,p.jsxs)(t.A.Select,{"aria-label":"Default select example",style:{borderTop:"0px",borderLeft:"0px",borderRight:"0px",borderRadius:"0px"},children:[(0,p.jsx)("option",{children:"California"}),(0,p.jsx)("option",{value:"Cairo",children:"Cairo"}),(0,p.jsx)("option",{value:"Mekka",children:"Makka"}),(0,p.jsx)("option",{value:"Dubai",children:"Dubai"})]})]}),(0,p.jsx)(t.A.Group,{className:"mb-3 mt-4",controlId:"formBasicAdress",children:(0,p.jsxs)(d.A,{children:[(0,p.jsxs)(n.A,{children:[(0,p.jsx)(t.A.Label,{children:"City"}),(0,p.jsxs)(t.A.Select,{className:"col","aria-label":"Default select example",style:{borderTop:"0px",borderLeft:"0px",borderRight:"0px",borderRadius:"0px"},children:[(0,p.jsx)("option",{children:"San Francisco"}),(0,p.jsx)("option",{value:"Helwan",children:"Helwan"}),(0,p.jsx)("option",{value:"Saudi Arabia",children:"Jeddah"}),(0,p.jsx)("option",{value:"Emirates",children:"Al Sufouh"})]})]}),(0,p.jsxs)(n.A,{children:[(0,p.jsx)(t.A.Label,{children:"Zip Code"}),(0,p.jsx)(t.A.Control,{className:"col",onChange:b,type:"zipcode",placeholder:"Ex: 94024",style:{borderTop:"0px",borderLeft:"0px",borderRight:"0px",borderRadius:"0px"}}),h.zipCode&&(0,p.jsx)("span",{className:"text-black bg-red-200 text-sm px-2",children:h.zipCode})]})]})}),(0,p.jsxs)(t.A.Group,{className:"mb-3 mt-4",controlId:"formBasicAdress",children:[(0,p.jsx)(t.A.Label,{children:"Choose Courier"}),(0,p.jsxs)(t.A.Select,{"aria-label":"Default select example",style:{borderTop:"0px",borderLeft:"0px",borderRight:"0px",borderRadius:"0px"},children:[(0,p.jsx)("option",{children:"DHL"}),(0,p.jsx)("option",{value:"FedEx",children:"FedEx"}),(0,p.jsx)("option",{value:"Aramix",children:"Aramix"}),(0,p.jsx)("option",{value:"Blue Dart",children:"Blue Dart"})]})]}),(0,p.jsx)(d.A,{className:"my-4 p-2  ",children:(0,p.jsxs)("div",{className:" flex gap-3",children:[(0,p.jsx)(n.A,{children:(0,p.jsx)(a.A,{href:"/",id:"formBtn1",className:" py-3",children:"Continue Shopping"})}),(0,p.jsx)(n.A,{children:(0,p.jsx)(a.A,{type:"submit",id:"formBtn2",className:" px-11 py-3",children:"Place My Order"})})]})})]})})]})})})]})})}}}]);
//# sourceMappingURL=565.19609ce1.chunk.js.map