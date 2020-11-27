import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import PropTypes from "prop-types"
import { connect } from "react-redux";
function Navbar(props) {
    const [cake,setCake]=useState(true)
    const {authenticated}=props.user

    return (
        <div>
            <nav className="site-navbar">
        <a href="#home" className="site-logo">Salimia Doctor</a>

        <ul className={cake?'':'open'} onClick={()=>cake?'':setCake(!cake)}>
          <li><Link to="/">home</Link></li>
          <li><Link  to="/about">about</Link ></li>
          <li><Link  to={authenticated?"/info":"/login"}>Make Appointment</Link ></li>
          <li><Link  to="#">contact</Link ></li>
        </ul>

        <button className={cake?'nav-toggler':'nav-toggler toggler-open'} onClick={()=>setCake(!cake)}>
          <span></span>
        </button>
      </nav>
        </div>
    )
}
Navbar.propTypes = {
  user: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
 
});

export default connect(
  mapStateToProps,
)(Navbar)
