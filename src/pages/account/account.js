import React from 'react'
import './account.css'
import Navbar from '../../components/navbar/Navbar'
import user from '../../images/user.png'
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
                <div className="profile">
                <div>
            <img src={user} className="i"/>
            </div>
            <div>
                <p style={{color:"blue"}}>Peter Mbiriri</p>
                <p><span style={{color:"blue"}}>Age:</span>20 <span style={{color:"#6A5ACD"}}>Sex:</span>Male</p>
            </div>

<div>
    <p><span style={{color:"blue"}}>Monitored under:</span>St Anne</p>
    <p><span style={{color:"blue"}}>patient ID:</span>36927683</p>
</div></div>
<div className="data">
<div className="email"><div><MailOutline style={{color:"#6A5ACD"}}/>Email</div><div className="y">petermbiriri8957@gmail.com<div style={{color:"blue"}}>verified</div>

</div>

</div>
<div className="email"><div><PermPhoneMsgIcon style={{color:"#6A5ACD"}}/>Mobile</div><div className="y">07137999975<div style={{color:"blue"}}>verified</div>

</div>

</div>

</div>
<hr/>
            </div>
        </div>
        </div>
    )
}

export default account
