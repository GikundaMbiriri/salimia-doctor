import React,{useEffect,useState} from 'react'
import PropTypes from "prop-types"
import { connect } from "react-redux";
import { withStyles,createMuiTheme } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  circularProgress,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { signupUser } from "../../redux/actions/userAction";
import './register.css'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom';
import doctor from '../../images/logo.jpg'
const styles = (theme) => ({ ...theme.spread });
function Register(props) {
  const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [confirmPassword,setconfirmPassword]=useState("")
const [firstname,setFirstname]=useState("")
const [lastname,setLastname]=useState("")

const [errors,setErrors]=useState({})
useEffect(() => {
  setErrors(props.UI.errors)
  console.log('Prop Received: ', props.UI.errors);
}, [props.UI.errors])
const handleSubmit = (event) => {
  event.preventDefault();

  const userData = {
    email: email,
    password: password,
    confirmPassword,
    lastName:lastname,
    firstName:firstname
  };
  props.signupUser(userData, props.history);
};
const {
  UI:{loading},classes
}=props;
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
  <TextField
              id="firstname"
              name="firstname"
              type="firstname"
              label="firstname"
              className={classes.TextField}
              helperText={errors.firstName}
              error={errors.email ? true : false}
              
              value={firstname}
              onChange={event => setFirstname(event.target.value)}
              fullWidth
            />
  </div>
  <div class="form-group">
  <TextField
              id="lastname"
              name="lastname"
              type="lastname"
              label="lastname"
              className={classes.TextField}
              helperText={errors.lastName}
              error={errors.email ? true : false}
              
              value={lastname}
              onChange={event => setLastname(event.target.value)}
              fullWidth
            />
  </div>
  <div class="form-group">
  <TextField
              id="email"
              name="email"
              type="email"
              label="email"
              className={classes.TextField}
              helperText={errors.email}
              error={errors.email ? true : false}
              
              value={email}
              onChange={event => setEmail(event.target.value)}
              fullWidth
            />
  </div>
  <div class="form-group">
  <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.TextField}
              helperText={errors.password}
              error={errors.password ? true : false}
              
              value={password}
              onChange={event => setPassword(event.target.value)}
              fullWidth
            />
  </div>
  <div class="form-group">
  <TextField
              id="confirmPassword"
              name="confirmPassword"
              type="confirmPassword"
              label="confirmPassword"
              className={classes.TextField}
              helperText={errors.confirmPassword}
              error={errors.confirmPassword ? true : false}
              
              value={confirmPassword}
              onChange={event => setconfirmPassword(event.target.value)}
              fullWidth
            />
  </div>
  
</form>
            </div>
            <div className="b">
          
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
              onClick={handleSubmit}
            >
              Register
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <br />
            <small>
              already have an account ? sign up <Link to="/login">here</Link>
            </small>
            </div>
        </div>
        </div>
    )
}
Register.propTypes = {
  signupUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});
const mapActionsToProps = {
  signupUser,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Register))
