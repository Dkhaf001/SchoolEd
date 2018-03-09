const Sequelize = require('sequelize');
const db = require('../db.js');
const Lectures = require('../models/lectures.js');

const Topics = db.define('topics', {
  name: {
    type: Sequelize.STRING,
    unique: true
  }
});

Topics.belongsTo(Lectures, { foreignKey: 'lecture_id' });

module.exports = Topics;