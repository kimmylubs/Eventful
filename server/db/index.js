//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Event = require('./models/Event')

//associations could go here!
Event.hasMany(User)
User.hasMany(Event)
//User.hasOne(Calendar)
//CalendarItem.belongsTo(Calendar)

module.exports = {
  db,
  models: {
    User,
    Event
  },
}
