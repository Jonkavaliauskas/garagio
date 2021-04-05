import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ShopCalendar from "./components/ShopDashboard/ShopCalendar";
import PhotoSubmitForm from "./components/PhotoSubmitForm";
import ServiceSelect from "./components/ServiceSelect";
import ShopDashboard from "./components/ShopDashboard/ShopDashboard";
import About from "./components/About";
import FakeProfile from "./components/FakeProfile";
import ShopList from "./components/ShopList";
import FinalizeAppointment from "./components/FinalizeAppointment";
import AppointmentShow from "./components/AppointmentShow";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/calendar" exact component={ShopCalendar} />
      <Route path="/photosubmitform" exact component={PhotoSubmitForm} />
      <Route path="/serviceselect" exact component={ServiceSelect} />
      <Route path="/dashboard" exact component={ShopDashboard} />
      <Route path="/about" exact component={About} />
      <Route path="/fakeprofile" exact component={FakeProfile} />
      <Route path="/chooseshop" exact component={ShopList} />
      <Route path="/finalizeappointment" exact component={FinalizeAppointment} />
      <Route path="/appointments/:appointmentId" component={AppointmentShow} />
    </Switch>
  </Router>
);