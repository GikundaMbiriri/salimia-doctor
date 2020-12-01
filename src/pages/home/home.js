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
    <div className="container" >
      <h2>Bringing the doctor closer to you</h2>
	 
      <p>Building a healthier nation</p>
    </div>
  </div>
</header>
<div className="rest">
<div className="about"><h2>about us</h2><hr/></div>
<div className="contact"><h2>our mission</h2><hr/></div>

</div>

        </div>
    )
}

export default Login
