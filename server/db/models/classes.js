const Sequelize = require('sequelize');
const db = require('../db.js');
const Lectures = require('./lectures.js');
//require topics

const Classes = db.define('classes', {
  name: {
    type: Sequelize.STRING,
    unique: true
  }
});

Classes.belongsTo(Lectures, { foreignKey: 'lecture_id' });

module.exports = Classes;