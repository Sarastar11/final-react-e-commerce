import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import checkout from '../../../images/checkout.png';
import payment from '../../../images/payment.png';
import confirm from '../../../images/confirm.png';
const CheckOutOrder = React.lazy(() => import('../CheckOut/CheckOutOrder'));


export default function CheckOut() {
 

  return ( <>
    <Container style={{fontFamily: 'Taviraj' ,marginTop: '80px'}}>
    <Row  className='w-8/12 m-auto' >
    <Col xs={4} md={2} className='ps-4 me-1 text-custom-red' >
         <Image src={checkout} alt='checkout'style={{margin:'auto'}}/>
         1. checkout
        </Col>
        <Col className='border-b-4 mb-2'><div></div></Col>
     
        <Col xs={4} md={2}className='pe-0 m-0 text-gray-500' >
        <Image src={payment} alt='payment' className='ms-4' />
       2. payment
        </Col>
        <Col className='border-b-4 mb-2'><div></div></Col>

        <Col xs={4} md={3} className= 'text-gray-500' >
    <Image src={confirm} alt='confirm' className='ms-4'/>
    3. Confirmation
        </Col>
      </Row>
    </Container>
 <React.Suspense fallback={<div>Loading...</div>}>
  <CheckOutOrder/>
 </React.Suspense>
</>
  )
}
