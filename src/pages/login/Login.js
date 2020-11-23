import React from 'react'
import './login.css'
import doctor from '../../images/logo.jpg'
function login() {
    return (
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
            <button type="submit" class="btn btn-primary">Submit</button>

        </div>
    )
}

export default login
