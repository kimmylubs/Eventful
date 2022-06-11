import axios from "axios";

const FETCH_EVENT = "FETCH_EVENT";
const FETCH_CATEGORIES = "FETCH_CATEGORIES";

const _fetchEvents = (events) => (FETCH_EVENT, events);
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

const events = (state = [], action) => {
  if ((action.type = FETCH_EVENT)) {
    return action.events;
  }
  return state;
};

export default events;
