import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import { Paper } from "@mui/material";
import Button from "@mui/material/Button";

import { createEvent } from "../../store";
import ImageUploader from "../ImageUploader";

import "./CreateEvent.scss";

const getDefaultState = () => ({
  name: "",
  address: "",
  venue: "",
  city: "",
  region: "",
  postal: "",
  description: "",
  logo: "",
  date: new Date(),
  time: new Date(),
});

const CreateEvent = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [event, setEvent] = useState(getDefaultState());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setEvent(getDefaultState());
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEvent(event));
    setEvent(getDefaultState());
    setOpen(false);
  };

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleUploadPic = (filename) => {
    setEvent({ ...event, logo: filename });
  };

  return (
    <div className="create-event">
      <span className="create-event-btn" onClick={handleOpen}>
        + create event
      </span>
      <Modal open={open} onClose={handleClose}>
        <div className="create-event-modal">
          <div className="create-event-header">
            <p>New Event</p>
            <hr />
          </div>
          <div className="create-event-main">
            <form className="form-container" onSubmit={handleSubmit}>
              <div className="input-form-left">
                <div className="input-event">
                  <span className="label">Event Name</span>
                  <span>
                    <TextField name="name" fullWidth onChange={handleChange} value={event.name} />
                  </span>
                </div>
                <div className="input-event">
                  <span className="label">Venue</span>
                  <span>
                    <TextField name="venue" fullWidth onChange={handleChange} value={event.venue} />
                  </span>
                </div>
                <div className="input-event">
                  <span className="label">Address</span>
                  <span>
                    <TextField
                      name="address"
                      fullWidth
                      onChange={handleChange}
                      value={event.address}
                    />
                  </span>
                </div>
                <div className="input-event-small">
                  <div className="input-event">
                    <span className="label">City</span>
                    <span>
                      <TextField name="city" onChange={handleChange} value={event.city} />
                    </span>
                  </div>
                  <div className="input-event">
                    <span className="label">State</span>
                    <span>
                      <TextField
                        name="region"
                        onChange={handleChange}
                        value={event.state}
                        fullWidth
                      />
                    </span>
                  </div>
                </div>
                <div className="input-event">
                  <span className="label">Zipcode</span>
                  <span>
                    <TextField
                      name="postal"
                      onChange={handleChange}
                      value={event.zip}
                      fullWidth
                      rows={1}
                    />
                  </span>
                </div>
                <div className="input-event">
                  <span className="label">Description</span>
                  <span className="input-event-large">
                    <TextField
                      name="description"
                      fullWidth
                      rows={6}
                      onChange={handleChange}
                      value={event.description}
                      multiline
                    />
                  </span>
                </div>
                <div className="input-event">
                  <span className="label">Image</span>
                  {event.logo && <img src={event.logo} />}
                  <ImageUploader callback={handleUploadPic} />
                </div>
              </div>
              <div className="input-form-right">
                <div className="date-picker">
                  <Paper elevation={3}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <StaticDatePicker
                        sx={{ width: "320px" }}
                        okLabel=""
                        cancelLabel=""
                        orientation="landscape"
                        openTo="day"
                        name="date"
                        value={event.date}
                        onChange={(date) => setEvent({ ...event, date })}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Paper>
                </div>
                <div className="time-picker">
                  <Paper elevation={3} sx={{ marginTop: "30px" }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <StaticTimePicker
                        ampm
                        orientation="landscape"
                        openTo="minutes"
                        name="time"
                        value={event.time}
                        onChange={(time) => setEvent({ ...event, time })}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Paper>
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: "20px",
                    width: "100px",
                    alignSelf: "end",
                    marginTop: "30px",
                    backgroundColor: "blue",
                  }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateEvent;
