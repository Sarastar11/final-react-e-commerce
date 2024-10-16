import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';
import { Col, Card, Form } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import { CartContext } from '../../../Features/CartContext';


export default function CheckOutOrder() {
    const {getTotalPrice}=useContext(CartContext);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if (!formData.username.trim()) {
            validationErrors.username = "Username is required"
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is not valid"
        }
        if (!formData.phoneNumber===null) {
            validationErrors.phoneNumber = "Invalid phone number format";   
          
          }
          if (!formData.shippingAdress ===null) {
            validationErrors.shippingAddress = "Shipping Adress is required"
        }
        if (!formData.zipCode === null) {
            validationErrors.zipCode = "Zip Code is required"
        }
        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            navigate('/Payment' ,{state :{formData}});
        }

    }
   
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
                            <Row>
                                <Col>
                                    <p>Grand Total</p>
                                </Col>

                                <Col>
                                    <p>RP {getTotalPrice().toFixed(2)}</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    {/* second card.................form................................................................ */}
                </Col>
                <Col>
                    <Card className='border-0 rounded-none p-3'>
                        <Card.Body>
                            <Card.Title> <h3>
                                Billing Address
                            </h3>
                            </Card.Title>
                            <Card.Text>
                                <Form onSubmit={handleSubmit}>
                                    {/* ....................name...................... */}
                                    <Form.Group className="mb-3 mt-5" controlId="formBasicFullName">
                                        <Form.Label>FullName</Form.Label>
                                        <Form.Control type="text" name="username" onChange={handleChange} placeholder="Ex: Rasyidin Arsyad Nasution" style={{ borderTop: '0px', borderLeft: '0px', borderRight: '0px', borderRadius: '0px' }} />
                                        {errors.username && <span className='text-black text-sm bg-red-200 px-5'>{errors.username}</span>}
                                    </Form.Group>
                                    {/* .........................................mail................... */}
                                    <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" name="email" onChange={handleChange} placeholder="Ex: rasyid.arsyad@gmail.com" style={{ borderTop: '0px', borderLeft: '0px', borderRight: '0px', borderRadius: '0px' }} />
                                        {errors.email && <span className='text-black text-sm bg-red-200 px-5'>{errors.email}</span>}

                                    </Form.Group>
                                    {/* ....................................phone........................... */}
                                    <Form.Group className="mb-3 mt-4" controlId="formBasicphone">

                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" name="phoneNumber" onChange={handleChange} placeholder="Ex: 089111888999" style={{ borderTop: '0px', borderLeft: '0px', borderRight: '0px', borderRadius: '0px' }} />
                                        {errors.phoneNumber && <span className='text-black text-sm bg-red-200 px-5'>{errors.phoneNumber}</span>}

                                    </Form.Group>
                                    {/* .........................................adress...........................  */}

                                    <Form.Group className="mb-3 mt-4" controlId="formBasicAdress">

                                        <Form.Label>Shipping Address</Form.Label>
                                        <Form.Control type="text" name="shippingAddress" onChange={handleChange} placeholder="Ex: Patriot Street Number 666, Ngaklik, Sleman" style={{ borderTop: '0px', borderLeft: '0px', borderRight: '0px', borderRadius: '0px' }} />
                                        {errors.shippingAddress && <span className='text-black text-sm bg-red-200 px-5'>{errors.shippingAddress}</span>}

                                    </Form.Group>
                                    {/* .......................................country select.................... */}
                                    <Form.Group className="mb-3 mt-4" controlId="formBasicCountry">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Select aria-label="Default select example" style={{ borderTop: '0px', borderLeft: '0px', borderRight: '0px', borderRadius: '0px' }}>
                                            <option>United State of America (USA)</option>
                                            <option value="Egypt">Egypt</option>
                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                            <option value="Emirates">Emirates</option>
                                        </Form.Select>
                                    </Form.Group>
                                    {/* ................................state......................... */}
                                    <Form.Group className="mb-3 mt-4" controlId="formBasicAdress">
                                        <Form.Label>State/Province</Form.Label>
                                        <Form.Select aria-label="Default select example" style={{ borderTop: '0px', borderLeft: '0px', borderRight: '0px', borderRadius: '0px' }}>
                                            <option>California</option>
                                            <option value="Cairo">Cairo</option>
                                            <option value="Mekka">Makka</option>
                                            <option value="Dubai">Dubai</option>
                                        </Form.Select>
                                    </Form.Group>
                                    {/* .................................city................................. */}
                                    <Form.Group className="mb-3 mt-4" controlId="formBasicAdress">
                                        <Row>
                                            <Col>
                                                <Form.Label>City</Form.Label>
                                                <Form.Select className='col' aria-label="Default select example" style={{ borderTop: '0px', borderLeft: '0px', borderRight: '0px', borderRadius: '0px' }}>
                                                    <option>San Francisco</option>
                                                    <option value="Helwan">Helwan</option>
                                                    <option value="Saudi Arabia">Jeddah</option>
                                                    <option value="Emirates">Al Sufouh</option>
                                                </Form.Select>
                                            </Col>
                                            {/* .............................zipcode................. */}
                                            <Col>
                                                <Form.Label>Zip Code</Form.Label>
                                                <Form.Control className='col' onChange={handleChange} type="zipcode" placeholder="Ex: 94024" style={{ borderTop: '0px', borderLeft: '0px', borderRight: '0px', borderRadius: '0px' }} />
                                                {errors.zipCode && <span className='text-black bg-red-200 text-sm px-2'>{errors.zipCode}</span>}

                                            </Col>
                                        </Row>
                                    </Form.Group>
                                    {/* .............................courier.................................. */}
                                    <Form.Group className="mb-3 mt-4" controlId="formBasicAdress">
                                        <Form.Label>Choose Courier</Form.Label>
                                        <Form.Select aria-label="Default select example" style={{ borderTop: '0px', borderLeft: '0px', borderRight: '0px', borderRadius: '0px' }}>
                                            <option>DHL</option>
                                            <option value="FedEx">FedEx</option>
                                            <option value="Aramix">Aramix</option>
                                            <option value="Blue Dart">Blue Dart</option>
                                        </Form.Select>
                                    </Form.Group>
                                    
                                    <Row className='my-4 p-2  ' >
                                        <div className=' flex gap-3'>
                                        <Col >
                                            <Button href='/' id='formBtn1' className=' py-3' >
                                                Continue Shopping
                                            </Button>
                                        </Col>
                                        <Col >

                                            <Button type='submit' id='formBtn2' className=' px-11 py-3'>
                                                Place My Order
                                            </Button>

                                        </Col>
                                        </div>
                                    </Row>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </Col>
            </Row>
        </Container >
    )
}