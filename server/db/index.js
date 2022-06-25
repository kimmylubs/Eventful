//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Event = require("./models/Event");
const Friendship = require("./models/Friendship");

//associations could go here!
Event.hasMany(User);
User.hasMany(Event);
//User.hasOne(Calendar)

//CalendarItem.belongsTo(Calendar)
Event.hasOne(User, { through: "Owner", as: "owner" });
User.belongsToMany(Event, { through: "Attendee", as: "joinedEvents" });
Event.belongsToMany(User, { through: "Attendee", as: "attendees" });

//User and Friends
User.belongsToMany(User, { through: Friendship, as: "requestedFriends", foreignKey: "userId" })
User.belongsToMany(User, { through: Friendship, as: "acceptedFriends", foreignKey: "friendId"})

module.exports = {
  db,
  models: {
    User,
    Event,
    Friendship,
  },
};
