const Sequelize = require('sequelize')
const db = require('../db')

const Friendship = db.define('friendship', {
  requester: {
    type: Sequelize.UUID
  },
  requestee: {
    type: Sequelize.UUID
  },
  status: {
    type: Sequelize.STRING
  }
  })

module.exports = Friendship