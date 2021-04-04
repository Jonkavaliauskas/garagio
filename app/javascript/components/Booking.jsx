import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import Footer from './Footer'
import ServiceCheckbox from './ServiceCheckbox'
import Button from './Button'

const Booking = (props) => {
    return (
        <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Garagio</h1>
          <p className="lead">Let's Finish Your Booking!</p>
          <hr />
          <div className="d-flex flex-row justify-content-center mt-3">
          <div className="d-flex flex-column m-3">
          <ServiceCheckbox
              text="Name"
            />
          <ServiceCheckbox
              text="Email"
            />
          <ServiceCheckbox
              text="Phone"
            />  
          <ServiceCheckbox
              text="Date and Time"
            />  
          <ServiceCheckbox
              text="Message"
            />          
            <div styles={{textAlign: "center", width: '200px', display: 'block', maxWidth: '300px'}} className="btn d-flex justify-content-center">
          <Button
              className=""
              text="Submit"
            />
          </div> 
          </div>
        </div>
        </div>
      </div>
    </div>
    )
}

export default Booking
