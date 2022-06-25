import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Avatar from "@mui/material/Avatar";

import { logout, selectUser, getIsLoggedIn } from "../../store";
import AuthForm from "../AuthForm";

import { Image } from "@mui/icons-material";

import "./Navbar.scss";

// const image = {
//   logo
// }

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log("navbar auth: ", user);

  return (
    <div className="navbar">

        {/* <Image className="logo" sx={{width:160, height:160}} src="./logo.jpg"/> */}
        {/* <Image className="logo" sx={{width:160, height:160}} src="https://imgur.com/a/idhJtCr"/> */}

        <Link to="/"> <img className="logo" src="./logo.jpg"/>       </Link>

      {/* <Link to="/home"> <img className="logo" src={image}/> </Link>  */}
        {/* <div> <img className="logo" src="/navbar/logo.png"/> </div> */}
      <Link to="/">  <h1 className="app-name">EVENTFUL</h1>  </Link>
      {isLoggedIn ? (
        <>
          <h2 className="user-name">Hello, {user.firstName}!</h2>
          <span className="user-avatar">
            <Avatar sx={{ width: 120, height: 120 }} src={user.imageUrl} />
          </span>
          {/* <img className="user-avatar" src={user.imageUrl} /> */}

          <Link to="/profile" className="profile-link">
            my profile
          </Link>
          <Link to="/calendar" className="calendar-link">
            my calendar
          </Link>
          <Link to="/friendrequests">
            <span className="add-friends-btn">+ add friends</span>
          </Link>
          <span className="logout-btn" onClick={() => dispatch(logout())}>
            Log out
          </span>
                  </>
      ) : (
        <>
          <AuthForm name="login" displayName="Login" />
        </>
      )}
    </div>
  );
};

export default Navbar;
