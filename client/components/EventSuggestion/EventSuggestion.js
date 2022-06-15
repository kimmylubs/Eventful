import React, { Component } from "react";
import { connect } from "react-redux";

import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

import "./EventSuggestion.scss";

const events = [
  { id: 1, title: "event 1" },
  { id: 2, title: "event 2" },
  { id: 3, title: "event 3" },
  { id: 4, title: "event 4" },
  { id: 5, title: "event 5" },
  { id: 6, title: "event 6" },
  { id: 7, title: "event 7" },
  { id: 8, title: "event 8" },
  { id: 9, title: "event 9" },
]

class EventSuggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: this.props.auth.imageUrl ? this.props.auth.imageUrl : "",
    };
  };

  render() {
    const { imageUrl } = this.state;

    return (
      <div className="event-suggestion">
        <h2 className="header">Join events</h2>
        <div className="event-container">
          {events.map((event) => (
            <Stack key={event.id}>
              <span className="user-avator">
                <Avatar sx={{ width:100, height: 100 }}>{imageUrl}</Avatar>
              </span>
              <div className="suggested-event">
                <div className="event">
                  <span className="event-name">{event.title}</span>
                  <span className="event-date">date, time</span>
                  <span className="event-place">place</span>
                  <span className="event-image">
                    <img />
                  </span>
                </div>
              </div>
            </Stack>
            
          ))}
        </div>
      </div>
    );
  }
};

const mapState = (state) => {
  return {
    auth: state.auth,
  };
};


export default connect(mapState)(EventSuggestion);
