import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useParams } from "react-router-dom";

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
  const events = useSelector(state => state.events)

  
  return (
    <div className="home">
      {isLoggedIn ? (
        <>
          <div className="icon-container">
            <CreateEvent />
            <span className="search"> 
              <SearchIcon fontSize="large" />
              {/* <div> {`value: ${value !== null ? `'${value}'` : 'null'}`}</div> */}
            <Autocomplete 
            id='search event'
            // value={value}
            freeSolo
            options={events.map(e => e.name)}
            renderInput={
              (params) => <TextField {...params} label='search-events' id="standard-basic" variant="standard" 
              onClick={() => {
                events.map(e => {
                  return (<a href={`/event/${e.id}`}></a>)
                })
              }}

            // onClick={(events.map(e => {
            //   return (
            //     (<a href={`/event/${e.id}`} />)
            //   )
            // })) } 
            />
          }

              />
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
