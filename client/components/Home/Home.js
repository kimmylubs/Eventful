import React from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

import { getIsLoggedIn } from "../../store";

import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import FriendSuggestion from "../FriendSuggestion/FriendSuggestion";
import EventSuggestion from "../EventSuggestion";
import CreateEvent from "../CreateEvent";
import Landing from "../Landing";

import "./Home.scss";

/**
 * COMPONENT
 */
const Home = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div className="home">
      {isLoggedIn ? (
        <>
          <div className="icon-container">
            <CreateEvent />
            <span className="search">
              <SearchIcon fontSize="large" />
              <TextField id="standard-basic" variant="standard" />
            </span>
          </div>
          <UpcomingEvents />
          <FriendSuggestion />
          <EventSuggestion />
        </>
      ) : (
        <Landing />
      )}
    </div>
  );
};

export default Home;
