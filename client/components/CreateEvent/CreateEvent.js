import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useForm } from 'react-hook-form';

import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import { Paper } from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Button from "@mui/material/Button";

import { createEvent } from "../../store";

import "./CreateEvent.scss";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CreateEvent = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);
  const [open, setOpen] = useState(false);
  const [event, setEvent] = useState({
    name: "",
    address: "",
    venue: "",
    city: "",
    region: "",
    postal: "",
    description: "",
    date: new Date(),
    time: new Date(),
  });
  // const [textValue, setValue] = useState<string>("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const { handleSubmit } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { address, city, region, postal, name, description, venue, date, time } = event;
    const YYYYMMDD = date.toISOString().split("T")[0];
    const HHmmss = time.toISOString().split("T")[1];
    const eventStart = new Date(YYYYMMDD + " " + HHmmss);
    const localizedAddress = [address, city, region].join(", ") + postal;
    const newEvent = {
      name,
      description,
      city,
      region,
      postal,
      venueName: venue,
      localStart: eventStart,
      address1: address,
      localizedAddress: localizedAddress,
      userId: user.id,
    };
    dispatch(createEvent(newEvent));
  };

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
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
                      sx={{ width: "180px" }}
                    />
                  </span>
                </div>
                <div className="input-event">
                  <span className="label">Description</span>
                  <span>
                    <TextField
                      name="description"
                      fullWidth
                      rows={4}
                      onChange={handleChange}
                      value={event.description}
                    />
                  </span>
                </div>
                <div className="input-img">
                  <div className="label">Photo</div>
                  <div className="img">
                    <CloudUploadOutlinedIcon />
                  </div>
                </div>
                <div className="upload-img">
                  <span className="upload-btn">Add Photo</span>
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
