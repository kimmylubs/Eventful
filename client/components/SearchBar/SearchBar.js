import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

import { selectUser, selectUsers, sendFriendRequest, removeFriendRequest } from "../../store";

import "./SearchBar.scss";

function SearchBar({ placeholder }) {
  const auth = useSelector(selectUser);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredUsers = useMemo(
    () =>
      users.filter(
        (user) =>
          query &&
          user.email.startsWith(query) &&
          !Boolean(auth.friends.find((u) => u.id === user.id)) &&
          auth.id !== user.id
      ),
    [query]
  );

  const removeRequest = (id) => dispatch(removeFriendRequest(id));
  const sendRequest = (id) => dispatch(sendFriendRequest(id));

  return (
    <div className="search-bar">
      <h1>Add Friends</h1>
      <div className="search">
        <div className="searchInput">
          <input
            type="text"
            placeholder={placeholder}
            onChange={handleChange}
            value={query}
          ></input>
        </div>
        <div className="searchResults">
          {filteredUsers.map((user) => {
            return (
              <div className="search-result-user" key={user.id}>
                <img src={user.imageUrl} />
                {user.email}
                {Boolean(auth.outgoingRequests.find((u) => u.id === user.id)) ? (
                  <CheckIcon onClick={() => removeRequest(user.id)} />
                ) : (
                  <AddIcon onClick={() => sendRequest(user.id)} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
