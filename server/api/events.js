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

router.post("/", async(req, res, next) => {
  console.log(req.body);
  try {
    res.status(201).send(
      await Event.create({...req.body})
    );
  }
  catch(ex) {
    next(ex);
  }
});

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
