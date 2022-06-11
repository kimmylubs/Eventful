import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../../store";
import EventBrite from "../EventBrite/EventBrite";

import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  console.log("navbar auth: ", user);

  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="app-name">App Name</h1>
      </Link>
      <h2 className="user-name">Hello, {user.firstName}!</h2>
      <div className="user-avatar">{user.firstName}</div>

      <Link to="/profile" className="profile-link">
        my profile
      </Link>
      <Link to="/calendar">my calendar</Link>
      <a className="friends-link">my friends</a>
      <span className="add-friends-btn">+ add friends</span>
      <span className="logout-btn" onClick={() => dispatch(logout())}>
        Log out
      </span>
      <EventBrite />
    </div>
  );
};

export default Navbar;
