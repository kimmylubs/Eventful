import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Autocomplete from '@mui/material/Autocomplete';

import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import FriendSuggestion from "../FriendSuggestion/FriendSuggestion";
import EventSuggestion from "../EventSuggestion";
import CreateEvent from "../CreateEvent";
import Landing from "../Landing";

import { selectUser, getIsLoggedIn } from "../../store";

import "./Home.scss";

/**
 * COMPONENT
 */
const Home = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(getIsLoggedIn);
  
  return (
    <div className="home">
      {isLoggedIn ? (
        <>
          <div className="icon-container">
            <CreateEvent />
            <span className="search"> 
              <SearchIcon fontSize="large" />
            {/* <Autocomplete 
            id='search-event'
            freeSolo
            options={event.map(e => e.name)}
            renderInput={(params) => <TextField {...params} label='search-events' id="standard-basic" variant="standard" />} 
              /> */}
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
