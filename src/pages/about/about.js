import React,{useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import "animate.css/animate.min.css";
import AOS from 'aos';
import './about.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Df from './About1'


function About() {
  
    return (
        <div>
            <div className="navbar-area">
          <Navbar/>  
          </div>
<Df/>
        
        </div>
        
    )
}

export default About
