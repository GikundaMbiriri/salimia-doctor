import React from 'react'
import './medical.css'
import Navbar from '../../../components/navbar/Navbar'
import user from '../../../images/user1.jpg'
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import { MailOutline } from '@material-ui/icons';
function account() {
    return (
        <div>    <div className="navbar-area">
        <Navbar/>  
        </div>
        <div className="carrier">
            <div className="nv">
<b>health profile</b>
<p>Health Trackers</p>
<p>Health Trackers</p>
<p>Health Trackers</p>
<p>Health Trackers</p>
<hr/>
<p>Health Trackers</p>
<p>Health Trackers</p>
<p>Health Trackers</p>
<p>Health Trackers</p>
<hr/>
<p>Health Trackers</p>
<p>Health Trackers</p>
<p>Health Trackers</p>
<p>Health Trackers</p>
<hr/>
            </div>
            <div className="det">
            <h4>Health Profile</h4>

                <div className="ds">
            <div className="k">
            <img src={user} className="i"/>
            <div>
    <p><span >Monitored under:</span>St Anne</p>
    <p><span >patient ID:</span>36927683</p>
</div>
            </div>
            <p style={{color:"blue"}}>Peter Mbiriri</p>

                <div className="profile">
          
            <div>
            <p> <b>Age</b></p>
                <p>20</p>
            </div>
            <div>
            <p> <b>Sex</b></p>
                <p>male</p>
            </div>
            <div>
               <p> <b>Insurance</b></p>
                <p>NHIF</p>
            </div>

</div>
<div className="data">
<div className="email"><div><MailOutline style={{color:"#6A5ACD"}}/>Email</div><div className="y">petermbiriri8957@gmail.com<div style={{color:"blue"}}>verified</div>


</div>
<div className="email"><div><PermPhoneMsgIcon style={{color:"#6A5ACD"}}/>Mobile</div><div className="y">07137999975<div style={{color:"blue"}}>verified</div>

</div>
</div>


</div>

</div>
<hr/></div>
<div className="health-records"> <h2>Health Records</h2>
<table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col">Health Condition</th>
      <th scope="col">Diagonised in</th>
      <th scope="col">Medication</th>
      <th scope="col">Treated by</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Bp</th>
      <td>2010</td>
      <td>100g Telmi40</td>
      <td>Mgikunda</td>

    </tr>
    <tr>
      <th scope="row">Diabeties</th>
      <td>2017</td>
      <td>200g Sulfonylureas</td>
      <td>Dr.Kinyanjui</td>

    </tr>
  </tbody>
</table>
</div>
<div className="health-records"> <h2>Medications</h2>
<table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col">Medication</th>
      <th scope="col">Taken for</th>
      <th scope="col">From-Till</th>
      <th scope="col">Prescribed by</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">ht 100mg</th>
      <td>BP</td>
      <td>29/11/2020-Long term</td>
      <td>Mgikunda</td>

    </tr>

  </tbody>
</table>
</div>
<div className="health-records"> <h2>Allergies</h2>
<table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col">Allergy</th>
      <th scope="col">Triggered by</th>
      <th scope="col">Medication</th>
      <th scope="col">Reaction</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Dustitis</th>
      <td>Dust particles</td>
      <td>Centium</td>
      <td>Sneezing</td>

    </tr>

  </tbody>
</table>
</div>
            </div>
        </div>
        </div>
    )
}

export default account
