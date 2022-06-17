import axios from "axios";
import history from "../history";

export const TOKEN = "token";

/**
 * ACTION TYPES
 */
const SET_AUTH = "SET_AUTH";
const UPDATE_AUTH = "UPDATE_AUTH";
const JOIN_EVENT = "JOIN_EVENT";
const LEAVE_EVENT = "LEAVE_EVENT";

/**
 * ACTION CREATORS
 */
const setAuth = (auth) => ({ type: SET_AUTH, auth });
const updateAuth = (updatedUser) => ({ type: UPDATE_AUTH, updatedUser });

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
    return dispatch(updateAuth(updatedUser));
  };
};

export const logout = () => async (dispatch) => {
  window.localStorage.removeItem(TOKEN);
  if (window.gapi) {
    const auth2 = await window.gapi.auth2.getAuthInstance();
    if (auth2 != null) {
      await auth2.signOut();
      auth2.disconnect();
    }
  }
  return dispatch({
    type: SET_AUTH,
    auth: {},
  });
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
