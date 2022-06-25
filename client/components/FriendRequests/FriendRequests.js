import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectUser, approveFriendRequest, declineFriendRequest } from "../../store";
import SearchBar from "../SearchBar/SearchBar";

import "./FriendRequests.scss";

function FriendRequests() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const { incomingRequests } = user;

  const handleApprove = (id) => {
    dispatch(approveFriendRequest(id));
  };
  const handleDecline = (id) => {
    dispatch(declineFriendRequest(id));
  };

  return (
    <div className="friendRequests-main">
      <div className="searchFriends">
        <SearchBar placeholder="Search User By Email" />
      </div>
      <h1>Incoming Friend Requests</h1>
      <div className="incomingRequests">
        {incomingRequests.map((req) => {
          return (
            <div key={req.id} className="friend-request-box">
              <span>{req.username}</span>
              <img src={req.imageUrl} />
              <button onClick={() => handleApprove(req.friendship.id)}>approve</button>
              <button onClick={() => handleDecline(req.friendship.id)}>decline</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FriendRequests;
