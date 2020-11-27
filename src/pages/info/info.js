import React from 'react'
import './info.css';
import Navbar from '../../components/navbar/Navbar'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
const gender=[
    {
        value:"male",
        label:"male"
    },
    {
        value:"female",
        label:"female"
    },
]
const hospitals = [
    {
      value: 'st Anne',
      label: 'st Anne',
    },
    {
      value: 'Uzuri hospital',
      label: 'Uzuri hospital',
    },
    {
      value: 'Cure hospital',
      label: 'Cure hospital',
    },
    {
      value: 'Tiba Hospital',
      label: 'Tiba Hospital',
    },
  ];
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
function Info() {
    const classes = useStyles();
    const [hospital, setHospital] = React.useState('');
    const [sex, setSex] = React.useState('');
    const [tel, setTel] = React.useState(0);
    const [email, setEmail] = React.useState('');
    const [firstName, setfirstName] = React.useState('');
    const [lastName, setlastName] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [relationship, setRelationship] = React.useState('');
    const [age, setAge] = React.useState(0);

    const handleSex = (event) => {
        setSex(event.target.value);
      };
    const handleChange = (event) => {
      setHospital(event.target.value);
    };
    return (
        <div className="info">
            <div className="navbar-area">
          <Navbar/>  
          </div>
       <h3>Tell us more about you</h3>
        <form className={classes.root} noValidate autoComplete="off">
        <div>
        <TextField
              id="age"
              name="age"
              type="text"
              label="age"
             
              
              value={age}
              onChange={event => setAge(event.target.value)}
              fullWidth
            />
        <TextField
              id="tel"
              name="tel"
              type="text"
              label="tel"
             
              
              value={tel}
              onChange={event => setTel(event.target.value)}
              fullWidth
            />
          <TextField
            id="standard-select-hospital"
            select
            label="Gender"
            value={sex}
            onChange={handleSex}
            helperText="What is your sex"
          >
            {gender.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-select-hospital"
            select
            label="Select"
            value={hospital}
            onChange={handleChange}
            helperText="Please select your hospital"
          >
            {hospitals.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          </div>
          </form>
          <h3>Next of kin infomation</h3>
          <form className={classes.root} noValidate autoComplete="off">
        <div>
        <TextField
              id="firstName"
              name="firstName"
              type="text"
              label="firstName"
             
              
              value={firstName}
              onChange={event => setfirstName(event.target.value)}
              fullWidth
            />
        <TextField
              id="lastName"
              name="lastName"
              type="text"
              label="lastName"
             
              
              value={lastName}
              onChange={event => setlastName(event.target.value)}
              fullWidth
            />
             <TextField
              id="email"
              name="email"
              type="text"
              label="email"
             
              
              value={email}
              onChange={event => setEmail(event.target.value)}
              fullWidth
            />
             <TextField
              id="contact"
              name="contact"
              type="text"
              label="contact"
             
              
              value={contact}
              onChange={event => setContact(event.target.value)}
              fullWidth
            />
                <TextField
              id="relationship"
              name="relationship"
              type="text"
              label="relationship"
             
              
              value={relationship}
              onChange={event => setRelationship(event.target.value)}
              fullWidth
            />
          </div>
          </form>
          <button className="df"> Send</button>
          </div>
    )
}

export default Info
