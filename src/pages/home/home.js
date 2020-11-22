import React,{useState,useEffect} from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
function Login() {
	

	
    return (
		
        <div>
        
      <header className="header-area">
      
  <div className="navbar-area">
    <div className="container">
    <Navbar/>
    </div>
  </div>
  <div className="intro-area">
    <div className="container">
      <h2>Bringing the doctor closer to you</h2>
	 
      <p>Building a healthier nation</p>
    </div>
  </div>
</header>
        </div>
    )
}

export default Login
