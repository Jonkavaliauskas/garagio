import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment-timezone";
import EventInfo from "./EventInfo";

moment.locale("en-US");
const localizer = momentLocalizer(moment);

const ShopCalendar = ({ appointments, fetchCustomer }) => {

  const [events, setEvents] = useState([]);
  const [showEventInfo, setEventInfo] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});

  const convertToEvents = async (appointments) => {
    var tempEvents = []
    for (let appt of appointments) {
      let customer = await fetchCustomer(appt["customer_id"]);
      var dateStart = new Date(appt['date']);
      var dateEnd = new Date(appt['date']);
      dateEnd.setHours(dateEnd.getHours() + 1);
      tempEvents.push(
        {
        title: customer["name"],
        start: dateStart,
        end: dateEnd,
        resource: {
          appt,
          customer: customer,
        },
      });
    }
    setEvents(tempEvents);
  };

  const displayEvent = (eventObject) => {
    setEventInfo(true);
    setSelectedEvent(eventObject["resource"]);
  };

  const closeEvent = () => {
    setEventInfo(false);
  }

  useEffect(() => {
    if (appointments != undefined) {
      convertToEvents(appointments);
    }
  }, [appointments]);

  return (
    <div className='d-flex flex-row'>
      <div style={{ height: 600, width: showEventInfo ? 550 : 800, float: "left" }}>
        <Calendar
          localizer={localizer}
          events={events}
          step={15}
          timeslots={4}
          defaultView="month"
          views={["month", "week"]}
          onSelectEvent={(event) => displayEvent(event)}
          min={new Date(2021, 0, 4, 7, 0)} // 8.00 AM
          max={new Date(2021, 0, 4, 20, 0)} // Max will be 6.00 PM!
          style={{
            fontSize: "14px",
          }}
        />
      </div>
      <div>
        {showEventInfo && <EventInfo event={selectedEvent} closeEvent={closeEvent} />}
      </div>
    </div>
  );
};

export default ShopCalendar;
