const Sequelize = require("sequelize");
const db = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Friendship = require("./Friendship");
const { BOOLEAN, STRING, INTEGER } = require("sequelize");

const SALT_ROUNDS = 5;

const User = db.define("user", {
  username: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: STRING,
  },
  firstName: {
    type: STRING,
  },
  lastName: {
    type: STRING,
  },
  email: {
    type: STRING,
  },
  streetAddress: {
    type: STRING,
  },
  city: {
    type: STRING,
  },
  state: {
    type: STRING,
  },
  zip: {
    type: STRING,
  },
  phone: {
    type: STRING,
  },
  imageUrl: {
    type: STRING,
    defaultValue: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F12%2Fpomeranian-white-puppy-921029690-2000.jpg'
  }
});

User.associate = function (models) {
  User.hasMany(models.User, { as: "Friends", through: models.Friendship });
};

module.exports = User;

/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
  //we need to compare the plain version to an encrypted version of the password
  return bcrypt.compare(candidatePwd, this.password);
};

User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT);
};

/**
 * classMethods
 */
User.authenticate = async function ({ username, password }) {
  const user = await this.findOne({ where: { username } });
  if (!user || !(await user.correctPassword(password))) {
    const error = Error("Incorrect username/password");
    error.status = 401;
    throw error;
  }
  return user.generateToken();
};

User.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.JWT);
    const user = User.findByPk(id);
    if (!user) {
      throw "nooo";
    }
    return user;
  } catch (ex) {
    const error = Error("bad token");
    error.status = 401;
    throw error;
  }
};

/**
 * hooks
 */
const hashPassword = async (user) => {
  //in case the password has been changed, we want to encrypt it with bcrypt
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
};

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));
