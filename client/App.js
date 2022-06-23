import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
// import EventBrite from "./components/EventBrite/EventBrite";

import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import { me, getIsLoggedIn, getEvents, getUsers } from "./store";

import Profile from "./components/Profile";
import EventDetails from "./components/EventDetails";
import UserCalendar from "./components/UserCalendar";
import EventList from "./components/EventList";
import CreateAccount from "./components/CreateAccount";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(me());
    dispatch(getUsers());
    dispatch(getEvents());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/event/:id" element={<EventDetails />} />
          {isLoggedIn && (
            <>
              <Route path="/profile" element={<Profile />} />
              <Route path="/calendar" element={<UserCalendar />} />
            </>
          )}
          <Route path="/events" element={<EventList />} />
        </Route>
        {!isLoggedIn && <Route path="/signup" element={<CreateAccount />} />}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
