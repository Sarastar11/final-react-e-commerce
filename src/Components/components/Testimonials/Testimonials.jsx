
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import testemon from '../../../images/testemon.png';
import Vector1 from "../../../images/Vector1.png";
import Vector2 from "../../../images/Vector2.png";
import Vector3 from "../../../images/Vector3.png";

function ResponsiveAutoExample() {
  let vector = [Vector1, Vector2, Vector3];//zigzag shape

  return (
    <Container fluid className='mt-5 ms-0 relative testemonialComponent' >
      {/* ..............................zigzag shape................. */}
      <div className=" w-50 absolute -left-28 -top-16 p-0 -me-7 z-10">
        <Image src={vector[0]} alt="vector1" />
        <Image src={vector[1]} alt="vector2" className="-mt-20" />
        <Image src={vector[2]} alt="vector3" className="-mt-24" />
      </div>
      {/*..................... left photo................................ */}
      <Row className=''>
        <Col md={4} xs={1} className='bg-[#F1DDC9] ms-0'><Image className='testemonImg1 absolute z-20 mt-32 ms-32 -mb-40 transform transition-transform duration-300 ease-in-out hover:scale-110' src={testemon} alt='testemon' /></Col>
{/* .......................right text................................. */}
        <Col md={4}  className='ms-72 testemonImg'> <h2 >Testimonials </h2> <br />
          <p className='mt-5 font-nunito'>
            Loving my new KAILI watch from @matoa_id, the first ever <br /> Indonesian watch local brand that uses wood as their main <br /> material. Like any other Matoa products, KAILI is inspired by <br /> Indonesian heritage.</p>
          <h5 style={{ fontFamily: 'Taviraj', marginTop: '50px' }}>  Gita Savitri </h5>
          <p style={{ fontFamily: 'Taviraj', fontWeight: 'lighter' }}>Content Creator/Influencer  </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ResponsiveAutoExample;