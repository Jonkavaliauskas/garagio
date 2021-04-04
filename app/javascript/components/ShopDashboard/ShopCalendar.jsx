import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Tooltip } from "bootstrap";
import { get } from "jquery";

moment.locale("en-US");
const localizer = momentLocalizer(moment);

const ShopCalendar = ({ appointments, customers, fetchCustomer }) => {

  const [calendarView, setCalendarView] = useState("month")
  const [events, setEvents] = useState([])
  const [toggleAddtlInfo, setAddtlInfo] = useState(false)

  const convertToEvents = async (appointments) => {
    for (let appt of appointments) {
      let customer = await fetchCustomer(appt['customer_id'])
      setEvents([...events, {
        title: customer['name'],
        start: Date.parse(appt['date']),
        end: Date.parse(appt['date']),
        resource: appt
      }])
    }
  }

  useEffect(() => {
    if (appointments != undefined) {
      convertToEvents(appointments)
    }
  }, [appointments])
  
    return (
        <div style={{ height: 500, width: 500}}>
        <Calendar
          localizer={localizer}
          events={events}
          step={15}
          timeslots={5}
          defaultView="month"
          views={["month", "week"]}
          min={new Date(2021, 0, 1, 8, 0)} // 8.00 AM
          max={new Date(2021, 0, 1, 17, 0)} // Max will be 6.00 PM!
          style={{
            fontSize: '14px'
          }}
        />
      </div>
    )
}

export default ShopCalendar