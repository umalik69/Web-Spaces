import React from 'react';
import { Row } from 'react-bootstrap';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import DigitalMarketing from './DigitalMarketing';
import SearchEngineOptimization from './SearchEngineOptimization';
import WebDevelopment from './WebDevelopment';
import Logo from './logo.png';
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();
    return ( 
        <Row>
<ResponsiveAppBar/>
        <DigitalMarketing/>
        <SearchEngineOptimization/>
        <WebDevelopment/>
        <div style={{width:'100%',backgroundColor:'black', border:'1px solid'}}>
<h1 style={{color:'#978032', fontSize:'20px',marginTop:'3%',  width:'10%'}}> Web Spaces </h1>
<p style={{color:'#978032',width:'30%', marginBottom:'3%', float:'left'}}>Web Spaces Internet Marketing Agency is a full-service digital marketing agency. Attract, Impress, and Convert more leads online and get results with Web Spaces.</p>
<div style={{marginLeft:'50%',width:'50%'}}>
<img width="100px" height="100px" src={Logo}  alt="logo"  />
<h1 onClick={() => navigate('/ContactUs')} style={{color:'#978032',float:'right',marginTop:'1%',marginRight:'3%'}} > Contact Us </h1>
</div>
 

</div>
        </Row>
        
        
    );
}
 
export default Services;