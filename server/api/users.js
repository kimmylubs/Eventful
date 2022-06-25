const router = require("express").Router();
const {
  db,
  models: { User, Friendship },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just

      // send everything to anyone who asks!
      include: [
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
    
    const usersWithConsolidatedFriends = users.map(
      ({ id, email, username, imageUrl, acceptedFriends, requestedFriends }) => ({
        id,
        email,
        username,
        imageUrl,
        friends: acceptedFriends.concat(requestedFriends),
      })
    );

    res.json(usersWithConsolidatedFriends);
  } catch (err) {
    next(err);
  }
});
