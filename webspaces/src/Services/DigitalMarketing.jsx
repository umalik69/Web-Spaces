import React from 'react';
import DM from './DM.png';
import { Row } from 'react-bootstrap';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const DigitalMarketing = () => {
    const navigate = useNavigate();
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 


const myRef = useRef(null)
const executeScroll = () => scrollToRef(myRef)
    return ( 
<Row>

<div style={{padding:'8px'}} ref={myRef} > 
<h1>Digital Marketing</h1>
<p style={{width:'50%', float:'left'}}>Web Spaces is a dynamic, versatile and full-service digital marketing agency that doesn’t rely on smoke and mirrors to attract new clients. Instead, Web Spaces trusts its own search engine optimization (SEO) and marketing skills to drive new customers to our website.
We’re not a static company. We don’t limit ourselves to specific industries. So many other agencies rely on a one-size-fits-all approach, many times offering you the same strategy and cookie-cutter website as your competitor down the street.
Web Spaces works with you to produce customized internet marketing services and a plan that aligns with your unique business needs. We become an extension of your team, a partner that understands your market and goals, rather than just an agency that executes strategies blindly.
Unlike so many other agencies that use glitz and glamor to close sales and then fail to execute, Web Spaces focuses on client relationships and results. We always deliver substance, not false promises, ensuring we maximize your budget, so you get the most return on investment (ROI).
<br/><Button style={{backgroundColor:'#978032', color:'black'}} onClick={() => navigate('/ContactUs')}>Contact Us</Button>
</p>
<img  width={'50%'} height={'350'} src={DM} float='left' alt="Digital Marketing"  />
</div>
</Row>
     );
}
 
export default DigitalMarketing;