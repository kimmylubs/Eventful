import React from "react";
import { useSelector } from "react-redux";

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.username);

  return (
    <div className="home">
      upcoming events
    </div>
  );
};

export default Home;
