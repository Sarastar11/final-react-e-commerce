import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import watch1 from '../../../images/watch1.png';
import watch2 from '../../../images/watch2.png';
import watch3 from '../../../images/watch3.png';
import watch4 from '../../../images/watch4.png';
import watch5 from '../../../images/watch5.png';


function AutoLayoutExample() {
  return (
    <Container fluid style={{width:'80%', marginTop:'200px'}}>
    <Row><h2 id='instagram' style={{ marginBottom:'30px' }}>Instagram</h2></Row>
      <Row className='gap-0 mb-5 '  >
        <div className='flex instagramImages'>
        <Image src={watch1} alt='watch1' className='watch-image' />
        <Image src={watch2} alt ='watch2'className='watch-image' />
        <Image src={watch3} alt='watch3'className='watch-image' />
        <Image src={watch4} alt='watch4' className='watch-image' />
        <Image src={watch5} alt='watch5'  className='watch-image' />
        </div>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;