import axios from "axios";

export const TOKEN = "token";

/**
 * ACTION TYPES
 */
const SET_AUTH = "SET_AUTH";
const JOIN_EVENT = "JOIN_EVENT";
const LEAVE_EVENT = "LEAVE_EVENT";
const CREATE_ACCOUNT = "CREATE_ACCOUNT";

/**
 * ACTION CREATORS
 */
const setAuth = (auth = {}) => ({ type: SET_AUTH, auth });

/**
 * THUNK CREATORS
 */
export const me = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const res = await axios.get("/auth/me", {
      headers: {
        authorization: token,
      },
    });
    return dispatch(setAuth(res.data));
  }
};

export const authenticate = (username, password, method) => async (dispatch) => {
  try {
    const res = await axios.post(`/auth/${method}`, { username, password });
    window.localStorage.setItem(TOKEN, res.data.token);
    dispatch(me());
  } catch (authError) {
    return dispatch(setAuth({ error: authError }));
  }
};

export const updateProfile = (user) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);
    const updatedUser = (
      await axios.put("/auth/me", user, {
        headers: {
          authorization: token,
        },
      })
    ).data;
    return dispatch(setAuth(updatedUser));
  };
};

export const updateProfilePic = (filename) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);
    const updatedUser = (
      await axios.put(
        "/auth/pic",
        { filename },
        {
          headers: {
            authorization: token,
          },
        }
      )
    ).data;
    console.log("updatedUser: ", updatedUser);
    return dispatch(setAuth(updatedUser));
  };
};

export const logout = () => async (dispatch) => {
  window.localStorage.removeItem(TOKEN);
  if (window.gapi?.auth2) {
    const auth2 = await window.gapi.auth2.getAuthInstance();
    if (auth2 != null) {
      await auth2.signOut();
      auth2.disconnect();
    }
  }
  return dispatch(setAuth());
};

export const joinOrLeaveEvent = (id) => {
  return async (dispatch, getState) => {
    const { auth } = getState();
    const response = await axios.post(`/api/events/${id}`, { id: auth.id });
    dispatch({
      type: auth.joinedEvents.find((event) => event.id === +id) ? LEAVE_EVENT : JOIN_EVENT,
      event: response.data,
    });
  };
};

export const createAccount = (user) => async (dispatch) => {
  try {
    const res = await axios.post(`/auth/signup`, { ...user });
    window.localStorage.setItem(TOKEN, res.data.token);
    dispatch(me());
  } catch (authError) {
    return dispatch(setAuth({ error: authError }));
  }
};

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    case JOIN_EVENT:
      return { ...state, joinedEvents: [...state.joinedEvents, action.event] };
    case LEAVE_EVENT:
      return {
        ...state,
        joinedEvents: state.joinedEvents.filter((event) => event.id !== action.event.id),
      };
    default:
      return state;
  }
}
