
import React from "react";
import Registration from './Registration';
import Login from './Login';

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <>
        <h1>Authentication in React</h1>

        <BrowserRouter>
          <p>
            <Link to="/registration">Registration</Link>
          </p>
          <p>
            <Link to="/login">Login</Link>
          </p>
          <Switch>
            <Route path="/Registration" component={Registration} />
            <Route path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </>

    </div>
  );
}

export default App;
