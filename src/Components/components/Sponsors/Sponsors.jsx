import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import image25 from '../../../images/image25.png';
import image26 from '../../../images/image26.png';
import image27 from '../../../images/image27.png';
import image28 from '../../../images/image28.png';
import image29 from '../../../images/image29.png';
import image32 from '../../../images/image32.png';
import image33 from '../../../images/image33.png';
import image34 from '../../../images/image34.png';
import image35 from '../../../images/image35.png';
import image36 from '../../../images/image36.png';
function ResponsiveAutoExample() {
  return (
    <Container fluid className='pt-5 pb-5 mx-0 sponsorsComponent' style={{ background: 'rgba(218, 94, 66, 1)'
        , color: 'white', fontFamily: 'Taviraj'}} >
      <Row style={{paddingLeft:'120px', paddingRight:'120px' }} >
        
        <Col sm><Image src={image25}/> 
        </Col>
        <Col sm><Image src={image26} /></Col>
        <Col sm><Image src={image27} /></Col>
        <Col sm><Image src={image28} /></Col>
        <Col sm><Image src={image29} /></Col>
       

      </Row>
      <Row style={{paddingLeft:'120px', paddingRight:'120px'}}>
      
        <Col sm><Image src={image32}/> 
        </Col>
        <Col sm><Image src={image33} /></Col>
        <Col sm><Image src={image34} /></Col>
        <Col sm><Image src={image35} /></Col>
        <Col sm><Image src={image36} /></Col>
        

      </Row>
    </Container>
  );
}

export default ResponsiveAutoExample;