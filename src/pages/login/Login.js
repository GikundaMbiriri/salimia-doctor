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
import { loginUser } from "../../redux/actions/userAction";
import './login.css'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom';
import doctor from '../../images/logo.jpg'
const styles = (theme) => ({ ...theme.spread });


function Login(props) {
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
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
  };
  props.loginUser(userData, props.history);
};
const {
  UI:{loading},classes
}=props;
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
  <div className="form-group">
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
  <div className="form-group">
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
        {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
   
    {/* <label for="exampleInputPassword1">Password</label>
    <input type="password" value={password} onChange={event => setPassword(event.target.value)} class="form-control" id="exampleInputPassword1" placeholder="Password"/> */}


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
              Login
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <br />
            <small>
              dont have an account ? sign up <Link to="/register">here</Link>
            </small>

            </div>
        </div>
        </div>
    )
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});
const mapActionsToProps = {
  loginUser,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Login))
