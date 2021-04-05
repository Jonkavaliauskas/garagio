import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from './Footer'
import ServiceCheckbox from './ServiceCheckbox'
import Button from './Button'

const ServiceSelect = (props) => {

  const [selectedServices, setSelectedServices] = useState([])

  const updateServices = (services, serviceName) => {
    if (services.includes(serviceName)) {
      // services.filter(currentItem => serviceName !== currentItem);
      services.splice(services.indexOf(serviceName), 1);
      setSelectedServices([...services]);
    }
    else {
      setSelectedServices([...services, serviceName]);
    }
  }

  return (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Garagio</h1>
          <p className="lead">Select the services you need for your repair, and we'll get you connected to car shops in no time!</p>
          <hr />
        </div>
        <div className="d-flex flex-row justify-content-center mt-3">
          <div className="d-flex flex-column m-3">
            <ServiceCheckbox
              className="serviceCheckbox"
              text="Technical Check"
              state={selectedServices}
              updateState={updateServices}
            />
            <ServiceCheckbox
              className="serviceCheckbox"
              text="Air Conditioning"
              state={selectedServices}
              updateState={updateServices}
            />
            <ServiceCheckbox
              className="serviceCheckbox"
              text="Oil Change"
              state={selectedServices}
              updateState={updateServices}
            />
            <ServiceCheckbox
              className="serviceCheckbox"
              text="Tire Change"
              state={selectedServices}
              updateState={updateServices}
            />
            <ServiceCheckbox
              className="serviceCheckbox"
              text="Transmission/Diff"
              state={selectedServices}
              updateState={updateServices}
            />
          </div>
          <div className="d-flex flex-column m-3">
            <ServiceCheckbox
              className="serviceCheckbox"
              text="Brakes"
              state={selectedServices}
              updateState={updateServices}
            />
            <ServiceCheckbox
              className="serviceCheckbox"
              text="Pre-Purchase Inspection"
              state={selectedServices}
              updateState={updateServices}
            />
            <ServiceCheckbox
              className="serviceCheckbox"
              text="Leakage Detection"
              state={selectedServices}
              updateState={updateServices}
            />
            <ServiceCheckbox
              className="serviceCheckbox"
              text="Glass"
              state={selectedServices}
              updateState={updateServices}
            />
            <ServiceCheckbox
              className="serviceCheckbox"
              text="Other"
              state={selectedServices}
              updateState={updateServices}
            />
          </div>
        </div>
        <div style={{ textAlign: "center", width: '200px', display: 'block', maxWidth: '300px' }} className="btn d-flex justify-content-center">
          <Link
            to={{
              pathname: "/chooseshop",
              state: {
                year: props.location.state.year,
                make: props.location.state.make,
                model: props.location.state.model,
                body: props.location.state.body,
                services: selectedServices
              },
            }}>
            <Button
              className=""
              text="Submit"
              onClick={
                console.log("Current selected services: " + selectedServices.toString())
              }
            />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ServiceSelect
