import { Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Vector1 from "../../../images/Vector1.png";
import Vector2 from "../../../images/Vector2.png";
import Vector3 from "../../../images/Vector3.png";
import mainwatch from "../../../images/mainwatch.png";
import sliderWatch from '../../../images/sliderWatch.png'
import Card from 'react-bootstrap/Card';
import addcart from '../../../images/addcart.png';
import cicil from '../../../images/cicil.png';
import rightArrow from '../../../images/rightArrow.png';
import leftArrow from '../../../images/leftArrow.png';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../Features/CartContext";

export default function Slider() {
  const { addToCart}= useContext(CartContext);

  let vector = [ Vector1,Vector2, Vector3];//zigzag shape
  // .............................carousel controls................................
  let [currentIndex, setCurrentIndex] = useState(0)
  let slides = [
      {id:0,thumbnail:mainwatch ,width:'35%', title:'WAY KAMBAS' ,title2:'MINI EBONY' , description1:'MATOA Way Kambas - This wood is chosen to represent the', description2:'Sumatran Rhinos skin which is designed with an overlap effect on its', description3:'strap to represent Rhinos skin.', price:' 2000'},
      {id:1, thumbnail: sliderWatch ,width:'45%', title:'ROLEX DATEJUST' ,title2:'VERSATILE CLASSIC' , description1:'MATOA Rolex Datejust -it is a blend of luxury and sophistication', description2:'The gold fluted bezel and the iconic magnifying lens over the date', description3:' window at 3 oclock are classic Rolex design elements.' ,price:'3000'},
  ]

  let goBack = () => {
      const firstSlide = currentIndex === 0;
      const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex)
  }

  let goForward = () => {
      const lastSlide = currentIndex === slides.length - 1;
      const newIndex = lastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
  }
  useEffect(() => {
      const intervalId = setInterval(() => {
          setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
      }, 5000);
      
      return () => clearInterval(intervalId);
  }, [slides.length]);
  
  return (
    <Container fluid className="relative sliderComponent">
      <Card id="slider" >
        {/* ..............................zigzag shape................. */}
        <div className=" w-50 absolute -right-28 -top-6 p-0 -me-7 ">
<Image src={vector[0]} alt="vector1" />
<Image src={vector[1]} alt="vector2" className="-mt-20" />
<Image src={vector[2]} alt="vector3" className="-mt-24" />
        </div>
        <Row  >
          {/* ............................slider.first image left............... */}
          <Col md={3} >
          <div >
        {slides.map(slide => {
            if(slide.id === currentIndex){
                return <div>
            <Image src={slides[currentIndex].thumbnail} alt="slider" width={slides[currentIndex].width} id="mainwatch" />
            
            </div> 
                
              }
             return null
          })}
          </div>
          </Col>
          {/* ..................................slider text.................. */}
          <Col md={9} style={{ paddingLeft: '10%' }} ><div><h1 className="slidertitle hover:text-custom-red transform transition-transform duration-300 ease-in-out hover:scale-110" style={{ fontFamily: 'Taviraj', fontSize: '60px', fontWeight: '400', textAlign: 'left', paddingBottom: '5%', letterSpacing: '2%' }}>{slides[currentIndex].title}<br />
          {slides[currentIndex].title2}</h1></div>
            <p className="font-nunito mb-2">{slides[currentIndex].description1} <br /> {slides[currentIndex].description2} <br /> {slides[currentIndex].description3}</p>
            <Link className="text-dark font-taviraj font-semibold" > Discover </Link>
            {/* ................................slider cart button.......................... */}
            <Row className="mt-4 w-8/12 pb-5">
              <Col className="bg-custom-red text-center ms-3 hover:bg-red-400 transform transition-transform duration-300 ease-in-out hover:scale-110"><button onClick={() => addToCart(slides[currentIndex])}  className=" flex justify-center text-white font-taviraj hover:text-black " ><Image className="py-2" src={addcart} alt="addcart" /> <p className="pt-3">Add to cart</p></button></Col>
              <Col><Link to={'/'} ><Image src={cicil} alt="cicil" className="border-2 border-custom-red bg-transparent px-9 py-2 hover:border-neutral-900 transform transition-transform duration-300 ease-in-out hover:scale-110" /></Link></Col>
            </Row>
            {/* ....................................slider arrow button..........................  */}
            <Row className="w-30 me-3 gap-2 absolute right-7 -bottom-4 mt-4">
              <Col className="border-2 border-custom-red hover:border-neutral-900 py-2 px-2 transform transition-transform duration-300 ease-in-out hover:scale-110"><Link onClick={goBack}><Image src={leftArrow} alt="leftArrow" /></Link></Col>
              <Col className="bg-custom-red hover:bg-red-400 py-2 px-2 transform transition-transform duration-300 ease-in-out hover:scale-110" ><Link onClick={goForward}><Image src={rightArrow} alt="rightArrow" /></Link></Col>

            </Row>
          </Col>
        </Row>
      </Card>
  
    </Container>

  )
}