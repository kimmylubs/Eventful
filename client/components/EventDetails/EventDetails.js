import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Paper from "@mui/material/Paper";

import { joinOrLeaveEvent, selectUser, selectEvent } from "../../store";
import { parseTime, parseDate, getDayOfWeek, getHasUserJoinedEvent } from "../../utils";

import "./EventDetails.scss";

const EventDetails = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { id } = useParams();
  const event = useSelector(selectEvent(id));

  const handleJoinOrLeave = () => {
    dispatch(joinOrLeaveEvent(id));
  };

  const hasJoinedEvent = getHasUserJoinedEvent(user, event?.id);

  return (
    event && (
      <div className="event-details">
        <div className="event-details-main">
          <div className="details-left">
            <img src={event.logo} className="event-img" />
            <div className="event-place">
              View on <a href={event.url}>EventBrite</a>
            </div>
          </div>
          <div className="details-right">
            <div className="event-name">{event.name}</div>
            <div className="event-date">
              {getDayOfWeek(event.localStart)}, {parseDate(event.localStart)},{" "}
              {parseTime(event.localStart)}
            </div>
            <div className="event-place">
              <div> {event.venueName}</div> {event.localizedAddress}
            </div>
            <div className="event-holder">
              <div className="user-avator">
                <Avatar sx={{ width: 100, height: 100 }}></Avatar>
              </div>
              <div className="comments">
                <Paper elevation={3} sx={{ width: 260, height: 140, padding: 3 }}>
                  <div>
                    {" "}
                    <b>Event Description </b>
                    <br></br>
                    {event.description}{" "}
                  </div>
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
            <span
              className={`join-btn ${hasJoinedEvent ? "joined" : ""}`}
              onClick={handleJoinOrLeave}
            >
              {hasJoinedEvent ? "Leave" : "Join"} this event
            </span>
            <span className="invite-btn">Invite friends</span>
          </div>
        </div>
      </div>
    )
  );
};

export default EventDetails;
