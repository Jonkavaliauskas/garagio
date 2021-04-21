import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./ShopOwner/Login";
import Register from "./ShopOwner/Register";
import ShopCalendar from "./ShopOwner/ShopDashboard/ShopCalendar";
import PhotoSubmitForm from "./Other/PhotoSubmitForm";
import ServiceSelect from "./Customer/ServiceSelect";
import ShopDashboard from "./ShopOwner/ShopDashboard/ShopDashboard";
import About from "./Other/About";
import FakeProfile from "./Other/FakeProfile";
import ShopList from "./Customer/ShopList";
import FinalizeAppointment from "./Customer/FinalizeAppointment";
import AppointmentShow from "./Customer/AppointmentShow";
import { createBrowserHistory } from "history";

import { AuthProvider } from '../contexts/auth';

const history = createBrowserHistory();

function App() {    
    return (
        <AuthProvider>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path='/login' exact component={Login} />
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
        </AuthProvider>
    );
  }
  
  export default App;