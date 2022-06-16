import React, { Component } from "react";
import { connect, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Paper from "@mui/material/Paper";

import { getEvents } from "../../store";

import "./EventDetails.scss";
import events from "../../store/events";


const parseTime = (time) => {
  if (!time) return "";

  // const hrs = +time.substring(0, 2);
  // const hh = ((+hrs + 8) % 12) ;
  // const mm = time.substring(3, 5);
  // return `${hh}:${mm} ${hrs > 11 ? "PM" : "AM"}`;

  const hh = time.substring(11,13) ;
  const hhs = ((+hh + 11) % 12 + 1);
  const mm = time.substring(14, 16);
  return `${hhs}:${mm} ${hh > 11 ? "PM" : "AM"}`;
};

const parseTimeEnd = (time) => {
  if (!time) return "";

  const hh = time.substring(11,13) ;
  const hhs = ((+hh + 11) % 12 + 1);
  const mm = time.substring(14, 16);
  return `${hhs}:${mm} ${hh > 11 ? "PM" : "AM"}`;
};

const parseDate = (date) => {
  if (!date) return "";
  
  let year = date.substring(0,4)
  let month = date.substring(5,7)
  let day = date.substring(8,10)

  let newDate = (`${month}/${day}/${year}`)

  return newDate;
};

const getDayOfWeek = (date) => {
  const weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

  const d = new Date(date);
  let day = weekday[d.getDay()];  

  return day;
};

class EventDetails extends Component {
  render() {
    const { event } = this.props;
    console.log("event: ", event);

    return (
      event && (
        <div className="event-details">
          <div className="event-details-main">
            <div className="details-left">
              <img src={event.logo} className="event-img" />
              <div className="event-place">View on <a href={event.url}>EventBrite</a></div>
            </div>
            <div className="details-right">
              <div className="event-name">{event.name}</div>
              <div className="event-date">{getDayOfWeek(event.localStart)}, {parseDate(event.localStart)}, {parseTime(event.localStart)} 
              {/* to  */}
              {/* {parseTimeEnd(event.localEnd)}  */}
              </div>
              <div className="event-place"><div> {event.venueName}</div> {event.localizedAddress}</div>
              <div className="event-holder">
                <div className="user-avator">
                  <Avatar sx={{ width: 100, height: 100 }}></Avatar>
                </div>
                <div className="comments">
                  <Paper elevation={3} sx={{ width: 260, height: 140, padding: 3 }}>
                    <div> <b>Event Description </b><br></br>
                    {event.description} </div>
                  </Paper>
                </div>
              </div>
            </div>
          </div>
          <div className="event-join-list">
            <div className="join-list-left">
              <div className="join-users">who join this event</div>
              <div className="avatar-container">
                <AvatarGroup max={7}>
                  <Avatar sx={{ width: 80, height: 80 }}></Avatar>
                  <Avatar sx={{ width: 80, height: 80 }}></Avatar>
                  <Avatar sx={{ width: 80, height: 80 }}></Avatar>
                  <Avatar sx={{ width: 80, height: 80 }}></Avatar>
                  <Avatar sx={{ width: 80, height: 80 }}></Avatar>
                  <Avatar sx={{ width: 80, height: 80 }}></Avatar>
                  <Avatar sx={{ width: 80, height: 80 }}></Avatar>
                  <Avatar sx={{ width: 80, height: 80 }}></Avatar>
                </AvatarGroup>
              </div>
            </div>
            <div className="join-list-right">
              <span className="join-btn">Join this event</span>
              <span className="invite-btn">Invite friends</span>
            </div>
          </div>
        </div>
      )
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEvents: () => dispatch(getEvents()),
  };
};

const EventDetailsWrapper = () => {
  const events = useSelector(state => state.events);
  const { id } = useParams();
  const event = events.find((event) => event.id === +id);
  return <EventDetails event={event} />;
};

export default connect((state) => state, mapDispatchToProps)(EventDetailsWrapper);
