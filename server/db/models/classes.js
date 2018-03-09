const Sequelize = require('sequelize');
const db = require('../db.js');
const Teachers = require('./teachers.js');
//require topics

const Classes = db.define('classes', {
  name: {
    type: Sequelize.STRING,
    unique: true
  }
});

Classes.belongsTo(Lectures, { foreignKey: 'teacber_id' });

module.exports = Classes;