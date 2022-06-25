import axios from "axios";

import { setAuth } from "./auth";

export const approveFriendRequest = (id) => async (dispatch, getState) => {
  try {
    const { auth } = getState();
    await axios.post(`/api/friendships/${id}`);
    const newFriend = auth.incomingRequests.find((req) => req.friendship.id === id);
    const authCopy = {
      ...auth,
      friends: [...auth.friends, newFriend],
      incomingRequests: auth.incomingRequests.filter((req) => req.friendship.id !== id),
    };
    dispatch(setAuth(authCopy));
  } catch (err) {
    console.log(err);
  }
};

export const declineFriendRequest = (id) => async (dispatch, getState) => {
  try {
    const { auth } = getState();
    await axios.delete(`/api/friendships/${id}`);
    const authCopy = {
      ...auth,
      incomingRequests: auth.incomingRequests.filter((req) => req.friendship.id !== id),
    };
    dispatch(setAuth(authCopy));
  } catch (err) {
    console.log(err);
  }
};

export const sendFriendRequest = (id) => async (dispatch, getState) => {
  try {
    const { auth } = getState();
    const body = { userId: auth.id, friendId: id, status: false };
    const response = await axios.post("/api/friendships", body);
    const authCopy = {
      ...auth,
      outgoingRequests: [...auth.outgoingRequests, { ...response.data, friendship: body }],
    };
    dispatch(setAuth(authCopy));
  } catch (err) {
    console.log(err);
  }
};

export const removeFriendRequest = (id) => async (dispatch, getState) => {
  try {
    const { auth } = getState();
    const friendRequest = auth.outgoingRequests.find((u) => u.id === id);
    await axios.delete(`/api/friendships/${friendRequest.id}`);
    const authCopy = {
      ...auth,
      outgoingRequests: auth.outgoingRequests.filter((req) => req.id !== id),
    };
    dispatch(setAuth(authCopy));
  } catch (err) {
    console.log(err);
  }
};
