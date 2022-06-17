import React, { Component, useMemo } from "react";
import { connect } from "react-redux";
import axios from "axios";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Dropzone from "react-dropzone";

import { updateProfile, updateProfilePic } from "../../store";

import "./Profile.scss";

const style = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

function StyledDropzone(props) {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </div>
  );
}

<StyledDropzone />;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.auth.username || "",
      streetAddress: this.props.auth.streetAddress || "",
      email: this.props.auth.email || "",
      city: this.props.auth.city || "",
      state: this.props.auth.state || "",
      zip: this.props.auth.zip || "",
      phone: this.props.auth.phone || "",
    };
  }

  onChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  };

  saveProfile = (ev) => {
    ev.preventDefault();
    this.props.update({ ...this.state });
  };

  handleProfilePicUpload = async (files) => {
    console.log("asdf");
    try {
      const file = files[0];
      let response = await axios.post("/api/upload", {
        filename: file.name,
        filetype: file.type,
      });

      const signedUrl = response.data;
      const options = {
        headers: {
          "Content-Type": file.type,
        },
      };

      response = await axios.put(signedUrl, file, options);
      this.props.updateProfilePic(file.name);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { username, streetAddress, email, city, state, zip, phone, imageUrl } = this.state;
    const { saveProfile, onChange } = this;
    return (
      <div className="profile">
        <React.Fragment>
          <Typography variant="h6" gutterBottom className="profile-header">
            Edit Profile
          </Typography>
          <div className="user-avatar">
            <Avatar sx={{ width: 200, height: 200 }} src={this.props.auth.imageUrl}></Avatar>
          </div>
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
        <Dropzone onDrop={this.handleProfilePicUpload}>
          {({ getRootProps, getInputProps }) => (
            <section className="container">
              <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
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
    updateProfilePic: (filename) => dispatch(updateProfilePic(filename)),
  };
};

export default connect(mapState, mapDispatch)(Profile);
