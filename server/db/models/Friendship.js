const Sequelize = require('sequelize')
const db = require('../db')

const Friendship = db.define('friendship', {
    accepted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
  })

module.exports = Friendship