import React, { Component } from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Paper from "@mui/material/Paper";

import { getEvents } from "../../store";

import "./EventDetails.scss";
import events from "../../store/events";


const parseTime = (time) => {
  if (!time) return "";

  const hrs = +time.substring(0, 2);
  const hh = ((+hrs + 11) % 12) + 1;
  const mm = time.substring(3, 4);
  return `${hh}:${mm} ${hrs > 11 ? "PM" : "AM"}`;
};

function stringToDate(date,_format,_delimiter)
      {
        var formatLowerCase=_format.toLowerCase();
        var formatItems=formatLowerCase.split(_delimiter);
        var dateItems=_date.split(_delimiter);
        var monthIndex=formatItems.indexOf("mm");
        var dayIndex=formatItems.indexOf("dd");
        var yearIndex=formatItems.indexOf("yyyy");
        var month=parseInt(dateItems[monthIndex]);
        month-=1;
        var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
        return formatedDate;
  }

const parseDate = (date) => {
  if (!time) return "";
  
  date.substring(0,10)
  return stringToDate("date", "mm/dd/yyyy", "-")

}

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
            </div>
            <div className="details-right">
              <div className="event-name">{event.name}</div>
              <div className="event-date">{(event.localStart)}, {parseTime(event.time)}</div>
              <div className="event-place"><div> {event.venueName}</div> {event.localizedAddress}</div>
              <div className="event-holder">
                <div className="user-avator">
                  <Avatar sx={{ width: 100, height: 100 }}></Avatar>
                </div>
                <div className="comments">
                  <Paper elevation={3} sx={{ width: 260, height: 140, padding: 4 }}>
                    <div> {event.description} </div>
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
