const Sequelize = require('sequelize');
const db = require('../db.js');
const Classes = require('./classes.js');

const Lectures = db.define('lectures', {
  name: {
    type: Sequelize.STRING,
    unique: true
  }
});

Lectures.belongsTo(Classes, { foreignKey: 'class_id' });

module.exports = Lectures;