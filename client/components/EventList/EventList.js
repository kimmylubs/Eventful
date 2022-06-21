import React from "react";

import EventSuggestion from "../EventSuggestion";

import "./EventList";

const EventList = () => {
  return (
    <div className="event-list">
      <div className="event-list-banner">
        image here
      </div>
      <EventSuggestion />
    </div>
  );
};

export default EventList;
