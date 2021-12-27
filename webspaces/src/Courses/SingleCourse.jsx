import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
const SingleCourse = ({courses}) => {
    const navigate = useNavigate();
    return (  
        <Grid item xs={6}>
            
            <h2>Cousrse Title: <h6>{courses.name}</h6></h2>
            <h2>Course Duaration:<h6>{courses.dur}</h6></h2>
            <Button variant="primary" type="submit" onClick={() => navigate('/Register')}>
                Register Now
  </Button>
            <hr/>
        </Grid>
    );
}
 
export default SingleCourse;