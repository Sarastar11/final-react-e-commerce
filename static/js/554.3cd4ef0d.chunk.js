(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[554],{554:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var r=s(3519),a=s(3637),n=s(8628),c=s(1072),o=s(5475),i=s(6213),l=s(5043);var A=s(4441),d=s(579);const p=function(){const{addToCart:e}=(0,l.useContext)(A.M);let[t,s]=(0,l.useState)([]);(0,l.useEffect)((()=>{!async function(){let e=await i.A.get("https://dummyjson.com/products/category/mens-watches?limit=4&skip=0");s(e.data.products)}()}),[]);let p=["/Details1","/Details2","/Details3","/Details4"];return(0,d.jsxs)(r.A,{fluid:!0,className:"productsComponent",style:{width:"80%",marginBottom:"100px",fontFamily:"Taviraj"},children:[(0,d.jsx)(c.A,{children:(0,d.jsx)("h2",{id:"products",className:"mb-4 pb-2 ",children:" Latest Deals"})}),(0,d.jsx)(c.A,{md:4,xs:1,className:" mt-5 gap-3",children:t.map(((s,r)=>(0,d.jsxs)(n.A,{id:"card",children:[(0,d.jsx)(o.N_,{to:p[r],children:(0,d.jsx)(n.A.Img,{id:"productsCard",variant:"top",src:s.thumbnail})}),(0,d.jsx)(n.A.Body,{children:(0,d.jsxs)("div",{children:[(0,d.jsxs)(n.A.Title,{children:[" ",r%4===0?t[0].title:r%4===1?t[1].title:r%4===2?t[2].title:t[3].title]}),(0,d.jsxs)(n.A.Text,{className:"text-secondary ",children:[r%4===3?"10 % ":r%4===2?"15 % ":" 20%"," off",(0,d.jsx)("br",{})," ",(0,d.jsx)("span",{style:{textDecoration:"line-through",textDecorationColor:"rgba(217, 63, 63, 1)"},children:r%4===3||r%4===2?"Rp 1.280.000 ":" Rp 1.500.000"}),(0,d.jsx)("br",{})," ",(0,d.jsxs)("p",{className:"mt-2 fs-3 text-dark",children:["RP  ",s.price," "]})]})]})}),(0,d.jsx)(c.A,{id:"hoverbtn",children:(0,d.jsxs)("div",{className:"mb-3 flex justify-center gap-1",children:[(0,d.jsx)(a.A,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG7SURBVHgB7ZVdTsJAEMdnl2ijT3ACMDF8PHoCIVEhvhhPAJ6AegLKCZQTQE/Aqx8PegP0CaqJcAR8gqLZcUaoltJC+Xgx8Zc03c7Ozn+nmZ0F+GcBwmtoH+1nRSRSQcQYTSJ7oMJa5v61MeV3nC5JiWfklwAh+mxDpUyv35SAdZKsoBCxgW0bB4+970XtQjpBr5JAPCT7Odt2NK1Jr+cZPwWGBNVN3b1UwW/nVj5ZhwAoQKmTT7b44XGQn5VPNWk+63zLn1RkpKyErAYtzNx0GuRl8jMe+/OhVJV+mz4z0cmnurAhOEtnLF32HmwK/B26BaKwKYS/QP/tdC8OazKuunHZTgkoxJr9uXUBaxJBLKNQpu/kpAQTsCK8lorlwW1z/yJAIS/pQNVhRSRCJXD3DrSDaz7RsCS8hteGcuY0rUKyCCGh4EV37buRfkbuOahADyPCwal/GQN7lAstwA1sMBrlWISy0ecHB50Eck7T8yJgDq1sIrqraXVAfPJ2yEnnzXK2QcEXCjhQ+RkSVZyb4XA47O9q21d0Ubynby190dpQAhMRvhOKlE2ULhiTgoermGXgg7TOQfybfAEcq9FPk3gXFgAAAABJRU5ErkJggg==",alt:"love",className:" border-2 p-1 border-custom-red hover:bg-red-400"}),(0,d.jsx)(o.N_,{className:"bg-custom-red px-4  text-center no-underline text-white font-taviraj  ",children:(0,d.jsx)("button",{onClick:()=>e(s),className:"pt-1 text-sm",children:"Add to cart"})})]})})]},s.id)))})]})}},1497:(e,t,s)=>{"use strict";var r=s(3218);function a(){}function n(){}n.resetWarningCache=a,e.exports=function(){function e(e,t,s,a,n,c){if(c!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var s={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:a};return s.PropTypes=s,s}},5173:(e,t,s)=>{e.exports=s(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3637:(e,t,s)=>{"use strict";s.d(t,{A:()=>d});var r=s(8139),a=s.n(r),n=s(5043),c=s(5173),o=s.n(c),i=s(7852),l=s(579);o().string,o().bool,o().bool,o().bool,o().bool;const A=n.forwardRef(((e,t)=>{let{bsPrefix:s,className:r,fluid:n=!1,rounded:c=!1,roundedCircle:o=!1,thumbnail:A=!1,...d}=e;return s=(0,i.oU)(s,"img"),(0,l.jsx)("img",{ref:t,...d,className:a()(r,n&&`${s}-fluid`,c&&"rounded",o&&"rounded-circle",A&&`${s}-thumbnail`)})}));A.displayName="Image";const d=A}}]);
//# sourceMappingURL=554.3cd4ef0d.chunk.js.map