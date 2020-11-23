import React from 'react'
import './register.css'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom';
import doctor from '../../images/logo.jpg'
function register() {
    return (
      <div className="er1">
     
            <div className="navbar-area">
          <Navbar/>  
          </div>
        <div className="page1" >
            <div>
                <h2>Welcome!</h2>
            </div>
            <div className="log1">
              <img className="kl1" src={doctor}/>
            </div>
            <div className="form-carrier1">
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter First name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Last Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter last name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder= "Confirm Password"/>
  </div>
  
</form>
            </div>
            <div className="bts1">
            <button type="submit" class="bt1">register</button>
           <Link to="/login"> <button type="submit" class="bn1">Login</button></Link>

            </div>
        </div>
        </div>
    )
}

export default register
