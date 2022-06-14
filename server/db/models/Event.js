const Sequelize = require("sequelize");
const db = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Event = db.define("event", {
  name: {
    type: db.Sequelize.JSON
  },
  // id: {
  //   type: Sequelize.UUID,
  //   // primaryKey: true,
  // },
  imageUrl: {
    type: Sequelize.STRING,
    // defaultValue:
  },
  description: {
    type: Sequelize.STRING,
  },
  category: {
    type: Sequelize.INTEGER,
  },
  price: {
    type: Sequelize.STRING,
  },
  // image for the boxes
//   // image when you click on event
//   imageClick: {
//     type: Sequelize.STRING,
//   },
  local: {
    type: Sequelize.STRING,
  },
// //   key: {
// //     type: Sequelize.ENUM(
// //       "business",
// //       "fashion",
// //       "food",
// //       "general",
// //       "music",
// //       "sports",
// //     ),
// //   },
  timezone: {
    type: Sequelize.STRING,
  },
  venueId: {
    type: Sequelize.STRING,
  },
//   city: {
//     type: Sequelize.STRING,
//   },
  address: {
    type: Sequelize.STRING,
  },
//   state: {
//     type: Sequelize.STRING,
//   },
//   zipcode: {
//     type: Sequelize.INTEGER,
//   },
});

module.exports = Event
