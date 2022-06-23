const router = require('express').Router()
const { models: { Friendship, User }} = require('../db')
module.exports = router;

router.get('/', async (req, res, next) => {
    try {
        const friends = await User.findAll({
            include: {
              model: Friendship,
              as: 'Friends'
            }
          });
        res.send(friends)
    }
    catch (e) {
        console.log(e)
    }
})

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

