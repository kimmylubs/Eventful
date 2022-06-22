//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Event = require('./models/Event')
const Friendship = require('./models/Friendship')

//associations could go here!
Event.hasMany(User)
User.hasMany(Event)
User.hasMany(Friendship, { as: 'Friends' });
//CalendarItem.belongsTo(Calendar)

module.exports = {
  db,
  models: {
    User,
    Event,
    Friendship
  },
}
