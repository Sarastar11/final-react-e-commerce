import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

function RelateProducts() {
    //.......................discount.....................
    let btn1 = <button className='bg-custom-red  -mt-5 right-0 left-20 px-6 py-2 ms-5 me-0 text-white'>20% OFF</button>
    let btn2 = <button className='bg-custom-red -mt-5 left-30 right-0 px-6 py-2 ms-5 text-white'>25% OFF</button>
    let btn3 = <button className='bg-[#01522D] -mt-4 left-20 right-0 px-6 py-2 ms-5 text-white flex justify-end'>NEW</button>
   
    // ...........................API Calling......................
    let [watches, setWatches] = useState([])
    async function getWatches() {
        let res = await axios.get('https://dummyjson.com/products/category/mens-watches?limit=4&skip=1')
        setWatches(res.data.products)
    }
    useEffect(() => {
        getWatches();
    }
        , [])
    return (
        <Container fluid style={{ width: '80%' }} >
            <h2>Relate Products </h2>
            <Row xs={1} md={4} className="g-4 mt-4 mb-5 text-center">
                {watches.map((watch, idx) =>
                    <div>
                        {/* .......................array of cards............. ...............               */}
                        <Card key={idx} className=' border-0 border-radius-0 relative font-taviraj' id='cardrelate'>
                            {/* .................discount buttons........................        */}

                            <div key={idx} className='absolute z-10 '>
                                {idx % 4 === 0 ? btn1 : idx % 4 === 3 ? btn2 : idx % 4 === 2 ? '' : btn3}
                            </div>
                            <Card.Img className='px-3 py-3' variant="top" src={watch.thumbnail} />
                            <Card.Body>
                                <Card.Title>{watch.title}</Card.Title>
                                <Card.Text>
                                    RP    {watch.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )}
            </Row>
        </Container>
    );
}
export default RelateProducts;