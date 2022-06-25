const router = require("express").Router();
const {
  models: { Friendship, User },
} = require("../db");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const friendships = await Friendship.findAll();
    const friendsWithInfo = await Promise.all(
      friendships.map(async ({ userId, friendId, status }) => ({
        user: await User.findOne({ where: { id: userId } }),
        friendId: await User.findOne({ where: { id: friendId } }),
        status,
      }))
    );

    res.json(friendsWithInfo);
  } catch (e) {
    console.log(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await Friendship.create(req.body);
    const response = await User.findOne({ where: { id: req.body.friendId }});
    res.json(response);
  } catch (e) {
    console.log(e);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const response = await Friendship.update({ status: true }, { where: { id: +req.params.id } });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const response = await Friendship.destroy({ where: { id: +req.params.id } });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
});

// router.get('/confirmed', async (req, res, next) => {
//     try {
//         console.log('enter try')
//         const friends = await Friendship.findAll({
//             where: {
//                 status: "confirmed"
//             }
//         });
//         res.send(friends)
//         console.log('exit try')
//     }
//     catch (e) {
//         console.log(e)
//     }
// })
