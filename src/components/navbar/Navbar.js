import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
function Navbar() {
    const [cake,setCake]=useState(true)

    return (
        <div>
            <nav className="site-navbar">
        <a href="#home" className="site-logo">Salimia Doctor</a>

        <ul className={cake?'':'open'} onClick={()=>cake?'':setCake(!cake)}>
          <li><Link to="/">home</Link></li>
          <li><Link  to="/about">about</Link ></li>
          <li><Link  to="#">Make Appointment</Link ></li>
          <li><Link  to="#">contact</Link ></li>
        </ul>

        <button className={cake?'nav-toggler':'nav-toggler toggler-open'} onClick={()=>setCake(!cake)}>
          <span></span>
        </button>
      </nav>
        </div>
    )
}

export default Navbar
