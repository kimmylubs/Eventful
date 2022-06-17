import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes as RouterRoutes, Navigate } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import Home from "./components/Home/Home";
import Profile from "./components/Profile";
import { me, getIsLoggedIn } from "./store";

/**
 * COMPONENT
 */

const Routes = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      <RouterRoutes>
        {isLoggedIn ? (
          <>
            {/* <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} /> */}
            {/* <Route path="*" element={<Navigate to="/home" replace />} /> */}
          </>
        ) : (
          <>
            {/* <Route
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
            /> */}
            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
          </>
        )}
      </RouterRoutes>
    </div>
  );
};

export default Routes;
