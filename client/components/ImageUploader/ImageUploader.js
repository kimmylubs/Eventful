import React, { useEffect } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

import "./ImageUploader.scss";

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
  justifyContent: "center"
};

const ImageUploader = ({ callback }) => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
  });

  const handleUpload = async (files) => {
    try {
      const file = files[0];
      const response = await axios.post("/api/upload", {
        filename: file.name,
        filetype: file.type,
      });

      const signedUrl = response.data;
      const options = {
        headers: {
          "Content-Type": file.type,
        },
      };

      const awsResponse = await axios.put(signedUrl, file, options);
      console.log("awsResponse: ", awsResponse);
      callback("https://capstone-fsa.s3.amazonaws.com/" + file.name);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleUpload(acceptedFiles);
  }, [acceptedFiles]);

  return (
    <div className="image-uploader">
      <div className="click" {...getRootProps({ style })}>
        <input className="selected-img" {...getInputProps()} />
        <p className="label">Drag 'n' drop some files here, or click to select files</p>
      </div>
    </div>
  );
};

export default ImageUploader;
