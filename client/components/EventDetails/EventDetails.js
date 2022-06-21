import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

import {
  joinOrLeaveEvent,
  selectUser,
  selectEvent,
  selectEvents,
  getIsLoggedIn,
  getEvents,
} from "../../store";
import { parseTime, parseDate, getDayOfWeek, getHasUserJoinedEvent } from "../../utils";

import "./EventDetails.scss";

const EventDetails = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const events = useSelector(selectEvents);
  const { id } = useParams();
  const event = useSelector(selectEvent(id));
  console.log("event: ", event);

  const handleJoinOrLeave = () => {
    dispatch(joinOrLeaveEvent(id));
  };

  const hasJoinedEvent = user ? getHasUserJoinedEvent(user, event?.id) : false;

  useEffect(() => {
    if (!events.length) {
      dispatch(getEvents());
    }
  }, []);

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
              <Avatar className="avatar"></Avatar>
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

export default EventDetails;
