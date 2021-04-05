import React, { useState, useEffect } from "react";

const EventInfo = ({ event }) => {

  const fetchApptCar = async (car_id) => {
    const res = await fetch(`http://localhost:3000/api/v1/cars/${car_id}`);
    const data = await res.json();

    setApptCar(data);
  }

  const formatDate = (dateObject) => {
    const year = dateObject.getFullYear();
    const date = dateObject.getDate();
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    const days = [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ]
    const monthName = months[dateObject.getMonth()]
    const dayName = days[dateObject.getDay()]

    return `${dayName}, ${monthName} ${date} ${year}`
  }

  const [apptCar, setApptCar] = useState({});
  const customer = event['customer'];
  const appt = event['appt'];
  const dateObject = new Date(appt['date']);

  useEffect(() => {
    fetchApptCar(event['appt']['car_id']);
  }, [event])

  return (
    <div className='d-flex flex-column m-4 event-info-box' style={{width: 450, height: 350, float: 'right'}}>
      <h4>{formatDate(dateObject)}</h4>
      <p className='remove-top-margin'>{dateObject.toLocaleString('en-US', { timeZone: "America/New_York"})}</p>
      <div>
        <h5 className='info-header'>{customer["name"]}</h5>
        <p className='information'>{customer["email"]}</p>
        <p className='information'>{customer["phone_number"]}</p>
      </div>
      <div>
        <h5 className="info-header">Vehicle Info</h5>
        <p className="information">{apptCar["year"]} {apptCar["make"]} {apptCar["model"]}</p>
      </div>
      <div>
        <h5 className='info-header'>Vehicle Issue</h5>
        <p className='information'>{appt["car_issue"]}</p>
      </div>
    </div>
  );
};

export default EventInfo;