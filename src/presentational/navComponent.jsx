import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Badge from 'react-bootstrap/Badge';
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import  watchlogo from '../assets/watchlogo.png'

const NavComponent = () => {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Montserrat:400,700&display=swap']
          }
        });
      }, []);
    
  return (

    
    <Navbar expand="lg" className="bg-body-tertiary"  >
      <Container>
        <Navbar.Brand href="#home" className="d-flex" style={{ fontFamily: 'Montserrat, sans-serif' ,fontSize:'30px'}}>
        <img
          src={watchlogo} // Using the imported logo image
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Company Logo"
        />
          <div  style={{marginLeft:'20px'}}> SovereignTime</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
          <Nav className="mx-auto "style={{ fontFamily: 'Montserrat, sans-serif' ,fontSize:'20px'}}>
          <Nav.Link href="#home" style={{marginLeft:'20px'}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{marginLeft:'20px'}}>Shop</Nav.Link>
            <Nav.Link href="#home" style={{marginLeft:'20px'}}>About Us</Nav.Link>
            <Nav.Link href="#home" style={{marginLeft:'20px'}}>Contact Us</Nav.Link>
          </Nav>
          <div className="ms-auto d-flex align-items-center justify-content-end" style={{ fontFamily: 'Montserrat, sans-serif' ,fontSize:'20px'}}>
            <NavDropdown title="Menu" id="basic-nav-dropdown" className="me-4">
              <NavDropdown.Item href="#action/3.1">login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FAQs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"> Blog/Articles:</NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-dark" className='ms-10' style={{marginLeft:'100px'}}>
              <i className="bi bi-cart-fill me-1"></i> Cart{' '}
              <Badge bg="secondary">3</Badge>
              {/* Replace "3" with the count of items in the cart */}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
