import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import home from './pages/home/home'
import about from './pages/about/about'
import login from './pages/login/Login'
import register from './pages/register/Register'

function App() {
  return (
    <div>
      <Router>
       <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/about" component={about} />
                <Route exact path="/login" component={login} />
                <Route exact path="/register" component={register} />

                {/* <Route exact path="/create" component={create} />
                <AuthRoute exact path="/login" component={login} />
                <AuthRoute exact path="/signup" component={signup} /> */}
              </Switch>
              </Router>
    </div>
  );
}

export default App;
