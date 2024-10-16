import { useContext } from 'react';
import { CartContext } from '../../../Features/CartContext';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../../../images/logo.png';
import search from '../../../images/search.png';
import user from '../../../images/user.png';
import cartIcon from '../../../images/cartIcon.png';

function NavbarComponent() {
  const { cart } = useContext(CartContext);

  
  
  return (
    <>
    <Navbar expand="lg" className="bg-transparent fs-5 fw-medium ms-10">
      <Container fluid className="pt-3 gap-5">
       <Navbar.Brand className="ps-5 ms-5" >
        <Image src={logo} alt='logo' width={150} />    
       </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-5 ms-5 my-2 my-lg-0 gap-4"
            style={{ maxHeight: '200px' , fontFamily: 'Taviraj'}}
            navbarScroll
          >
            <Nav.Link href="/">Watches</Nav.Link>
            <Nav.Link href="#eyewear">Eyewear</Nav.Link>
            <Nav.Link eventKey="link-event-key">
            Mobile Accessories
            </Nav.Link>
            
           </Nav>
          
<Nav.Link eventKey="link-event-key" >
    <Image src={search} alt='search' width={25} height={23}/>
</Nav.Link>


<Nav.Link eventKey="link-event-key" id='navlink' className=' ms-10' >
    <Image src={user} alt='login' width={23}   />

</Nav.Link>
<Nav.Link className='ms-1 font-taviraj text-muted' eventKey="link-event-key"  >
  Log In
</Nav.Link>
<Nav.Link id='navCart' href='/Cart' eventKey="link-event-key" style={{background: 'rgba(241, 221, 201, 1)' , borderRadius:'50%',height:35  , marginTop:10 ,paddingBottom:0 ,marginLeft:'50px',paddingTop:'10px' ,paddingRight:10 ,paddingLeft:'5px'}}>
  
    <Image src={cartIcon} alt='cart' style={{width:20 }} />{cart.length}
   
</Nav.Link>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}

export default NavbarComponent;