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
<div className="con">
  <div className="front">
    <h1 className="title">Faisal Ansari</h1>
    <span className="description">I am a graphic designer and art director. I am as well specialised in front end web design, user experience and creating identities. Throughout my career, I have worked with companies of all shapes and sizes that enriched my experience.</span>
  </div>
  <div className="back">
    <h1 className="title">Contact Me</h1>
    <div className="input-box">
      <input type="text" name="name" id="name" autocomplete="off" required/>
      <label for="name">Your name</label>
    </div>
    <div className="input-box">
      <input type="text" name="email" id="email" autocomplete="off" required/>
      <label for="email">Your email</label>
    </div>
    <div className="input-box">
      <textarea name="msg" id="msg" cols="30" rows="2" autocomplete="off" required></textarea>
      <label for="msg">Your message</label>
    </div>
    <button className="send">Send</button>
  </div>
</div>
        </div>
    )
}

export default Login
