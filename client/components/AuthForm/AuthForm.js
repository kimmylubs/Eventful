import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { authenticate, selectUser } from "../../store";
import GoogleAuth from "../GoogleAuth";

import "./AuthForm.scss";

/**
 * COMPONENT
 */

const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate(username, password, formName));
  };

  return (
    <div className="auth-form">
      <form onSubmit={handleSubmit} name={name}>
        <div className="user-name">
          <div className="label-username">Username</div>
          <input name="username" type="text" />
        </div>
        <div className="password">
          <div className="label-password">Password</div>
          <input name="password" type="password" />
        </div>
        <div className="submit-btn-container">
          <button type="submit">{displayName}</button>
        </div>
      </form>
      {error?.response && <div>{error.response.data}</div>}
      <GoogleAuth />
    </div>
  );
};

export default AuthForm;
