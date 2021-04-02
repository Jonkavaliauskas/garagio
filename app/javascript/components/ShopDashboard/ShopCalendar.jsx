import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Tooltip } from "bootstrap";
import { get } from "jquery";

moment.locale("en-US");
const localizer = momentLocalizer(moment);

const ShopCalendar = ({ appointments, customers, fetchCustomer }) => {
  const [calendarView, setCalendarView] = useState("month")
  const [events, setEvents] = useState([])
  
  const changeView = (view) => {
    if (view == "month") {
      setCalendarView("week")
    }
    else {
      setCalendarView("month")
    }
  }

  const convertToEvents = async (appointments) => {
    console.log("appointments")
    console.log(appointments)
    for (let appt of appointments) {
      let customer = await fetchCustomer(appt['customer_id'])
      console.log(customer)
      setEvents([...events, {
        title: customer['name'].concat(': ', appt['car_issue']),
        start: Date.parse(appt['date']),
        end: Date.parse(appt['date']),
        resource: appt
      }])
    }
  }

  useEffect(() => {
    // console.log(`converting ${appointments}`)
    if (appointments != undefined) {
      convertToEvents(appointments)
    }
  }, [appointments])
// TODO: onSelectEvent
    return (
        <div style={{ height: 500, width: 600}}>
        {/* {console.log(events)} */}
        <Calendar
          localizer={localizer}
          events={events}
          step={15}
          timeslots={5}
          defaultView="month"
          views={["month", "week"]}
          min={new Date(2021, 0, 1, 8, 0)} // 8.00 AM
          max={new Date(2021, 0, 1, 17, 0)} // Max will be 6.00 PM!

        />
      </div>
    )
}

export default ShopCalendar