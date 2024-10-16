import { Container } from '@mui/material';
import React from 'react';
import { Card, Col, Row, Image } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../../../Features/CartContext';
import confirmImg from '../../../images/confirmImg.png';
import time from '../../../images/time.png';
import courier from '../../../images/courier.png';

export default function ConfirmDetails() {
    const {getTotalPrice ,cart}=useContext(CartContext);
  
    return (
        <Container className='w-8/12'>
            <Row>
                <Col sm={10} md={6}>
                    <Card className='border-0 rounded-none p-2 mt-5 font-taviraj text-center mb-24 '>
                        <Image className='w-8/12 m-auto my-5' variant="top" src={confirmImg} />
                        <Card.Title >Order Confirmed </Card.Title>
                        <Card.Text className='font-nunito m-auto w-8/12 mb-5'>Your order have been confirmed, please wait and track your order</Card.Text>

                        <Card.Link href="/" className='bg-custom-red w-8/12  m-auto py-3 mb-4 text-white no-underline'>
                            Go to track page
                        </Card.Link>

                    </Card>
                </Col>

                {/* ...........................second card......................... */}
                <Col>
                    <Card className='border-0 rounded-none p-3 mt-5 font-taviraj  mb-24 '>
                        <Card.Title>
                            <Row className='text-gray-500'>

                                <Col >
                                    <Image src={time} alt='time' className='ps-12' />
                                </Col>

                                <Col md={3}>
                                    <p className='text-sm ps-0'>10 days delivery </p></Col>
                                <Col></Col>
                                <Col md={2}><Image src={courier} alt='courier' className='ps-12' /></Col>
                                <Col md={3} ><p className='text-sm ps-0'>DHL Express</p></Col>
                            </Row>
                        </Card.Title>

                        <Card.Body className='px-5 pb-5'>
                            <Card.Text>
                                <Col>
                            {cart.map((item, index) => ( 
                                <div key={index}>
                                 <h5>{item.title}</h5>
                                
                               <p className='text-slate-500'> {item.quantity} *RP  {item.price}</p>
                                </div>
                           ) )}
                           </Col>
                            </Card.Text>
                            <Row>
                                <Col>Subtotal</Col>
                                <Col>{getTotalPrice().toFixed(2)}</Col>
                            </Row>
                            <Row className='mt-4'>
                                <Col>Shipping Cost</Col>
                                <Col>RP 000</Col>
                            </Row>
                            <Row className='mt-4 mb-4'>
                                <Col>Packaging</Col>
                                <Col>RP 000</Col>
                            </Row>
                            <hr />
                            <Row className='mb-4 mt-4'>
                                <Col> <h5>Grand Total</h5> </Col>
                                <Col> <h4>RP {getTotalPrice().toFixed(2)} </h4> </Col>
                            </Row>
                            <hr />
                            <Row className='mt-5'>
                                <Col> Shipping Address</Col>
                                <Col>18 Richardson Drive
                                Fountain Valley, CA 92708 </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
