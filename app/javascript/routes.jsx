import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Home1 from "./components/Home1";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/calendar" exact componant={Calendar} /> */}

    </Switch>
  </Router>
);