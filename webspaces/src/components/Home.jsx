import React from 'react';
import DM from './DM.png';
import SEO from './SEO.png';
import WD from './WD.png';
import Logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
const Home = () => {
    const navigate = useNavigate();
  
    return ( 
        <div > 
        <ResponsiveAppBar/>
        <div style={{height:'50%', width:'100%',backgroundColor:'black', border:'1px solid' }} >
<div style={{marginTop:'10%',marginBottom:'12%', textAlign:'center'}} >
<h1 style={{color:'#978032', fontSize:'60px'}}> Web Spaces </h1>
<p style={{color:'#978032', fontSize:'25px'}}> A Digital Marketing Agnecy </p>
<Button style={{backgroundColor:'#978032', color:'black'}} onClick={() => navigate('/ContactUs')}>Contact Us</Button>
</div>
</div> 
<div mb='4'><h1 style={{textAlign:'center'}} > Our Services </h1></div>
<Row>

<div style={{padding:'8px'}} > 
<h1>Digital Marketing</h1>
<p style={{width:'50%', float:'left'}}>Web Spaces is a dynamic, versatile and full-service digital marketing agency that doesn’t rely on smoke and mirrors to attract new clients. Instead, Web Spaces trusts its own search engine optimization (SEO) and marketing skills to drive new customers to our website.
We’re not a static company. We don’t limit ourselves to specific industries. So many other agencies rely on a one-size-fits-all approach, many times offering you the same strategy and cookie-cutter website as your competitor down the street.
Web Spaces works with you to produce customized internet marketing services and a plan that aligns with your unique business needs. We become an extension of your team, a partner that understands your market and goals, rather than just an agency that executes strategies blindly.
Unlike so many other agencies that use glitz and glamor to close sales and then fail to execute, Web Spaces focuses on client relationships and results. We always deliver substance, not false promises, ensuring we maximize your budget, so you get the most return on investment (ROI).
<br/><Button style={{backgroundColor:'#978032', color:'black'}} onClick={() => navigate('/ContactUs')}>Contact Us</Button>
</p>
<img  width={'50%'} height={'350'} src={DM} float='left' alt="Digital Marketing"  />
</div>

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
<div style={{width:'100%',backgroundColor:'black', border:'1px solid'}}>
<h1 style={{color:'#978032', fontSize:'20px',marginTop:'3%',  width:'10%'}}> Web Spaces </h1>
<p style={{color:'#978032',width:'30%', marginBottom:'3%', float:'left'}}>Web Spaces Internet Marketing Agency is a full-service digital marketing agency. Attract, Impress, and Convert more leads online and get results with Web Spaces.</p>
<div style={{marginLeft:'50%',width:'50%'}}>
<img width="100px" height="100px" src={Logo}  alt="logo"  />
<h1 onClick={() => navigate('/ContactUs')} style={{color:'#978032',float:'right',marginTop:'1%',marginRight:'3%'}} > Contact Us </h1>
</div>
 

</div>

</Row>

        </div>

            

        
            
       
        
      
     );
}
 
export default Home;