import axios from "axios";

const FETCH_EVENTS = "FETCH_EVENTS";
const FETCH_CATEGORIES = "FETCH_CATEGORIES";
const CREATE_EVENT = "CREATE_EVENT";

const _fetchEvents = (events) => ({ type: FETCH_EVENTS, events });
const _fetchCategories = (categories) => (FETCH_CATEGORIES, categories);

export const getEvents = () => {
  return async (dispatch) => {
    const events = (await axios.get("/api/events")).data;
    dispatch(_fetchEvents(events));
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    const categories = (await axios.get("/api/categories")).data;
    dispatch(_fetchCategories(categories));
  };
};

export const createEvent = (event) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      return;
    }
    const response = await axios.post("/api/events", event, {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: CREATE_EVENT,
      event: response.data,
    });
    dispatch({
      type: "JOIN_EVENT",
      event: response.data,
    });
  };
};

const events = (state = [], action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return action.events;
    case CREATE_EVENT:
      return [...state, action.event];
    default:
      return state;
  }
};

export default events;
