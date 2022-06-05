import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../store";
import EventBrite from "../EventBrite/EventBrite";

import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);
  console.log("navbar auth: ", user);

  return (
    <div className="navbar">
      <h1>App Name</h1>
      <h3>Hello, {user.firstName}!</h3>
      <div className="user-avatar">
        {user.firstName[0]}
      </div>
      <span className="logout-btn" onClick={() => dispatch(logout())}>
        Log Out
      </span>
      <EventBrite />
    </div>
  );
};

export default Navbar;
