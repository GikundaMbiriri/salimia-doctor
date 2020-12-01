import React from 'react'
import './records.css'
import Navbar from '../../../components/navbar/Navbar'
import user from '../../../images/user1.jpg'
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import { MailOutline } from '@material-ui/icons';
function records() {
    return (
        <div>    <div className="navbar-area">
        <Navbar/>  
        </div>

            <div className="set">
                <div className="lk">
                    <img src={user} style={{width:"100px",height:"100px"}}/>
                    <div>peter</div>
                </div>
<div className="health-records"> <h2>Health Records</h2>
<table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col">info</th>
      <th scope="col">Diagonosis</th>
      <th scope="col">Results</th>
      <th scope="col">Treatment</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">20/12/2020<br/>St.anne<br/>Dr.Mgikunda</th>
      <td>Hpylory</td>
      <td>positive</td>
      <td><button className="btn btn-primary">view</button></td>
     
     

    </tr>
    <tr style={{display:"none"}}>
        hello there
      </tr>
      <hr/>

    <tr>
      <th scope="row">20/12/2020<br/>St.anne<br/>Dr.Mgikunda</th>
      <td>Hpylory</td>
      <td>positive</td>
      <td><button className="btn btn-primary">view</button></td>

    </tr>
  </tbody>
</table>
</div>


            </div>
        </div>
    )
}

export default records
