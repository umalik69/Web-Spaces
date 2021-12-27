import React from 'react';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import axios from 'axios';

import SingleCourse from './SingleCourse';
import { Grid } from '@mui/material';
const Courses = () => {
    const [courses, setCourses]=React.useState([]);
    const getData=()=>{axios.get("http://localhost:4000/courses/json")
    .then((res)=>{
        setCourses(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })}
   React.useEffect(getData,[]);  
    return ( 
        <div>
        <ResponsiveAppBar/>
        <h1 style={{textAlign:'center'}}>Courses</h1>
        <Grid container spacing={3} style={{marginTop:'3px'}}>
        {courses.map((courses, index)=>( 
            <SingleCourse key={index} courses={courses}/>

        ))}
        </Grid>
        </div>
     );
}
 
export default Courses;