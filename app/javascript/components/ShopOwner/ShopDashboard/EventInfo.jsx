import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../Button";

const EventInfo = ({ event, closeEvent }) => {
  const fetchApptCar = async (car_id) => {
    const res = await fetch(`http://localhost:3000/api/v1/cars/${car_id}`);
    const data = await res.json();

    setApptCar(data);
  };

  const formatDate = (dateObject) => {
    const year = dateObject.getFullYear();
    const date = dateObject.getDate();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthName = months[dateObject.getMonth()];
    const dayName = days[dateObject.getDay()];

    return `${dayName}, ${monthName} ${date}, ${year}`
  }

  const [apptCar, setApptCar] = useState({});
  const [carIssue, setCarIssue] = useState('');
  const customer = event["customer"];
  const appt = event["appt"];
  const dateObject = new Date(appt["date"]);

  useEffect(() => {
    setCarIssue(appt['car_issue']);
    fetchApptCar(event["appt"]["car_id"]);
  }, [event]);

  const submitPatch = (formData) => {
    const USER_URL = `http://localhost:3000/api/v1/appointments/`;

    const data = {
      car_issue: formData.get("car_issue")
    };

    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        car_issue: formData.get("car_issue")
      })
    };

    fetch(USER_URL + appt['id'], configObj)
      .then(res => {
        console.log(res);
      })
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    submitPatch(formData);
    window.location.reload();
  }

  return (
    <form
      className="d-flex flex-column m-4 event-info-box"
      style={{ width: 450, float: "right" }}
    >
      <div>
        <h4 style={{ float: "left" }}>{formatDate(dateObject)}</h4>
        <div
          style={{
            position: "relative",
            float: "right",
          }}
        >
          <Button className="btn" text="Close" onClick={closeEvent} />
          &nbsp;
          <Button className="btn" text="Save" onClick={handleSubmit} />
        </div>
      </div>
      <p className="remove-top-margin">
        {dateObject.toLocaleString("en-US", { timeZone: "America/New_York" })}
        {/* {dateObject.toLocaleString()} */}
      </p>
      <div>
        <h5 className="info-header">{customer["name"]}</h5>
        <p className="information">{customer["email"]}</p>
        <p className="information">{customer["phone_number"]}</p>
      </div>
      <div>
        <h5 className="info-header">Vehicle Info</h5>
        <p className="information">
          {apptCar["year"]} {apptCar["make"]} {apptCar["model"]}
        </p>
      </div>
      <div>
        <h5>Vehicle Issue</h5>
        <textarea
          name="car_issue"
          rows="4"
          className="car_issue form-control"
          value={carIssue}
          onChange={(event) => {
            event.preventDefault();
            setCarIssue(event.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default EventInfo;
