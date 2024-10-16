import React from 'react'
import { Button, Image } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';
import { Col, Card, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../Features/CartContext';
import bni from '../../../images/bni.png';
import permatabank from '../../../images/permatabank.png';
import visa from '../../../images/visa.png';
import mastercard from '../../../images/mastercard.png';
import mandiri from '../../../images/mandiri.png';
import danamon from '../../../images/danamon.png';
import uob from '../../../images/uob.png';
import stchatered from '../../../images/stchatered.png';
import gopay from '../../../images/gopay.png';
import kredivo from '../../../images/kredivo.png';


export default function PaymentDetails() {
    const { getTotalPrice, cart } = useContext(CartContext);

    // ......................form Data........................
    const location = useLocation();
    const formData = location.state?.formData;



    // ........................watch time.................................
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Container className='mt-16' style={{ fontFamily: 'Taviraj' }}>
            <Row className='w-10/12 mx-auto'>
                <Col>
                    {/* first card.................................................................................. */}
                    <Card className='border-0 rounded-none p-3'>
                        <Card.Body>
                            <Card.Title> <h3>Detail Order</h3></Card.Title>
                            <Card.Text className='row mt-5'>

                                <Col><p> Subtotal</p>
                                    <p>Shipping Cost</p>
                                    <p>Promo Code</p>
                                    <p>Packaging</p>
                                </Col>
                                <Col><p>RP {getTotalPrice().toFixed(2)}</p>
                                    <p>RP  000</p>
                                    <p>ــــ</p>
                                    <p>RP  000</p>
                                </Col>

                                <hr className=' border-2 mt-4' />
                            </Card.Text>
                            <Row className='mb-3'>
                                <Col>
                                    <p>Grand Total</p>
                                </Col>

                                <Col>
                                    <p>RP {getTotalPrice().toFixed(2)} </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className='border-0 rounded-none p-4 pb-8 mt-4'>
                        <Card.Title>
                            <Row>
                                <h3 className='col-8 mb-4'>Payment Detail </h3>  <div className='col-4 text-custom-red ps-4 '> {time.toLocaleTimeString('en-GB', { hour12: false })}</div>
                            </Row>
                        </Card.Title>
                        <Card.Text>
                            <p>Please make a payment according with the limit time specified, starting from now </p>
                        </Card.Text>
                    </Card>
                </Col>
                {/* second card................................................................................. */}

                <Col>
                    <Card className='border-0 rounded-none p-3'>
                        <Card.Body>
                            <Card.Title> <h3>
                                Order Detail
                            </h3>
                            </Card.Title>
                            <Card.Text>

                                {/* ....................Order Number...................... */}
                                <Row className='mt-5'>
                                    <Col md={4} >Order Number</Col>
                                    <Col>
                                        <Row>
                                            <Col className='text-sm'>MTAWEB-3A86D4DB</Col>
                                            <Col md={3} className='text-custom-red'>Copy</Col>
                                        </Row>

                                        <Row>
                                            <Form.Text className="text-muted mt-3">
                                                Always remember Order Number for easy tracking
                                            </Form.Text>
                                        </Row>
                                    </Col>
                                </Row>
                                {/* ........................................Purchase Date................... */}
                                <Row className='mt-3'>
                                    <Col>Purchase Date</Col>
                                    <Col>
                                        2019-11-07 14:01:48
                                    </Col>
                                </Row>
                                {/* ...........................items.................................... */}
                                <Row className='mt-4'>
                                    <Col>Items</Col>
                                    <Col>
                                        {cart.map((item, index) => (
                                            <div key={index}>
                                                <Row>
                                                    <Col>{item.title} <Col className='text-sm text-gray-400'>RP {item.price} *{item.quantity}</Col></Col>
                                                    
                                                    
                                                </Row>
                                            </div>
                                        ))}


                                    </Col>
                                </Row>
                                {/* .........................................Name...........................  */}

                                <Row className='mt-4'>

                                    <Col>Name</Col>
                                    <Col>{formData.username}</Col>

                                </Row>
                                {/* .........................................phone...........................  */}
                                <Row className='mt-4'>
                                    <Col>Phone</Col>
                                    <Col>{formData.phoneNumber}</Col>
                                </Row>
                                {/* .........................................email...........................  */}

                                <Row className='mt-4'>
                                    <Col>Email</Col>
                                    <Col>{formData.email}</Col>
                                </Row>

                                {/* .......................................Shipping Address.................... */}

                                <Row className='mt-4'>
                                    <Col>Shipping Address</Col>
                                    <Col className='text-sm'>
                                        {formData.shippingAddress}
                                    </Col>
                                </Row>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Row className='w-10/12 mx-auto' >
                    <Card className='border-0 rounded-none p-3 mt-4'>
                        <Card.Title> <h3>Payment Method </h3></Card.Title>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Form.Check type="radio" label="BNI Cicilan 0%" className="user-select-none" id="radio-button-id" />
                                    <Image src={bni} alt="bni" />
                                </Col>
                                <Col><Form.Check type="radio" label="Mandiri Cicilan 0%" className="user-select-none" id="radio-button-id" />
                                    <Image src={mandiri} alt='mandiri' />
                                </Col>
                                <Col><Form.Check type="radio" label="Bank Transfer" className="user-select-none" id="radio-button-id" />
                                    <Image src={permatabank} alt='bank' />
                                </Col>
                                <Col><Form.Check type="radio" label="Credit Card" className="user-select-none" id="radio-button-id" />
                                    <Row >
                                        <Col><Image src={mastercard} alt=' mastercard' /></Col>
                                        <Col><Image src={visa} alt='visa' /></Col>
                                    </Row>



                                </Col>
                            </Row>
                            <Row className='mt-4'>
                                <Col md={8}><Form.Check type="radio" label="Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)" className="user-select-none" id="radio-button-id" />
                                    <Row>
                                        <Col md={3}><Image src={danamon} /></Col>
                                        <Col md={3}><Image src={uob} /></Col>
                                        <Col md={3}><Image src={stchatered} /></Col>
                                    </Row>

                                </Col>
                                <Col><Form.Check type="radio" label="GO-PAY" className="user-select-none" id="radio-button-id" />
                                    <Image src={gopay} />
                                </Col>
                                <Col><Form.Check type="radio" label="Krdivo" className="user-select-none" id="radio-button-id" />
                                    <Image src={kredivo} />
                                </Col>

                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className='my-4 p-0'>
                    <div className='flex justify-end'  >
                        <Button href='/Confirmation' id='formBtn3' className='me-0 py-3 px-40 w-2/6'>
                            Proceed Payment
                        </Button>
                    </div>
                </Row>

            </Row>
        </Container>
    )
}

