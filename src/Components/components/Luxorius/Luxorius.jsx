import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Sunglasses from '../../../images/Sunglasses.png';
import watchy from '../../../images/watchy.png';
function Luxorius() {
    return (
        <Container fluid style={{ width: '80%', marginTop: '200px', marginBottom: '100px', fontFamily: 'Taviraj' }}>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card  id='card2'>
                            <Card.Body className='row'>
                            
                                <Card.Title>
                                    {idx % 2 === 0 ? <h3>Luxurious Eyewear</h3> : <h3>Comfortable Watches</h3>}</Card.Title>
                                <Card.Text className='text-secondary mt-2 -mb-2 -me-2 col font-nunito'>
                                    {idx % 2 === 0 ? "See the beauty of exotic world with the luxurious glasses" : " Feels the balancing function and beauty in our wooden watches" }
                                    <br /> 
                                    <Card.Link href="#" className=' text-dark font-taviraj'>Discover Now </Card.Link>
                                </Card.Text>
                                <Card.Img src={idx % 2 === 0 ?  Sunglasses :  watchy}
                                     id={idx % 2 ===0 ? 'luximg' : 'luximg2'}
                                     className='col'
                                />
                               

                            </Card.Body>

                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
export default Luxorius;