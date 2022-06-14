import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import EventBrite from "./components/EventBrite/EventBrite";

import Layout from "./components/Layout";
import AuthForm from "./components/AuthForm";
import Home from "./components/Home/Home";
import { me } from "./store";

import "./App.scss";
import Profile from "./components/Profile";
import UserCalendar from "./components/UserCalendar";

const Test = () => {
  return <div className="test">tetsef;alksdjf;laksdjf</div>;
};

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const location = useLocation();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div className="App">
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/asdf" element={<Test />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/calendar" element={<UserCalendar />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route
              path="/eb"
              element={<EventBrite/>}
              exact
            />
            <Route
              path="/"
              element={<AuthForm name="login" displayName="Login" />}
              exact
            />
            <Route
              path="login"
              element={<AuthForm name="login" displayName="Login" />}
            />
            <Route
              path="signup"
              element={<AuthForm name="signup" displayName="Sign Up" />}
            />
            <Route
              path="*"
              element={<Navigate to="/" state={{ from: location }} replace />}
            />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
