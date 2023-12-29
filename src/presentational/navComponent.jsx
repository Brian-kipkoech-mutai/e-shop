import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Badge from 'react-bootstrap/Badge';
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import  watchlogo from '../assets/watchlogo.png'

             const NavComponent = ( {textColor,mobileCheck}) => {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Montserrat:400,700&display=swap']
          }
        });
      }, []);
    
  return (

    
    <Navbar expand="lg" className= {mobileCheck? " bg-body-tertiary fixed-top" : ' fixed-top'}  >
      
        <Navbar.Brand href="#home" className="d-flex" style={{ fontFamily: 'Montserrat, sans-serif' ,fontSize:'30px',...textColor}} >
        <img
          src={watchlogo} // Using the imported logo image
          width="50"
          height="50"
          className="d-inline-block align-top  ms-2"
          alt="Company Logo"
            {...textColor} 
        />
          <div  style={{marginLeft:'20px'}}> SovereignTime</div>
        </Navbar.Brand >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
          <Nav  className="mx-auto "style={{ fontFamily: 'Montserrat, sans-serif' ,fontSize:'20px'}}>
          <Nav.Link href="#home" style={{marginLeft:'20px',...textColor}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{marginLeft:'20px',...textColor}}>Shop</Nav.Link>
            <Nav.Link href="#home" style={{marginLeft:'20px',...textColor}}>About Us</Nav.Link>
            <Nav.Link href="#home" style={{marginLeft:'20px',...textColor}}>Contact Us</Nav.Link>
          </Nav>
          <div className="ms-auto d-flex align-items-center justify-content-end" style={{ fontFamily: 'Montserrat, sans-serif' ,fontSize:'20px', ...textColor}}>
            <NavDropdown title="Menu" id="basic-nav-dropdown" className="ms-4"      menuVariant="dark">
              <NavDropdown.Item href="#action/3.1" >login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FAQs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"> Blog/Articles:</NavDropdown.Item>
            </NavDropdown>
            <Button variant="outline-dark" className='me-3' style={{marginLeft:'100px' ,...textColor, }}>
              <i className="bi bi-cart-fill me-1"></i> Cart{' '}
              <Badge bg="secondary">3</Badge>
              {/* Replace "3" with the count of items in the cart */}
            </Button>
          </div>
        </Navbar.Collapse>
      
    </Navbar>
  );
};

export default NavComponent;
