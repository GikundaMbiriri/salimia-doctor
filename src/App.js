import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createMuiTheme } from "@material-ui/core/styles";

import store from "./redux/store";
import jwtDecode from "jwt-decode";
import { SET_AUTHENTICATED } from "./redux/types";
//import { logoutUser, getUserData } from "./redux/actions/userAction";
import axios from "axios";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import './App.css';
import home from './pages/home/home'
import info from './pages/info/info'
import about from './pages/about/about'
import login from './pages/login/Login'
import register from './pages/register/Register'
axios.defaults.baseURL =
  "https://us-central1-salimia-doctor.cloudfunctions.net/api/";
  const theme = createMuiTheme({
    palette: {
      light: "#33c9dc",
      main: "#00bxd4",
      dark: "#008394",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "b22a00",
      contrastText: "#fff",
    },
    spread: {
      typography: {
        useNextVariants: true,
      },
      form: {
        textAlign: "center",
      },
      image: {
        margin: "20px auto 20px auto",
        width: "70px",
      },
      pageTitle: {
        margin: "10px auto 10px auto",
      },
      TextField: {
        margin: "10px auto 10px auto",
      },
      button: {
        marginTop: 20,
        position: "relative",
      },
      customError: {
        color: "red",
        fontSize: "0.8rem",
        marginTop: 10,
      },
      progress: {
        position: "absolute",
      },
    },
  });
  
  const token = localStorage.FBIdToken;
  // if (token) {
  //   const decodedToken = jwtDecode(token);
  //   if (decodedToken.exp * 1000 < Date.now()) {
  //     window.location.href = "/login";
  //   } else {
  //     store.dispatch({ type: SET_AUTHENTICATED });
  //     axios.defaults.headers.common["Authorization"] = token;
  //   }
  // }
function App() {
  return (
    <MuiThemeProvider theme={theme}>

    <Provider store={store}>

    <div>
      <Router>
       <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/about" component={about} />
                <Route exact path="/login" component={login} />
                <Route exact path="/register" component={register} />
                <Route exact path="/info" component={info} />

                {/* <Route exact path="/create" component={create} />
                <AuthRoute exact path="/login" component={login} />
                <AuthRoute exact path="/signup" component={signup} /> */}
              </Switch>
              </Router>
    </div>
    </Provider>
    </MuiThemeProvider>
  );
}

export default App;
