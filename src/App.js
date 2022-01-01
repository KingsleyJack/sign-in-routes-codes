import React from "react";
import { BrowserRouter as Router, Route, Switch   } from "react-router-dom";
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
export default function Routes() {

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </Router>
  )
}