const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
<<<<<<< HEAD
      attributes: ["UUID", "email", "username"],
=======
      attributes: ["UUID", "id", "username", "imageUrl"],
>>>>>>> 43315842d0483f11d9178c2713e396e993422a35
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
