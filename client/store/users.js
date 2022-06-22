import axios from "axios";

const FETCH_USERS = "FETCH_USERS";

const _fetchUsers = (users) => ({ type: FETCH_USERS, users });

export const getUsers = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/users");
    const users = response.data.reduce((users, user) => {
      users[user.id] = user;
      return users;
    }, {});
    dispatch(_fetchUsers(users));
  };
};

const users = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.users;
    default:
      return state;
  }
};

export default users;
