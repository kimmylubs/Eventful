//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Event = require("./models/Event");
const Friendship = require('./models/Friendship')
//const Friends = require('./models/Friends')
// const Attendee = require()

//associations could go here!
Event.hasMany(User);
User.hasMany(Event);
//User.hasOne(Calendar)

//CalendarItem.belongsTo(Calendar)
Event.hasOne(User, { through: "Owner", as: "owner" });
User.belongsToMany(Event, { through: "Attendee", as: "joinedEvents" });
Event.belongsToMany(User, { through: "Attendee", as: "attendees" });

//User and Friends
Friendship.belongsTo(User, { as: 'info', foreignKey: 'friend' });
User.belongsToMany(User, { as: 'friendship', through: "Friendship", foreignKey: 'requestee'});
User.hasMany(Friendship, { as: 'friends', foreignKey: 'requester' });

module.exports = {
  db,
  models: {
    User,
    Event,
    Friendship
  },
};
