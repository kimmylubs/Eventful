const router = require('express').Router()
//const { default: Events } = require('../../client/components/EventBrite/EventBrite')
const { models: { Event }} = require('../db')
//const router = require('express').Router()
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const events = await Event.findAll();
    res.send(events)
  } catch (e) {
    next(e)
  }
})


router.get('/:id', async (req, res, next) => {
  try {
    console.log('/events/id')
    const data = await Event.findAll({
      where: { id: req.params.id}
    })
    res.send(data)
  } catch (e) {
    next(e)
  }
})
