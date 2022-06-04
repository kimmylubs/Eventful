import axios from 'axios';

const FETCH_EVENT = 'GET_EVENT';

const _fetchEvents = (events) => (FETCH_EVENT, events)

export const getEvents = () => {
  return async (dispatch) => {
    const events = (await axios.get('/api/events')).data;
    dispatch(_fetchEvents(events));
  };
};

const events = (state = [], action) => {
    if (action.type = FETCH_EVENT){
        return action.events;
    };
    return state;
};

export default events;