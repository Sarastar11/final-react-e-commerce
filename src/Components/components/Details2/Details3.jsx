import React, { useEffect, useState, useContext, Suspense } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cicil from '../../../images/cicil.png';
import addcart from '../../../images/addcart.png';
import minus from '../../../images/minus.png';
import plus from '../../../images/plus.png';
import { CartContext } from '../../../Features/CartContext';

const ProductData3 = React.lazy(() => import('../productData/ProductData3'));
const RelateProducts = React.lazy(() => import('../RelateProducts/RelateProducts'));

const Details3 = () => {
    const [products, setProducts] = useState([]);
    const { addToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    async function getProducts() {
        try {
            const res = await axios.get('https://dummyjson.com/products/category/mens-watches?limit=1&skip=2');
            setProducts(res.data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <Container fluid>
            <Row>
                <Col sm={5} className='ps-0'>
                    <Card id='details1'>
                        {products.map((product) => (
                            <div key={product.id}>
                                <img className='thumbnails' src={product.thumbnail} alt="thumb1" />
                                {product.images.map((img, index) => (
                                    <Button variant="transparent" key={index}>
                                        <img className='zoom ' src={img} alt="detailed" style={{ width: "150px",marginTop: "20px"  }} />
                                    </Button>
                                ))}
                            </div>
                        ))}
                    </Card>
                </Col>

                <Col sm id='details11'>
                    <div>
                        {products.map((product) => (
                            <div key={product.id}>
                                <p>{product.title}</p>
                                <h5 className='text-slate-500'> Price: Rp {product.price}</h5>
                                <Row className="mt-5 pb-5">
                                    <Col className='flex'>
                                        <button onClick={() => decreaseQuantity(product.id)} className='bg-transparent border-2 border-gray-400 pt-3 px-2 h-2/3 my-2 py-2 mx-2 transform transition-transform duration-300 ease-in-out hover:scale-110'>
                                            <Image src={minus} alt='minus' />
                                        </button>
                                        <span className='mx-1 mt-2 text-lg'>{1}</span>
                                        <button onClick={() => increaseQuantity(product.id)} className='bg-custom-red px-2 h-2/3 my-2 py-2 mx-2 transform transition-transform duration-300 ease-in-out hover:scale-110 '>
                                            <Image src={plus} alt='plus' />
                                        </button>
                                    </Col>

                                    <Col className="bg-custom-red text-center ms-1 hover:bg-red-400 transform transition-transform duration-300 ease-in-out hover:scale-110">
                                        <Link className="flex justify-center no-underline text-white font-taviraj hover:text-black">
                                            <Image className="py-2" src={addcart} alt="addcart" />
                                            <button onClick={() => addToCart(product)} className="pt-2 text-sm">Add to cart</button>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Link to={'/'}>
                                            <Image src={cicil} alt="cicil" className="border-2 border-custom-red bg-transparent px-9 py-2 hover:border-neutral-900 transform transition-transform duration-300 ease-in-out hover:scale-110" />
                                        </Link>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
            <Suspense fallback={<div>Loading...</div>}>
                <ProductData3 />
                <RelateProducts />
            </Suspense>
        </Container>
    );
};

export default Details3;
