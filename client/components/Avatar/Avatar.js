import React from "react";
import { useSelector } from "react-redux";

import { selectUserById } from "../../store";

import "./Avatar.scss";

const Avatar = ({ userId }) => {
  const user = useSelector(selectUserById(userId));

  return (
    user && (
      <div className="avatar">
        <img src={user.imageUrl} alt="avatar" />
      </div>
    )
  );
};

export default Avatar;
