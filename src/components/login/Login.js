import React,{useState,useEffect} from 'react'
import './login.css'
function Login() {
	const [cake,setCake]=useState(true)
	

	
    return (
		
        <div>
      <header className="header-area">
  <div className="navbar-area">
    <div className="container">
      <nav className="site-navbar">
        <a href="#home" className="site-logo">Salimia Doctor</a>

        <ul className={cake?'':'open'} onClick={()=>cake?'':setCake(!cake)}>
          <li><a href="#">home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">Make Appointment</a></li>
          <li><a href="#">contact</a></li>
        </ul>

        <button className={cake?'nav-toggler':'nav-toggler toggler-open'} onClick={()=>setCake(!cake)}>
          <span></span>
        </button>
      </nav>
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
