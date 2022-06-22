import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { selectUser, getIsLoggedIn, joinOrLeaveEvent } from "../../store";
import { parseTime, parseDate, getDayOfWeek, getHasUserJoinedEvent } from "../../utils";
import Avatar from "../Avatar";

import "./EventCard.scss";

const EventCard = ({ event }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleJoinOrLeave = (id) => {
    dispatch(joinOrLeaveEvent(id));
  };

  console.log("event: ", event);

  return (
    <div className="event-card" key={event.id}>
      <div className="event">
        {event.userId && <Avatar userId={event.userId} />}
        <span className="event-name">{event.name}</span>
        <span className="event-date">
          {getDayOfWeek(event.localStart)}, {parseDate(event.localStart)},{" "}
          {parseTime(event.localStart)}
        </span>
        <span className="event-place">{event.localizedArea}</span>
        <span className="">
          {isLoggedIn && (
            <span className="like-btn" onClick={() => handleJoinOrLeave(event.id)}>
              <span className="like-btn-circle"></span>
              {getHasUserJoinedEvent(user, event.id) ? (
                <FavoriteIcon sx={{ width: 30, height: 30, color: "red" }} />
              ) : (
                <FavoriteBorderIcon sx={{ width: 30, height: 30, color: "red" }} />
              )}
            </span>
          )}
          <Link to={`/event/${event.id}`}>
            <img className="event-image" src={event.logo} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default EventCard;
