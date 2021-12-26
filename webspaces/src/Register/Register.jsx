import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Register = () => {
    return ( 
        <div>
            <ResponsiveAppBar/>
            <Form style={{marginLeft:'25%'}}>
            <Row className="mb-3">
        <Form.Group as={Col} md="4">
         <Form.Label>First name</Form.Label>
         <Form.Control required type="text" placeholder="First name"/>
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Last name</Form.Label>
          <Form.Control required type="text" placeholder="Last name"/>
		</Form.Group>
		</Row>
        <Form.Group as={Col} md="8" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group as={Col} md="8" controlId="formBasicPassword">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="number" placeholder="Phone Number" />
  </Form.Group>
  <Form.Group as={Col} md="8" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group as={Col} md="8" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember Me" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Register Now
  </Button> 
            </Form>
            </div>
     );
}
 
export default Register;