import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { joinEvent } from "../../store";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./EventSuggestion.scss";

const EventSuggestion = (props) => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  const user = useSelector((state) => state.auth);
  // const [sortBy, setSortBy] = useState("");

  // const getSortedEvents = (event) => {
  //   const sortOption ={
  //     "nameAsc": (a, b) => a.name.localeCompare(b.name),
  //     "nameDesc": (a, b) => b.name.localeCompare(a.name),
  //     "dateAsc": (a, b) => a.date - b.date,
  //     "dateDesc": (a, b) => b.date - a.date,
  //   };

  //   if (sortBy in sortOption) {
  //     return [...events].sort(sortOption[sortBy]);
  //   }

  //   return events;
  // };

  

  const parseTime = (time) => {
    if (!time) return "";

    const hh = time.substring(11, 13);
    const hhs = ((+hh + 11) % 12) + 1;
    const mm = time.substring(14, 16);
    return `${hhs}:${mm} ${hh > 11 ? "PM" : "AM"}`;
  };

  const parseDate = (date) => {
    if (!date) return "";

    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);
    let newDate = `${month}/${day}/${year}`;

    return newDate;
  };

  const getDayOfWeek = (date) => {
    const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const d = new Date(date);
    let day = weekday[d.getDay()];

    return day;
  };

  const handleJoin = (id) => {
    console.log("id: ", id);
    dispatch(joinEvent(id));
  };

  const userHasJoinedEvent = (eventId) => {
    const event = user.joinedEvents.find((event) => event.id === eventId);
    return Boolean(event);
  };

  return (
    <div className="event-suggestion">
      <h2 className="header-container">
        <span className="header">Join events</span>
        <span className="sort-container">
          {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="container-sort">Sort By</InputLabel>
            <Select
              labelId="container-sort"
              id="container-sort"
              value={setSortBy || ""}
              lagel="Sort By"
              // onChange={this.handleSort}
            >
              <MenuItem value="nameAsc">Name: A  -  Z</MenuItem>
              <MenuItem value="nameDesc">Name: Z  -  A</MenuItem>
              <MenuItem value="dateAsc">Most Recent</MenuItem>
              <MenuItem value="dateDesc">Oldest</MenuItem>
            </Select>
          </FormControl> */}
        </span>
      </h2>
      <div className="event-container">
        {events.map((event) => (
          <div className="suggested-event" key={event.id}>
            <div className="event">
              <span className="event-name">{event.name}</span>
              <span className="event-date">
                {getDayOfWeek(event.localStart)}, {parseDate(event.localStart)},{" "}
                {parseTime(event.localStart)}
              </span>
              <span className="event-place">{event.localizedArea}</span>
              <span className="">
                <span className="like-btn" onClick={() => handleJoin(event.id)}>
                  <span className="like-btn-circle"></span>
                  {userHasJoinedEvent(event.id) ? (
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
