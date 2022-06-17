import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { joinOrLeaveEvent, selectEvents, selectUser } from "../../store";
import { parseTime, parseDate, getDayOfWeek, getHasUserJoinedEvent } from "../../utils";

import "./EventSuggestion.scss";

const EventSuggestion = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const events = useSelector(selectEvents);
  const [sortBy, setSortBy] = useState("dateDesc");

  const getSortedEvents = (events) => {
    const sortOption = {
      nameAsc: (a, b) => a.name.localeCompare(b.name),
      nameDesc: (a, b) => b.name.localeCompare(a.name),
      dateAsc: (a, b) => new Date(a.localStart) - new Date(b.localStart),
      dateDesc: (a, b) => new Date(b.localStart) - new Date(a.localStart),
    };

    if (sortBy in sortOption) {
      return [...events].sort(sortOption[sortBy]);
    }
    console.log(sortBy);
    return events;
  };

  const handleJoinOrLeave = (id) => {
    dispatch(joinOrLeaveEvent(id));
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="event-suggestion">
      <h2 className="header-container">
        <span className="header">Join events</span>
        <span className="sort-container">
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="container-sort">Sort By</InputLabel>
            <Select
              labelId="container-sort"
              id="container-sort"
              value={sortBy}
              lagel="Sort By"
              onChange={handleSort}
            >
              <MenuItem value="nameAsc">Name: A - Z</MenuItem>
              <MenuItem value="nameDesc">Name: Z - A</MenuItem>
              <MenuItem value="dateDesc">Most Recent</MenuItem>
              <MenuItem value="dateAsc">Oldest</MenuItem>
            </Select>
          </FormControl>
        </span>
      </h2>
      <div className="event-container">
        {getSortedEvents(events).map((event) => (
          <div className="suggested-event" key={event.id}>
            <div className="event">
              <span className="event-name">{event.name}</span>
              <span className="event-date">
                {getDayOfWeek(event.localStart)}, {parseDate(event.localStart)},{" "}
                {parseTime(event.localStart)}
              </span>
              <span className="event-place">{event.localizedArea}</span>
              <span className="">
                <span className="like-btn" onClick={() => handleJoinOrLeave(event.id)}>
                  <span className="like-btn-circle"></span>
                  {getHasUserJoinedEvent(user, event.id) ? (
                    <FavoriteIcon sx={{ width: 30, height: 30, color: "red" }} />
                  ) : (
                    <FavoriteBorderIcon sx={{ width: 30, height: 30, color: "red" }} />
                  )}
                </span>
                <Link to={`/event/${event.id}`}>
                  <img className="event-image" src={event.logo} />
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSuggestion;
