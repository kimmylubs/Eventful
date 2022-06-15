const Sequelize = require("sequelize");
const db = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Event = db.define("event", {
  // data: {
  //   type: db.Sequelize.JSON
  // },
  venueAddress: {
    type: db.Sequelize.JSON
  },

  
  eventId: {
    type: db.Sequelize.JSON,
    // primaryKey: true,
  },
  name: {
    type: db.Sequelize.JSON,
  },
  description: {
    type: db.Sequelize.JSON,
  },
  url: {
    type: db.Sequelize.JSON,
    // defaultValue:
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
  // venueAddress: {
  //   type: db.Sequelize.JSON
  // },
  fullAddress: {
    type: db.Sequelize.JSON
  },
  venueId: {
    type: db.Sequelize.JSON
  },
  //   timezone: {
  //     type: Sequelize.INTEGER,
  //   },
  //   price: {
  //     type: Sequelize.STRING,
  //   },
  //   // image for the boxes
  // //   // image when you click on event
  // //   imageClick: {
  // //     type: Sequelize.STRING,
  // //   },
  //   local: {
  //     type: Sequelize.STRING,
  //   },
  // // //   key: {
  // // //     type: Sequelize.ENUM(
  // // //       "business",
  // // //       "fashion",
  // // //       "food",
  // // //       "general",
  // // //       "music",
  // // //       "sports",
  // // //     ),
  // // //   },
  //   timezone: {
  //     type: Sequelize.STRING,
  //   },
  // venueIdEvents: {
  //   type: db.Sequelize.JSON,
  // },
  // venueId: {
  //   type: db.Sequelize.JSON,
  // },
  // //   city: {
  // //     type: Sequelize.STRING,
  // //   },
  // address: {
  //   type: db.Sequelize.JSON,
  // },
  //   state: {
  //     type: Sequelize.STRING,
  //   },
  //   zipcode: {
  //     type: Sequelize.INTEGER,
  //   },
});

module.exports = Event;
