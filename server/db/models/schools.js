const Sequelize = require('sequelize');
const db = require('../db.js');

const Schools = db.define('schools', {
  name: {
    type: Sequelize.STRING,
    unique: true
  }
});

module.exports = Schools;