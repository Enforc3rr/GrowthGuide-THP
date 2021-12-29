import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import LoginPage from "./components/LoginPage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}
