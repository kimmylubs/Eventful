export const selectEvents = (state) => state.events;
export const selectUser = (state) => state.auth;
export const getIsLoggedIn = (state) => !!state.auth.id;
export const selectEvent = (id) => (state) => state.events.find((event) => event.id === +id);
