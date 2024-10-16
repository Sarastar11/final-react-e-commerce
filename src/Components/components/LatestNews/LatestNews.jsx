
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Manhand from '../../../images/Manhand.png';
import Card from 'react-bootstrap/Card';
import Vector1 from '../../../images/Vector1.png';
import Vector2 from '../../../images/Vector2.png';
import Vector3 from '../../../images/Vector3.png';

function ContainerExample() {
  let vector = [ Vector1,Vector2, Vector3];//zigzag shape

  return (
    <Container className=' mb-5 mt-5 me-0 relative newsComponent'>
      {/* ............................zigzag shape................. */}
          <div className=" w-50 absolute right-0 -top-6 p-0 -me-8 z-20">
<Image src={vector[0]} alt="vector1" />
<Image src={vector[1]} alt="vector2" className="-mt-20" />
<Image src={vector[2]} alt="vector3" className="-mt-24" />
        </div>
      <Row style={{ fontFamily: 'Taviraj',marginRight:'0px' ,lineHeight:'48px'}}>
{/* ....................................left text................. */}
        <Col md={6} sm={1}><h2 style={{marginBottom:'200px'}} > Recent News</h2>
          <h5 className=' text-secondary mb-4'> Where To Travel</h5>
          <h3 style={{fontSize:'36px' }}>Matoa Where To <br />Travel? Yogyakarta </h3> <br />

        <Button className='mt-2 'id='newsButton' variant='outline'>Discover</Button></Col>
 {/* ..............................right photo.................. */}
 <Col md={6} sm={1} id='news' >
<Card className='news' style={{background:' rgba(241, 221, 201, 1)' ,border: 'none'}} >
       
          <Image id ='newsimage' src={Manhand} alt='manhand' className='transform transition-transform duration-300 ease-in-out hover:scale-110'/>
        
        </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;

