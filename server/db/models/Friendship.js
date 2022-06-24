const Sequelize = require('sequelize')
const db = require('../db')

var Friendship = db.define('friendship', {
  user: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
          model: 'users',
          key: 'user_id'
      }
  },
  friend: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
          model: 'users',
          key: 'user_id'
      }
  },
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Friendship