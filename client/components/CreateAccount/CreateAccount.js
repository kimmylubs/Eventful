import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Paper } from "@mui/material";

import { createAccount } from "../../store";

import "./CreateAccount.scss";

const CreateAccount = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
  });
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(createAccount(form));
    }
  };

  const validateForm = () => {
    const { username, password, email } = form;
    let msgs = [];
    if (!validateEmail(email)) {
      msgs.push("Please enter a valid email address.");
    }
    if (!validateUsername(username)) {
      msgs.push("Your username must only contain letters and numbers.");
    }
    if (!validatePassword(password)) {
      // need to make this a req in users model
      msgs.push("Your password must be at least 4 characters.");
    }
    if (msgs.length > 0) {
      setErrors(msgs);
    }
    return msgs.length === 0;
  };

  // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  const validateEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateUsername = (username) => {
    return username.toLowerCase().match(/^[a-zA-Z0-9]+$/);
  };

  const validatePassword = (password) => {
    return password.length >= 4;
  };

  return (
    <div className="create-account-wrapper">
      <Paper className="create-account" elevation={6}>
        <div className="left">
          <div className="text">Welcome to EVENTFUL</div>
          <div className="errors">
            {errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input label="Email" name="email" value={form["email"]} onChange={handleChange} />
            <label>Username</label>
            <input
              label="Username"
              name="username"
              value={form["username"]}
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              label="Password"
              name="password"
              type="password"
              value={form["password"]}
              onChange={handleChange}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="right"></div>
      </Paper>
    </div>
  );
};

export default CreateAccount;
