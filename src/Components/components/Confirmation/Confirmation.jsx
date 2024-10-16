import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import checkout2 from '../../../images/checkout2.png';
import payment from '../../../images/payment.png';
import confirm3 from '../../../images/confirm3.png';
const ConfirmDetails = React.lazy(() => import('../Confirmation/ConfirmDetails'));


export default function CheckOut() {
  return ( <>
    <Container style={{fontFamily: 'Taviraj' ,marginTop: '80px'}}>
    <Row  className='w-8/12 m-auto' >
    <Col xs={4} md={2} className='ps-4 me-1 text-gray-500' >
         <Image src={checkout2} alt='checkout2'style={{margin:'auto'}}/>
         1. checkout
        </Col>
        <Col className='border-b-4 mb-2'><div></div></Col>
     
        <Col xs={4} md={2}className='pe-0 m-0 text-gray-500' >
        <Image src={payment} alt='payment2' className='ms-4' />
       2. payment
        </Col>
        <Col className='border-b-4 mb-2'><div></div></Col>

        <Col xs={4} md={3} className= 'text-custom-red ' >
    <Image src={confirm3} alt='confirm' className='ms-4' />
    3. Confirmation
        </Col>
      </Row>
    </Container>
 <React.Suspense fallback={<div>Loading...</div>}>
  <ConfirmDetails/>
 </React.Suspense>
 </>
 )
}