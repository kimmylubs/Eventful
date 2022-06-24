import React, { useState } from "react";
import { useSelector } from "react-redux";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { selectEvents } from "../../store";
import EventCard from "../EventCard";

import "./EventSuggestion.scss";

const EventSuggestion = () => {
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
              <MenuItem value="dateDesc">Date Descending </MenuItem>
              <MenuItem value="dateAsc">Date Ascending</MenuItem>
            </Select>
          </FormControl>
        </span>
      </h2>
      <div className="event-container">
        {getSortedEvents(events).map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventSuggestion;
