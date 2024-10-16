import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import checkout2 from '../../../images/checkout2.png';
import payment2 from '../../../images/payment2.png';
import confirm from '../../../images/confirm.png';
const PaymentDetails = React.lazy(() => import('../Payment/PaymentDetails'));


export default function CheckOut() {
  return ( <>
    <Container style={{fontFamily: 'Taviraj' ,marginTop: '80px'}}>
    <Row  className='w-8/12 m-auto' >
    <Col xs={4} md={2} className='ps-4 me-1 text-gray-500' >
         <Image src={checkout2} alt='checkout2'style={{margin:'auto'}}/>
         1. checkout
        </Col>
        <Col className='border-b-4 mb-2'><div></div></Col>
     
        <Col xs={4} md={2}className='pe-0 m-0 text-custom-red' >
        <Image src={payment2} alt='payment2' className='ms-4' />
       2. payment
        </Col>
        <Col className='border-b-4 mb-2'><div></div></Col>

        <Col xs={4} md={3} className= 'text-gray-500 ' >
    <Image src={confirm} alt='confirm' className='ms-4' />
    3. Confirmation
        </Col>
      </Row>
    </Container>
 <React.Suspense fallback={<div>Loading...</div>}>
  <PaymentDetails/>
 </React.Suspense>
</>
  )
}
