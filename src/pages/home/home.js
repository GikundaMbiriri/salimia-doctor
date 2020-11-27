import React,{useState,useEffect} from 'react'
import AOS from 'aos';
import "animate.css/animate.min.css";

import './home.css'
import Navbar from '../../components/navbar/Navbar'
function Login() {
	
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
	
    return (
		
        <div>
        
      <header className="header-area">
      
  <div className="navbar-area">
    <div className="container">
    <Navbar/>
    </div>
  </div>
  <div className="intro-area">
    <div className="container" data-aos="flip-left">
      <h2>Bringing the doctor closer to you</h2>
	 
      <p>Building a healthier nation</p>
    </div>
  </div>
</header>
        </div>
    )
}

export default Login
