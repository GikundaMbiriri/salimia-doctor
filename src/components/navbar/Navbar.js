import React ,{useState} from 'react'
import './navbar.css'
function Navbar() {
    const [cake,setCake]=useState(true)

    return (
        <div>
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
    )
}

export default Navbar
