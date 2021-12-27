import{BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Home from './components/Home';
import Services from './Services/Services';
import Courses from './Courses/Courses';
import ContactUs from './ContactUs/ContactUs';
import About from './About/About';
import DigitalMarketing from "./Services/DigitalMarketing";
import SearchEngineOptimization from "./Services/SearchEngineOptimization";
import WebDevelopment from "./Services/WebDevelopment";
import CWD from './Courses/CWD';
import CSEO from './Courses/CSEO';
import CDM from './Courses/CDM';
import Login from './Login/Login';
import Register from './Register/Register';



function App() {
 

  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/Courses/WebDevelopment" exact element={<Courses/>} />
      <Route path="/Courses/seo" exact element={<Courses/>} />
      <Route path="/Courses/DigitalMaketing" exact element={<Courses/>} />   
      <Route path="/Services/WebDevelopment" exact element={<Services/>} />
      <Route path="/Services/seo" exact element={<Services/>} />
      <Route path="Services/DM" exact element={<Services/>}/>
      <Route path="/ContactUs" exact element={<ContactUs/>} />
      <Route path="/About" exact element={<About/>} />
      <Route path="/Courses" exact element={<Courses/>} />
      <Route path="/Services" exact element={<Services/>} />
      <Route path="/Login" exact element={<Login/>} />
      <Route path="/Register" exact element={<Register/>} />
      <Route path="/" exact element={<Home/>} />
    
      </Routes>
      </div>
    </Router>
  );
}

export default App;
