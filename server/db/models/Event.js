const Sequelize = require("sequelize");
const db = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Event = db.define("event", {
  // data: {
  //   type: db.Sequelize.JSON
  // },
  // venueAddress: {
  //   type: db.Sequelize.JSON
  // },

    eventId: {
      type: db.Sequelize.JSON,
    },
    name: {
      type: db.Sequelize.JSON,
    },
    description: {
      type: db.Sequelize.JSON,
    },
    url: {
      type: db.Sequelize.JSON,
    },
    timezone: {
      type: db.Sequelize.JSON,
    },
    localStart: {
      type: db.Sequelize.JSON,
    },
    localEnd: {
      type: db.Sequelize.JSON,
    },
    organizationId: {
      type: db.Sequelize.JSON,
    },
    status: {
      type: db.Sequelize.JSON,
    },
    eventVenueId: {
      type: db.Sequelize.JSON,
    },
    isFree: {
      type: db.Sequelize.JSON,
    },
    category: {
      type: db.Sequelize.JSON,
    },
    subcategory: {
      type: db.Sequelize.JSON,
    },
    logo: {
      type: db.Sequelize.JSON,
    },
    venueId: {
      type: db.Sequelize.JSON,
    },
    venueName: {
      type: db.Sequelize.JSON,
    },
    fullAddress: {
      type: db.Sequelize.JSON,
    },
    localizedAddress: {
      type: db.Sequelize.JSON,
    },
    localizedArea: {
      type: db.Sequelize.JSON,
    },
    address1: {
      type: db.Sequelize.JSON,
    },
    address2: {
      type: db.Sequelize.JSON,
    },
    city: {
      type: db.Sequelize.JSON,
    },
    region: {
      type: db.Sequelize.JSON,
    },
    postal: {
      type: db.Sequelize.JSON,
    },
    country: {
      type: db.Sequelize.JSON,
    },
});

module.exports = Event;
