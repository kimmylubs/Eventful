import React, { Component } from "react";
import { connect } from "react-redux";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from '@mui/material/AvatarGroup';
import Paper from '@mui/material/Paper';

import { getEvents } from "../../store";

import "./EventDetails.scss";


class EventDetails extends Component {
  state = {

  };

  render() {
    const { event } = this.props;

    return (
      <div className="event-details">
        <div className="event-details-main">
          <div className="details-left">
            <img className="event-img"/>
          </div>
          <div className="details-right">
            <div className="event-name">event name</div>
            <div className="event-date">2022-06-14, 10:00</div>
            <div className="event-place">Central Park, NY, NY</div>
            <div className="event-holder">
              <div className="user-avator">
                <Avatar sx={{ width:100, height: 100 }}></Avatar>
              </div>
              <div className="comments">
                <Paper 
                  elevation={3}
                  sx={{ width:350, height: 200 }}
                >
                  comments
                </Paper>
              </div>
            </div>
          </div>
        </div>
        <div className="event-join-list">
          <div className="join-list-left">
            <div className="join-users">who join this event</div>
            <div className="avatar-container">
              <AvatarGroup max={7}>
                <Avatar sx={{ width: 80, height: 80 }}></Avatar>
                <Avatar sx={{ width: 80, height: 80 }}></Avatar>
                <Avatar sx={{ width: 80, height: 80 }}></Avatar>
                <Avatar sx={{ width: 80, height: 80 }}></Avatar>
                <Avatar sx={{ width: 80, height: 80 }}></Avatar>
                <Avatar sx={{ width: 80, height: 80 }}></Avatar>
                <Avatar sx={{ width: 80, height: 80 }}></Avatar>
                <Avatar sx={{ width: 80, height: 80 }}></Avatar>
              </AvatarGroup>
            </div>
          </div>
          <div className="join-list-right">
            <span className="join-btn">Join this event</span>
            <span className="invite-btn">Invite friends</span>
          </div>
        </div>

      </div>
    )
  };

};

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEvents: () => dispatch(getEvents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
