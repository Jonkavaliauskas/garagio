import React from "react";
import { Link } from "react-router-dom";
import Footer from './Footer'
import Button from './Button'


export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Garagio</h1>
        <p className="lead">
          Connecting Drivers to Shop Owners easier than ever before!
        </p>
        <hr className="my-4" />
        <div className="container button-container">
          {/* {location.pathname === '/' && (
            <Button
              className="btn btn-lg custom-button"
              text='Login'
            />
          )} */}
          <Link
            to="/login">
            <Button
              className="btn btn-lg custom-button"
              text='Login'
            />
          </Link>
        &nbsp;
        <Link
            to="/register">
            <Button
              className="btn btn-lg custom-button"
              text='Register'
            />
          </Link>
        </div>
        <Footer />

      </div>
    </div>
  </div>
);