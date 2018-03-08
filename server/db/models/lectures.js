const Sequelize = require('sequelize');
const db = require('../db.js');
const Topics = require('./topics.js');

const Lectures = db.define('lectures', {
  name: {
    type: Sequelize.STRING,
    unique: true
  }
});

Lectures.belongsTo(Topics, { foreignKey: 'topic_id' });

module.exports = Lectures;