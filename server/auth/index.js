const router = require("express").Router();
const {
  models: { User },
} = require("../db");

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

module.exports = router;

router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.post("/google", async (req, res, next) => {
  try {
    const { token, firstName, lastName } = req.body;
    console.log("/google token: ", token);
    const ticket = await client.verifyIdToken({
      idToken: token,
    });
    const { email } = ticket.getPayload();
    let userObj = { username: email, firstName, lastName };
    let user = await User.findOne({ where: { username: email } });
    if (!user) {
      user = await User.create(userObj);
    }
    console.log("/google user: ", user);
    res.status(201).send({ token: user.generateToken() });
  } catch (err) {
    next(err);
  }
});

router.get("/me", async (req, res, next) => {
  try {
    let user = await User.findByToken(req.headers.authorization);
    if (user) {
      user = await User.findOne({
        where: {
          id: user.id,
        },
        include: [
          "joinedEvents",
          {
            model: User,
            attributes: ["id", "email", "username", "imageUrl"],
            as: "acceptedFriends",
          },
          {
            model: User,
            attributes: ["id", "email", "username", "imageUrl"],
            as: "requestedFriends",
          },
        ],
      });
    }

    res.send(user);
  } catch (ex) {
    next(ex);
  }
});

router.put("/me", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const updatedUser = await user.update({
      username: req.body.username,
      streetAddress: req.body.streetAddress,
      email: req.body.email,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      phone: req.body.phone,
      imageUrl: req.body.imageUrl,
    });
    res.send(updatedUser);
  } catch (ex) {
    next(ex);
  }
});

router.put("/pic", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    const updatedUser = await user.update({
      imageUrl: "https://capstone-fsa.s3.amazonaws.com/" + req.body.filename,
    });
    console.log("updatedUser: ", updatedUser);
    res.send(updatedUser);
  } catch (ex) {
    next(ex);
  }
});
