const router = require("express").Router();
const aws = require("aws-sdk");
require("dotenv").config();

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

router.post("/", async (req, res, next) => {
  try {
    const { filename, filetype } = req.body;

    const s3 = new aws.S3();

    const params = {
      Bucket: "capstone-fsa",
      Key: filename,
      Expires: 60,
      ContentType: filetype,
    };

    s3.getSignedUrl("putObject", params, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.send(data);
      }
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
