import React from "react";
import Calendar from "react-calendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";

import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";

import { selectUser } from "../../store";

const UserCalendar = () => {
  const user = useSelector(selectUser);
  const myEvents = user.joinedEvents;
  const keys_to_keep = ["name", "localStart", "localEnd"];

  const redux = (array) =>
    array.map((o) =>
      keys_to_keep.reduce((acc, curr) => {
        acc[curr] = o[curr];
        return acc;
      }, {})
    );

  const myEvent = redux(myEvents).map((elm) => ({
    title: elm.name,
    start: elm.localStart,
    end: elm.localEnd,
  }));

  console.log("event data", redux(myEvent));
  let firstDaty = 1;

  return (
    <div>
      <h1>Calendar Test Page</h1>
      <button>RSVP</button>
      {/* <Calendar /> */}
      <div style={{ marginLeft: "20px", marginRight: "20px" }}>
        <FullCalendar
          defaultView="dayGridMonth"
          firstDay={firstDaty}
          locale="us"
          header={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          themeSystem="Simplex"
          plugins={[dayGridPlugin]}
          events={myEvent}
        />
      </div>
    </div>
  );
};

export default UserCalendar;
