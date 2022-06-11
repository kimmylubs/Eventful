const Sequelize = require("sequelize");
const db = require("../db");

const Calendar = db.define('calendar', {
    invited: {
        type: Sequelize.TEXT,
    },
    confirmed: {
        type: Sequelize.TEXT
    }
})