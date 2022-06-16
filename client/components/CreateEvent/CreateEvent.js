import React, { useState } from "react";

import Modal from "@mui/material/Modal";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { Paper } from '@mui/material';

import { createEvent } from "../../store";

import "./CreateEvent.scss";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CreateEvent = (props) => {
  const [value, setValue] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className="create-event">
      <span className="create-event-btn" onClick={handleOpen}>
        + create event
      </span>
      <Modal open={open} onClose={handleClose}>
        <div className="create-event-modal">
          <form className="form-container">
            <div className="create-event-form">
              <div className="create-event-left"></div>
              <div className="input-form-right">
                <div className="date-picker">
                  <Paper elevation={3}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <StaticDatePicker 
                        okLable=""
                        cancelLabel=""
                        orientation="landscape"
                        openTo="day"
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
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
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Paper>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
  
}

export default CreateEvent;
