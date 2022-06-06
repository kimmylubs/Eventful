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
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});
