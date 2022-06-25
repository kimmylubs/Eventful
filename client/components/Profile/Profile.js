import React, { Component } from "react";
import { connect } from "react-redux";

import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Stack from "@mui/material/Stack";

import { updateProfile, updateProfilePic } from "../../store";
import ImageUploader from "../ImageUploader/ImageUploader";

import "./Profile.scss";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.auth.username || "",
      firstName: this.props.auth.firstName || "",
      lastName: this.props.auth.lastName || "",
      streetAddress: this.props.auth.streetAddress || "",
      email: this.props.auth.email || "",
      city: this.props.auth.city || "",
      state: this.props.auth.state || "",
      zip: this.props.auth.zip || "",
      phone: this.props.auth.phone || "",
      imageUrl: this.props.auth.imageUrl || "",
      open: false,
    };
  }

  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });

  onChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  };

  saveProfile = (ev) => {
    ev.preventDefault();
    this.props.update({ ...this.state });
  };

  handleUploadPic = (filename) => {
    this.setState({ imageUrl: filename, open: false });
  };

  render() {
    const { username, firstName, lastName, streetAddress, email, city, state, zip, phone, imageUrl } = this.state;
    const { saveProfile, onChange } = this;
    return (
      <div className="profile">
        <React.Fragment>
          <Typography variant="h6" gutterBottom className="profile-header">
            Edit Profile
          </Typography>
              {/* <div className="profile-header2">{firstName} {lastName}</div> */}
          <Stack>
            <span className="user-avatar">
              <Avatar sx={{ width: 200, height: 200 }} src={this.state.imageUrl} />
              <Avatar sx={{ width: 50, height: 50 }} onClick={this.handleOpen}>
                <ModeEditIcon />
              </Avatar>
              <Modal open={this.state.open} onClose={this.handleClose}>
                <div className="image-uploader-modal">
                  <ImageUploader callback={this.handleUploadPic} />
                </div>
              </Modal>
            </span>
          </Stack>
          <div className="user-info-container">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="username"
                  name="username"
                  label="Username"
                  value={username}
                  onChange={onChange}
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="streetAddress"
                  name="streetAddress"
                  label="Street Address"
                  value={streetAddress}
                  onChange={onChange}
                  fullWidth
                  variant="standard"
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={onChange}
                  fullWidth
                  variant="standard"
                />
              </Grid> */}
              <Grid item xs={12} sm={6}>
                <TextField
                  id="city"
                  name="city"
                  value={city}
                  onChange={onChange}
                  label="City"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  value={lastName}
                  onChange={onChange}
                  fullWidth
                  variant="standard"
                />
              </Grid> */}
              <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  value={state}
                  onChange={onChange}
                  label="State/Province/Region"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  label="E-mail"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="zip"
                  name="zip"
                  value={zip}
                  onChange={onChange}
                  label="Zip / Postal code"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={onChange}
                  label="Phone Number"
                  fullWidth
                  variant="standard"
                />
              </Grid>
            </Grid>
          </div>
          <div className="btn-container">
            <button
              className="edit-profile-btn"
              onClick={saveProfile}
              disabled={
                username === this.props.auth.username &&
                streetAddress === (this.props.auth.streetAddress || "") &&
                email === (this.props.auth.email || "") &&
                city === (this.props.auth.city || "") &&
                state === (this.props.auth.city || "") &&
                zip === (this.props.auth.zip || "") &&
                phone === (this.props.auth.phone || "") &&
                imageUrl === (this.props.auth.imageUrl || "")
              }
            >
              Update
            </button>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    update: (user) => {
      dispatch(updateProfile(user));
    },
  };
};

export default connect(mapState, mapDispatch)(Profile);
