import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";

const Body = lazy(() => import('../Body/Body'));
const Details1 = lazy(() => import('../Details1/Details1'));
const Details2 = lazy(() => import('../Details2/Details2'));
const Details3 = lazy(() => import('../Details2/Details3'));
const Details4 = lazy(() => import('../Details2/Details4'));
const Details5 = lazy(() => import('../Details2/Details5'));
const Details6 = lazy(() => import('../Details2/Details6'));
const Cart = lazy(() => import('../../../Pages/Cart'));
const CheckOut = lazy(() => import('../CheckOut/CheckOut'));
const Payment = lazy(() => import('../Payment/Payment'));
const Confirmation = lazy(() => import('../Confirmation/Confirmation'));

export default function Main() {
  return (

    <div>

      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/Details1" element={<Details1  />} />
            <Route path="/Details2" element={<Details2 />} />
            <Route path="/Details3" element={<Details3 />} />
            <Route path="/Details4" element={<Details4 />} />
            <Route path="/Details5" element={<Details5 />} />
            <Route path="/Details6" element={<Details6 />} />
           
            <Route path="/Cart" element={<Cart />} />
            <Route path="/CheckOut" element={<CheckOut  />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Confirmation" element={<Confirmation />} />


          </Routes>
        </Suspense>
      </BrowserRouter>
      
    </div>
   
  );
}