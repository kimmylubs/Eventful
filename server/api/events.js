const router = require("express").Router();
//const { default: Events } = require('../../client/components/EventBrite/EventBrite')
const {
  models: { Event, User },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    console.log("test");
    const events = await Event.findAll({ include: ["attendees", "owner"] });
    console.log("finding events");
    res.send(events);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  try {
    const event = await Event.create({ ...req.body });
    const owner = await User.findOne({ where: { id: event.userId } });
    event.setOwner(owner);
    event.addAttendee(owner);
    res.status(201).send(event);
  } catch (ex) {
    next(ex);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    console.log("/events/id");
    const data = await Event.findAll({
      where: { id: req.params.id },
    });
    res.send(data);
  } catch (e) {
    next(e);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const event = await Event.findOne({
      where: {
        id: req.params.id
      },
    });
    const user = await User.findOne({
      where: {
        id: req.body.id,
      },
    });
    event.addAttendee(user);
    res.status(200).send(event);
  } catch (e) {
    next(e);
  }
});
