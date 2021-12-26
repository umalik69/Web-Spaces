import * as React from 'react';
import Logo from './logo.png';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {NavDropdown} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const ResponsiveAppBar = () => {
  
  const navigate = useNavigate();
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

   const myRef = useRef(null)
   const executeScroll = () => scrollToRef(myRef)
  
  return (
    <Navbar collapseOnSelect fixed='static-top'  style={{backgroundColor:"#978032"}}expand="lg">
<Navbar.Brand >
<img width="80px" height="60px" style={{padding:"0%"}} className="img-responsive" src={Logo}  alt="logo" onClick={() => navigate('/#')} />
</Navbar.Brand>
  <Container>
    <Navbar.Toggle aria-controls='respnsive-navbar-nav'/>
    <Navbar.Collapse id='respnsive-navbar-nav'>
    <Nav className='m-auto'>
    <NavDropdown title="Services" style={{fontWeight: "bold"}} id="navbarScrollingDropdown">
    <NavDropdown.Item   onClick={()=> executeScroll}>Digital Marketing</NavDropdown.Item>
    <NavDropdown.Item onClick={() => navigate('/Services')}>Search Engine Optimization</NavDropdown.Item>
    <NavDropdown.Item onClick={() => navigate('/Services')}>Web Development</NavDropdown.Item>
    </NavDropdown>
    <NavDropdown title="Courses" style={{fontWeight: "bold"}} id="navbarScrollingDropdown">
    <NavDropdown.Item onClick={() => navigate('/Courses/DigitalMaketing')}>Digital Marketing</NavDropdown.Item>
    <NavDropdown.Item onClick={() => navigate('/Courses/seo')}>Search Engine Optimization</NavDropdown.Item>
    <NavDropdown.Item onClick={() => navigate('/Courses/WebDevelopment')}>Web Development</NavDropdown.Item>
    </NavDropdown>
    <Nav.Link style={{fontWeight: "bold"}} onClick={() => navigate('/About')}>
          About
    </Nav.Link>
    <Nav.Link style={{fontWeight: "bold"}} onClick={() => navigate('/ContactUs')}>
          Contact Us
    </Nav.Link>
    </Nav>
    <Button  variant="contained" onClick={() => navigate('/Login')} style={{marginRight:"5px" , backgroundColor:'black', color:'#978032'} } >Login</Button>
    <Button  variant="contained" onClick={() => navigate('/Register')} style={{float:'right' , backgroundColor:'black', color:'#978032' }}>Register</Button>
</Navbar.Collapse>
</Container>
</Navbar>
  )
    
};
export default ResponsiveAppBar;
