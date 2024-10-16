import {  Container, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import love from '../../../images/love.png';
import { useContext } from 'react';
import { CartContext } from '../../../Features/CartContext';


function Products() {
    const { addToCart}= useContext(CartContext);
      // ...........................API Calling......................
    let [watches, setWatches] = useState([])
    async function getWatches() {
        let res = await axios.get('https://dummyjson.com/products/category/mens-watches?limit=4&skip=0')
        setWatches(res.data.products)
    }
    useEffect(() => {
        getWatches();
    }
        , [])
        // ............................routes.........................
    let details = ['/Details1', '/Details2', '/Details3', '/Details4'];
    return (
        <Container fluid className='productsComponent' style={{ width: '80%', marginBottom: '100px', fontFamily: 'Taviraj' }}>
            <Row>
                <h2 id='products' className='mb-4 pb-2 '> Latest Deals</h2>
            </Row>
        
                <Row md={4} xs={1} className=" mt-5 gap-3" >
                    {watches.map((watch, idx) => 
            //  ...............................array of cards..................................       
                                <Card  id='card' key={watch.id}>
                            <Link to={details[idx]}>
                                <Card.Img id='productsCard' variant="top" src={watch.thumbnail} />
                            </Link>
                            <Card.Body>
                                <div>
                                    <Card.Title> {idx % 4 === 0 ? watches[0].title : idx % 4 === 1 ? watches[1].title : idx % 4 === 2 ? watches[2].title : watches[3].title} 
                                    </Card.Title>
                                    <Card.Text className='text-secondary '>
                                        {idx % 4 === 3 ? "10 % " : idx % 4 === 2 ? "15 % " : " 20%"} off
                                        <br /> <span style={{ textDecoration: 'line-through', textDecorationColor: 'rgba(217, 63, 63, 1)' }}>{idx % 4 === 3 ? "Rp 1.280.000 " : idx % 4 === 2 ? "Rp 1.280.000 " : " Rp 1.500.000"}</span>
                                        <br /> <p className='mt-2 fs-3 text-dark'>RP  {watch.price} </p>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                            
                            <Row id='hoverbtn'>
                                <div className="mb-3 flex justify-center gap-1">
                                <Image src={love} alt="love" className=' border-2 p-1 border-custom-red hover:bg-red-400' />
             <Link className="bg-custom-red px-4  text-center no-underline text-white font-taviraj  " >  
             <button onClick={() => addToCart(watch)} className="pt-1 text-sm">Add to cart</button>

             </Link>
             </div> 
            </Row>
                        </Card>
                    )}
                </Row>
           
        </Container>
    );
} export default Products;