const Sequelize = require("sequelize");
const db = require("../db");

var Friendship = db.define("friendship", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  friendId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Friendship;
