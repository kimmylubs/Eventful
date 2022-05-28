import React from "react";

import Navbar from "./components/Navbar";
import Routes from "./Routes";
import GoogleAuth from "./components/GoogleAuth";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <GoogleAuth />
    </div>
  );
};

export default App;
