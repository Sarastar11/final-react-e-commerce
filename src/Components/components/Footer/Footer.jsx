import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import whitelogo from '../../../images/whitelogo.png';
import Facebook from '../../../images/Facebook.png';
import Instagram from '../../../images/Instagram.png';
import Twitter from '../../../images/Twitter.png';
import Youtube from '../../../images/Youtube.png';

function ResponsiveAutoExample() {
  return (
    <Container fluid className='mx-0' style={{ background: 'rgba(216, 71, 39, 1)', color: 'white', fontFamily: 'Taviraj', padding: '100px', letterSpacing: '1px', lineHeight: '35px' }}>

      <Row>
        <Col sm>
          <Image src={whitelogo} width={130} height={19} />

          <div className='mt-4 '>
            <h5>Address</h5>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Store & Office <br />
              Jl. Setrasari Kulon III, No. 10-12, <br />  Sukarasa, Sukasari, Bandung, <br /> Jawa Barat, Indonesia 40152</p>

            <h5 className='mt-4'>Office Hour</h5>
            <p>Monday - Sunday <br />
              10.00 - 18.00</p>
          </div>
        </Col>
        <Col sm >
          <h4>Get in touch </h4>
          <Row className='mt-4 gap-0'>
            <Col sm>
              <h5 className='mt-3'>Phone</h5>
              <h5 className='mt-4'>Service Center</h5>
              <h5>Customer Service</h5>
            </Col>
            <Col sm style={{ fontSize: '15px', marginTop: '10px' }}>
              <p>022-20277564</p>
              <p className='mt-4'>0811-233-8899</p>
              <p className='mt-4'>0811-235-9988</p>
            </Col>
          </Row>
          <Row className='mt-4'>
            <Image src={Facebook} width={32} className='col' />
            <Image src={Instagram} className='col' width={32} />
            <Image src={Twitter} className='col' width={32} />
            <Image src={Youtube} className='col' width={32} />
          </Row>
        </Col>
        <Col sm className='ms-4'><h4>Useful Link</h4>
          <p className='mt-4'>Warranty & Complaints <br />
            Order & Shipping <br />
            Tracking Order <br />
            About Us <br />
            Repair <br />
            Terms <br />
            FAQ</p></Col>
        <Col sm><h4>Campaign</h4>
          <p className='mt-4'>Mengenal Arti Cukup <br />
            Tell Your Difference <br />
            Waykambas <br />
            Rebrand <br />
            Gallery <br />
            Singo <br />
            Rakai</p></Col>
      </Row>
    </Container>
  );
} export default ResponsiveAutoExample;