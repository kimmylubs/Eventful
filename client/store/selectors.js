export const selectEvents = (state) => state.events;
export const selectUser = (state) => state.auth;
export const selectUsers = (state) => state.users;
export const selectUserById = (id) => (state) => state.users[id];
export const getIsLoggedIn = (state) => !!state.auth.id;
export const selectEvent = (id) => (state) => state.events.find((event) => event.id === +id);
export const selectFriends = (state) => state.auth.friends;
