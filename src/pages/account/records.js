import React from 'react'
import './account.css'
import Navbar from '../../components/navbar/Navbar'
import user from '../../images/user1.jpg'
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import { MailOutline } from '@material-ui/icons';
function records() {
    return (
        <div>    <div className="navbar-area">
        <Navbar/>  
        </div>

            <div className="set">
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
    )
}

export default records
