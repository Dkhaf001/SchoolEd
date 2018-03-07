const Sequelize = require('sequelize');
const db = require('../db.js');

const Students = db.define('students', {
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  bio: Sequelize.STRING,
  profile_picture: Sequelize.STRING
});

module.exports = Users;