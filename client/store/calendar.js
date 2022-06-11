import axios from 'axios';

const LOAD_CALENDAR = 'LOAD_CALENDAR';

const fetchCalendar = () => {
    return async(dispatch) => {
        const response = await axios.get('/api/events/calendar', {
            headers: {
                authorization: window.localStorage.getItem('token')
            }
        });
        dispatch({type: 'LOAD_CALENDAR', calendar: response.data})
    }
}

const calendar = (state = {eventItems: []}, action) => {
    if (action.type === 'LOAD_CALENDAR') {
        return action.calendar
    }
    return state
}

export default calendar;
export { fetchCalendar }