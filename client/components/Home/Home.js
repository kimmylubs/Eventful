import React from "react";
import { useSelector } from "react-redux";

import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";

import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import FriendsSugesstion from "../FriendsSugesstion/FriendsSugesstion";
import EventsSugesstion from "../EventsSugesstion";

import "./Home.scss";

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.username);

  return (
    <div className="home">
      <div className="icon-container">
        <span className="create-events-btn">+ create events</span>
        <span className="search">
          <SearchIcon fontSize="large" />
          <TextField id="standard-basic" variant="standard"/>
        </span>
      </div>
      <UpcomingEvents />
      <FriendsSugesstion/>
      <EventsSugesstion />
    </div>
  );
};

export default Home;
