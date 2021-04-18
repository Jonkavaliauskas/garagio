import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/ShopOwner/Login";
import Register from "./components/ShopOwner/Register";
import ShopCalendar from "./components/ShopOwner/ShopDashboard/ShopCalendar";
import PhotoSubmitForm from "./components/Other/PhotoSubmitForm";
import ServiceSelect from "./components/Customer/ServiceSelect";
import ShopDashboard from "./components/ShopOwner/ShopDashboard/ShopDashboard";
import About from "./components/Other/About";
import FakeProfile from "./components/Other/FakeProfile";
import ShopList from "./components/Customer/ShopList";
import FinalizeAppointment from "./components/Customer/FinalizeAppointment";
import AppointmentShow from "./components/Customer/AppointmentShow";
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