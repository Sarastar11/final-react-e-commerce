import React from 'react';
import Container from 'react-bootstrap/Container';

const Slider = React.lazy(() => import('../Swiper/Slider'));
const Luxorius = React.lazy(() => import('../Luxorius/Luxorius'));
const Products  = React.lazy(() => import('../Products/Products'));
const LatestNews = React.lazy(() => import('../LatestNews/LatestNews'));
const LatestProducts2 = React.lazy(() => import('../LatestProducts/LatestProducts2'));
const Testimonials = React.lazy(() => import('../Testimonials/Testimonials'));
const Instagram = React.lazy(() => import('../Instagram/Instagram'));



export default function Body() {
    
    return (
        <Container fluid>
            <React.Suspense fallback={<div>Loading...</div>}>

         <div> 
        
                         
              <Slider  />
              </div> 
         <div>    <Luxorius/></div> 
         <div>   <Products /></div> 
         <div> <LatestNews/></div> 
         <div>   <LatestProducts2/></div> 
         <div>  <Testimonials/></div> 
         <div>  <Instagram/></div> 
         </React.Suspense>
           </Container>
      
    );
}