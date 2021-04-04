import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Calendar from "./components/Calendar";
import PhotoSubmitForm from "./components/PhotoSubmitForm";
<<<<<<< HEAD
import ServiceSelect from "./components/ServiceSelect"
=======
import About from "./components/About";
>>>>>>> dev
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/calendar" exact component={Calendar} />
      <Route path="/photosubmitform" exact component={PhotoSubmitForm} />
<<<<<<< HEAD
      <Route path="/serviceselect" exact component={ServiceSelect} />
=======
      <Route path="/about" exact component={About} />
>>>>>>> dev
    </Switch>
  </Router>
);