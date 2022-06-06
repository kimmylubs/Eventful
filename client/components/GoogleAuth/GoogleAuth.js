import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";

import { TOKEN, me, logout } from "../../store/auth";

function GoogleAuth() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.id);

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId: process.env.GOOGLE_CLIENT_ID,
        scope: "email",
      });
    });
  }, []);

  const handleLoginSuccess = async (gResponse) => {
    console.log("successfully logged in: ", gResponse);
    const firstName = gResponse.profileObj.givenName;
    const lastName = gResponse.profileObj.familyName;
    const response = await axios.post("/auth/google", {
      token: gResponse.tokenId,
      firstName,
      lastName,
    });
    window.localStorage.setItem(TOKEN, response.data.token);
    console.log("response: ", response);
    await dispatch(me());
  };

  const handleLoginFailure = (gResponse) => {
    console.log("failed to login: ", gResponse);
  };

  return (
    <div className="google-login">
      {!isLoggedIn && (
        <GoogleLogin
          clientId={process.env.GOOGLE_CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      )}
    </div>
  );
}

export default GoogleAuth;
