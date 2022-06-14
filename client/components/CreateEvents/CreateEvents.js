import React, { Component } from "react";
import { connect } from "react-redux";

import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Checkbox from '@mui/material/Checkbox';


import { createEvent } from "../../store";

import "./CreateEvents.scss";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

class CreateEvents extends Component {
  state = {
    name: "",
    ticketCount: "",
    price: "",
    imageUrl: "",
    imageClick: "",
    category: "",
    description: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    open: false,
  };

  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });

  onSubmit = (event) => {
    event.preventDefault();
    this.props.createEvents(this.state);
    this.handleClose();
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {

    return (
      <div className="create-events">
        <span 
          className="create-events-btn" 
          onClick={this.handleOpen}
        >
          + create events
        </span>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div className="create-events-modal">
            <form onSubmit={this.onSubmit}>

              <div className="create-event-form">
                <div className="input-form-left">
                  <div className="img-container">
                    <img className="event-img" />
                    <span className="add-img-btn">Add Image</span>
                  </div>
                  <div className="select-container">
                    <div className="select">
                      <span className="checkbox-label">Category</span>
                      <span className="checkbox">
                        <Checkbox {...label} /> music
                        <Checkbox {...label} /> movie
                        <Checkbox {...label} /> activity
                        <Checkbox {...label} /> sports
                      </span>
                    </div>
                    <div className="select">
                      <span className="checkbox-label">Time</span>
                      <span className="checkbox">
                        <Checkbox {...label} /> morning
                        <Checkbox {...label} /> afternoon
                        <Checkbox {...label} /> evening
                        <Checkbox {...label} /> night
                      </span>
                    </div>
                    <div className="select">
                      <span className="checkbox-label">Place</span>
                      <span className="checkbox">
                        <Checkbox {...label} /> outdoor
                        <Checkbox {...label} /> indoor
                        <Checkbox {...label} /> park
                        <Checkbox {...label} /> beach
                      </span>
                    </div>
                  </div>
                </div>
                <div className="input-form-right">

                  <div className="input-event">
                    <div className="label">Event name</div>
                    <TextField
                      type="text"
                      name="name"
                      onChange={this.onChange}
                      autoComplete="off"
                      variant="outlined"
                      required
                    >
                    </TextField>
                  </div> 

                  <div className="input-event">
                    <div className="label">Place</div>
                    <TextField
                      type="text"
                      name="address"
                      onChange={this.onChange}
                      autoComplete="off"
                      variant="outlined"
                      required
                    >
                    </TextField>
                  </div> 
                  <div className="input-event-small">
                    <div className="left"> 
                      <div className="label">City</div>
                      <TextField
                        type="text"
                        name="city"
                        onChange={this.onChange}
                        autoComplete="off"
                        variant="outlined"
                        required
                      >
                      </TextField>
                    </div>
                    <div className="right">
                      <div className="label">State</div>
                      <TextField
                        type="text"
                        name="state"
                        onChange={this.onChange}
                        autoComplete="off"
                        variant="outlined"
                        required
                      >
                      </TextField>
                    </div>
                  </div> 
                  <div className="input-event">
                    <div className="label">Comments</div>
                    <TextField
                      type="text"
                      name="description"
                      onChange={this.onChange}
                      autoComplete="off"
                      variant="outlined"
                      required
                    >
                    </TextField>
                  </div> 
                  <div>
                    <Button 
                      type="submit" 
                      variant="contained"
                      sx={{ marginLeft: "20px" }}
                    >
                      Create
                    </Button>
                  </div>
                </div>
              </div>
              
            </form>
          </div>
       </Modal>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEvents: (event) => dispatch(createEvent(event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvents);
