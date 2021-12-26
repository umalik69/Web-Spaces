import React from 'react';
import { Row } from 'react-bootstrap';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SEO from './SEO.png';
const SearchEngineOptimization = () => {
    const navigate = useNavigate();
    return ( 
        <Row>
        <div style={{padding:'8px'}} >
<h1>Search Engine Optimization</h1>
<img  width={'50%'} height={'350'} src={SEO} float='left' alt="Search Engine Optimization"  />
<p style={{width:'50%', float:'right', padding:'1px', }}>
You know what you need but you just don’t know how to get it. Our SEO specialists hear that over and over from SEO clients who contact Web Spaces Internet Marketing Agency.<br/>
<p style={{lineHeight:'1.8'}}>
You’re likely here because of one or more of the following reasons:<br/>
•  Your website isn’t being found online.<br/>
•  Your website traffic has diminished recently and you don’t know why.<br/>
•  Suddenly, your volume of incoming calls and leads has declined.<br/>
•  You’re starting a new website and want to ramp up new business quickly.<br/>
If any of these four pain points ring a bell, rest assured, you’ve come to the right SEO company. There’s a reason why Web Spaces is currently serving hundreds of SEO clients and providing optimization solutions to answer Google’s ever-changing algorithm.
<br/><Button style={{backgroundColor:'#978032', color:'black'}} onClick={() => navigate('/ContactUs')}>Contact Us</Button>
</p></p>
</div>
</Row>
     );
}
 
export default SearchEngineOptimization;