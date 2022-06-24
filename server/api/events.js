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
  try {
    const { address, city, region, postal, name, description, logo, venue, date, time } = req.body;
    const YYYYMMDD = new Date(date).toISOString().split("T")[0];
    const HHmmss = new Date(time).toISOString().split("T")[1];
    const eventStart = new Date(YYYYMMDD + " " + HHmmss);
    const localizedAddress = [address, city, region].join(", ") + " " + postal;
    const localizedArea =  city + ", " + region;
    const owner = await User.findByToken(req.headers.authorization);
    const newEvent = {
      name,
      description,
      logo,
      city,
      region,
      postal,
      localizedAddress,
      localizedArea,
      venueName: venue,
      localStart: eventStart,
      address1: address,
      userId: owner.id,
    };
    const event = await Event.create(newEvent);
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
    console.log('id?');
    const event = await Event.findOne({
      where: {
        id: req.params.id,
      },
    });
    const user = await User.findOne({
      where: {
        id: req.body.id,
      },
    });
    if (await event.hasAttendee(user)) {
      console.log('already has user')
      await event.removeAttendee(user);
    } else {
      await event.addAttendee(user);
    }
    res.status(200).send(event);
  } catch (e) {
    next(e);
  }
});
