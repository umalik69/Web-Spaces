import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const ContactUs = () => {
  const [fname,setFname]=React.useState("");
  const [lname,setLname]=React.useState("");
  const [email,setEmail]=React.useState("");
  const [ph,setPh]=React.useState("");
  const [msg,setMsg]=React.useState("");

    return ( 
        <div>
            <ResponsiveAppBar/>
            
            <Form style={{marginLeft:'25%'}} >
            <Row className="mb-3">
        <Form.Group as={Col} md="4">
         <Form.Label>First name</Form.Label>
         <Form.Control required type="text" placeholder="First name" onChange={(e) =>{
           setFname(e.target.value);
         }}/>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Last name</Form.Label>
          <Form.Control required type="text" placeholder="Last name"onChange={(e) =>{
           setLname(e.target.value);
         }}/>
		</Form.Group>
		</Row>
        <Form.Group as={Col} md="8" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e) =>{
           setEmail(e.target.value);
         }}/>
 {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>*/}
  </Form.Group>

  <Form.Group as={Col} md="8" controlId="formBasicPassword">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="number" placeholder="Phone Number"onChange={(e) =>{
           setPh(e.target.value);
         }} />
  </Form.Group>
  <Form.Group as={Col} md="8" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} onChange={(e) =>{
           setMsg(e.target.value);
         }} />
  </Form.Group>
   <Button variant="primary" type="submit" onClick={(e)=>{
     axios.post("http://localhost:4000/queries/json", {fname,lname,email,ph,msg}).then((res)=>{
       console.log(res.data);

     })
     .catch((err)=>{
       console.log(err);
     })
   }}>
    Submit
  </Button> 
            </Form>
            </div>
        
        
     );
}

 
export default ContactUs;