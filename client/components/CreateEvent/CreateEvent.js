import React, { Component } from "react";
import { connect } from "react-redux";

import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";

import { createEvent } from "../../store";

import "./CreateEvent.scss";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

class CreateEvent extends Component {
  state = {
    name: "",
    date: "",
    time: "",
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
    this.props.createEvent(this.state);
    this.handleClose();
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="create-event">
        <span className="create-event-btn" onClick={this.handleOpen}>
          + create event
        </span>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div className="create-event-modal">
            <form onSubmit={this.onSubmit} className="form-container">
              <div className="create-event-form">
                <div className="input-form-left">
                  <TextField
                    name="name"
                    label="Event name"
                    multiline
                    fullWidth
                    onChange={this.onChange}
                  />
                  <Stack noValidate spacing={3} sx={{ margin: "0" }}>
                    <span className="input-event-small">
                      <TextField
                        name="date"
                        label="Date"
                        type="date"
                        onChange={this.onChange}
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        sx={{ marginRight: "10px" }}
                      />
                      <TextField
                        name="time"
                        label="Time"
                        type="time"
                        onChange={this.onChange}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        fullWidth
                        sx={{ marginLeft: "10px" }}
                      />
                    </span>
                  </Stack>
                  <TextField
                    name="address"
                    label="Place"
                    onChange={this.onChange}
                    multiline
                    fullWidth
                  ></TextField>
                  <span className="input-event-small">
                    <TextField
                      name="city"
                      label="City"
                      onChange={this.onChange}
                      multiline
                      fullWidth
                    />
                    <TextField
                      name="state"
                      label="State"
                      onChange={this.onChange}
                      multiline
                      fullWidth
                      sx={{ marginLeft: "10px" }}
                    />
                  </span>
                  <TextField
                    name="description"
                    label="Comments"
                    onChange={this.onChange}
                    multiline
                    rows={4}
                    fullWidth
                    sx={{ marginRight: "10px" }}
                  />
                  <TextField
                    name="imageUrl"
                    label="Image URL"
                    onChange={this.onChange}
                    multiline
                    fullWidth
                  />
                </div>
                <div className="input-form-right">
                  <div className="select-container">
                    <div className="checkbox-label">Category</div>
                    <div className="checkbox-container">
                      <span className="checkbox">
                        <Checkbox {...label} /> music
                      </span>
                      <span className="checkbox">
                        <Checkbox {...label} /> movie
                      </span>
                      <span className="checkbox">
                        <Checkbox {...label} /> activity
                      </span>
                      <span className="checkbox">
                        <Checkbox {...label} /> sports
                      </span>
                      <span className="checkbox">
                        <Checkbox {...label} /> ???
                      </span>
                      <span className="checkbox">
                        <Checkbox {...label} /> ???
                      </span>
                      <span className="checkbox">
                        <Checkbox {...label} /> ???
                      </span>
                    </div>
                    <div className="checkbox-label">Time</div>
                    <div className="checkbox-container">
                      <span className="checkbox">
                        <Checkbox {...label} /> morning
                      </span>
                      <span className="checkbox">
                        <Checkbox {...label} /> afternoon
                      </span>
                      <span className="checkbox">
                        <Checkbox {...label} /> evening
                      </span>
                      <span className="checkbox">
                        <Checkbox {...label} /> night
                      </span>
                    </div>
                    <div className="checkbox-label">Place</div>
                    <div className="checkbox-container">
                      <span className="checkbox">
                        <Checkbox {...label} /> outdoor
                      </span>
                      <span className="checkbox">
                        <Checkbox {...label} /> indoor
                      </span>
                      <span className="checkbox">
                        <Checkbox {...label} /> online
                      </span>
                    </div>
                  </div>
                  <div className="submit-btn">
                    <Button type="submit" variant="contained">
                      Create
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event) => dispatch(createEvent(event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
