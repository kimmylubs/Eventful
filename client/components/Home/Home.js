import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import { getEvents, getIsLoggedIn } from "../../store";

import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import FriendSuggestion from "../FriendSuggestion/FriendSuggestion";
import EventSuggestion from "../EventSuggestion";
import CreateEvent from "../CreateEvent";

import "./Home.scss";

/**
 * COMPONENT
 */
const Home = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  return (
    <div className="home">
      <div className="icon-container">
        <CreateEvent />
        <span className="search">
          <SearchIcon fontSize="large" />
          <TextField id="standard-basic" variant="standard" />
        </span>
      </div>
      {isLoggedIn && (
        <>
          <UpcomingEvents />
          <FriendSuggestion />
        </>
      )}
      <EventSuggestion />
    </div>
  );
};

export default Home;
