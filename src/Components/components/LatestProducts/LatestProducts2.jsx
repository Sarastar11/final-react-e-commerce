import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

let details = ['/Details1', '/Details2', '/Details3', '/Details4','/Details5','Details6' ];
function ProductData() {
    // ..............................api calling   ......................
    let [watches, setWatches] = useState([])
    async function getWatches() {
        let res = await axios.get('https://dummyjson.com/products?limit=12&skip=92')
        setWatches(res.data.products)
    }
    useEffect(() => {
        getWatches();
    }
        , [])

    // .................................second Api calling.........................
    let [glasses, setGlasses] = useState([])
    async function getGlasses() {
        let res = await axios.get('https://dummyjson.com/products/category/sunglasses?limit=6&skip=0')
        setGlasses(res.data.products)
    }
    useEffect(() => {
        getGlasses();
    }
        , [])


    return (<>
        <Card className="card pt-5 mt-5 border-0 bg-transparent " style={{ fontWeight: '600', marginLeft: '10%', marginRight: '10%' }}>
            <div className="card-header bg-transparent border-0" >
                <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                    <li className="nav-item " role="presentation">
                        <a className="nav-link active border-0 bg-transparent  fs-5" id="rolex-tab" data-bs-toggle="tab" href="#rolex" role="tab" aria-controls="rolex" aria-selected="true">
                            <h4 className='text-black mx-5 pe-5 '>Rolex Series</h4></a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link border-0 mx-4 bg-transparent  fs-5" id="eyewear-tab" data-bs-toggle="tab" href="#eyewear" role="tab" aria-controls="eyewear" aria-selected="true">
                            <h4 className='text-black mx-5 pe-5'>Eye Wears</h4></a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link border-0 bg-transparent   fs-5" id="Featured-tab" data-bs-toggle="tab" href="#Featured" role="tab" aria-controls="Featured" aria-selected="true">
                            <h4 className='text-black mx-5 pe-5'>Featured</h4></a>
                    </li>

                </ul>
            </div>
            <div className="card-body">
                <div className="tab-content" id="myTabContent">
                    {/* ..................................first tab..content...................................................... */}
                    <div className="tab-pane fade show active mt-3" id="rolex" role="tabpanel" aria-labelledby="rolex-tab">
                        <ul className="list-disc pl-5 flex flex-wrap mx-3 justify-around font-taviraj">
                            {watches.slice(0, 6).map((watch, idx) => (
                                <Link key={watch.id} className='no-underline text-black' to={details[idx]}>
                                    <Row key={watch.id} className="mt-3">

                                        <Col className='bg-[#F1DDC9] flex justify-center' >

                                            <img className='w-32' src={watch.thumbnail} alt={watch.title} />

                                        </Col>
                                        <Col>
                                            <div className='w-32'>
                                                {watch.title} <h5> RP {watch.price}</h5>
                                            </div>
                                        </Col>

                                    </Row>
                                </Link>
                            ))}
                        </ul>
                    </div>

                    {/* ..........................................second tab content.................................... */}

                    <div className="tab-pane fade  active mt-3" id="eyewear" role="tabpanel" aria-labelledby="eyewear-tab">
                        <ul className="list-disc pl-5 flex flex-wrap mx-3 justify-around font-taviraj">
                            {glasses.map((glass, idx) => (
                                <Link key={glass.id} className='no-underline text-black' to={details[idx]}>
                                    <Row key={glass.id} className="mt-3">

                                        <Col className='bg-[#F1DDC9] flex justify-center' >

                                            <img className='w-32' src={glass.thumbnail} alt={glass.title} />

                                        </Col>
                                        <Col>
                                            <div className='w-32'>
                                                {glass.title} <h5> RP {glass.price}</h5>
                                            </div>
                                        </Col>

                                    </Row>
                                </Link>
                            ))}
                        </ul>
                    </div>


                    {/* ........................third tab content .................................... */}

                    <div className="tab-pane fade active mt-3" id="Featured" role="tabpanel" aria-labelledby="Featured-tab">
                        <ul className="list-disc pl-5 flex flex-wrap mx-3 justify-around font-taviraj">
                            {watches.slice(7, 12).map((watch, idx) => (
                                <Link key={watch.id} className='no-underline text-black' to={details[idx]}>
                                    <Row key={watch.id} className="mt-3">

                                        <Col className='bg-[#F1DDC9] flex justify-center' >

                                            <img className='w-32' src={watch.thumbnail} alt={watch.title} />

                                        </Col>
                                        <Col>
                                            <div className='w-32'>
                                                {watch.title} <h5> RP {watch.price}</h5>
                                            </div>
                                        </Col>

                                    </Row>
                                </Link>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>

        </Card >
    </>
    );
}
export default ProductData;