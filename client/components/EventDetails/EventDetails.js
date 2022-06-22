import React, { Component } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

import { joinOrLeaveEvent, selectUser, selectEvent, getIsLoggedIn } from "../../store";
import { parseTime, parseDate, getDayOfWeek, getHasUserJoinedEvent } from "../../utils";
import UserAvatar from "../Avatar";

import "./EventDetails.scss";
import events from "../../store/events";

const EventDetails = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { id } = useParams();
  const event = useSelector(selectEvent(id));
  console.log("event: ", event);
  

const parseTime = (time) => {
  if (!time) return "";

  const hasJoinedEvent = user ? getHasUserJoinedEvent(user, event?.id) : false;

  return (
    event && (
      <div className="event-details">
        <div className="details-left">
          <div className="image-container">
            <img src={event.logo} className="event-img" />
            <span>
              View on <a href={event.url}>EventBrite</a>
            </span>
          </div>
          <div className="event-join-list">
            <div className="join-users">who join this event</div>
            <div className="avatar-container">
              <AvatarGroup max={6} className="avatars">
                <Avatar className="avatar"></Avatar>
                <Avatar className="avatar"></Avatar>
                <Avatar className="avatar"></Avatar>
                <Avatar className="avatar"></Avatar>
                <Avatar className="avatar"></Avatar>
                <Avatar className="avatar"></Avatar>
                <Avatar className="avatar"></Avatar>
                <Avatar className="avatar"></Avatar>
              </AvatarGroup>
            </div>
          </div>
        </div>
        <div className="details-right">
          <div className="event-name">{event.name}</div>
          <div className="event-date">
            {getDayOfWeek(event.localStart)}, {parseDate(event.localStart)},{" "}
            {parseTime(event.localStart)}
          </div>
          <div className="event-place">
            <div> {event.venueName}</div>
            <div>{event.localizedAddress}</div>
          </div>
          <div className="event-holder">
            <div className="event-owner">
              {event.userId ? <UserAvatar userId={event.userId} /> : <Avatar className="avatar" />}
            </div>
            <div className="comments">
              <div className="speech-bubble">
                <div>{event.description}</div>
              </div>
            </div>
          </div>
          {isLoggedIn && (
            <div className="btn-container">
              <span
                className={`join-btn ${hasJoinedEvent ? "joined" : ""}`}
                onClick={handleJoinOrLeave}
              >
                {hasJoinedEvent ? "Leave" : "Join"} this event
              </span>
              <span className="invite-btn">Invite friends</span>
            </div>
          )}
        </div>
      </div>
    )
  );
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
