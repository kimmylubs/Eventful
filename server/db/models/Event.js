const Sequelize = require("sequelize");
const db = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Event = db.define("event", {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  ticketCount: {
    type: Sequelize.INTEGER,
  },
  price: {
    type: Sequelize.DECIMAL(0, 2),
  },
  // image for the boxes
  imageUrl: {
    type: Sequelize.STRING,
    // defaultValue:
  },
  // image when you click on event
  imageClick: {
    type: Sequelize.STRING,
  },
//   category: {
//     type: Sequelize.ENUM(
//       "business",
//       "fashion",
//       "food",
//       "general",
//       "music",
//       "sports"
//     ),
//     defaultValue: "general",
//   },
  description: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  zipcode: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Event
