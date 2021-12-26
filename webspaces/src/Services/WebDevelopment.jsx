import React from 'react';
import { Row } from 'react-bootstrap';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WD from './WD.png';
const WebDevelopment = () => {
    const navigate = useNavigate();
    return ( 
        <Row>
            <div style={{padding:'8px'}} > 
<h1>Web Development</h1>
<p style={{width:'50%', float:'left'}}>WIn today’s digital world, it is crucial to stay connected with your customers and prospects to leverage new markets and expand your business. 
Statistics show that approximately 4.57 billion people worldwide are active internet users, comprising 59 percent of the global population.
Within this online community, 53 percent perform research before connecting with a brand to ensure they are making the right decision.
A study from Episerver also found that 92 percent of consumers visit a brand’s website with multiple intentions other than buying.
These include product/service research, comparison shopping and business review. This data proves consumers do not purchase on impulse.
Given the vast global marketplace, it is only reasonable for online shoppers to assess and compare brands to find the best possible offerings, prices and features.
Without a web presence, you automatically lose the opportunity to get in touch with your target audience and popularize your brand. 
Build consumer trust and gain market referrals with an interactive, custom web page design.
<br/><Button style={{backgroundColor:'#978032', color:'black'}} onClick={() => navigate('/ContactUs')}>Contact Us</Button>
</p>
<img  width={'50%'} height={'350'} src={WD} float='left' alt="Web Development"  />
</div>
        </Row>
     );
}
 
export default WebDevelopment;