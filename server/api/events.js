const router = require('express').Router()
const { models: { Event}} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
      const events = await Event.findAll();
      console.log('finding events')
      res.send(events)
  } catch (e) {
    next(e)
  }
})

router.post("/", async(req, res, next) => {
  try {
    res.status(201).send(
      await Event.create({...req.body})
    );
  }
  catch(ex) {
    next(ex);
  }
});
