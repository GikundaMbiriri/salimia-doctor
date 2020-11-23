import React from 'react'
import './login.css'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom';
import doctor from '../../images/logo.jpg'
function login() {
    return (
      <div className="er">
     
            <div className="navbar-area">
          <Navbar/>  
          </div>
        <div className="page" >
            <div>
                <h2>Welcome!</h2>
            </div>
            <div className="log">
              <img className="kl" src={doctor}/>
            </div>
            <div className="form-carrier">
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
</form>
            </div>
            <div className="bts">
            <button type="submit" class="bt">Login</button>
            <Link to="/register"> <button type="submit" class="bn">Register</button></Link>

            </div>
        </div>
        </div>
    )
}

export default login
