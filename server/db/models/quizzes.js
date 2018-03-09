const Sequelize = require('sequelize');
const db = require('../db.js');
const Topics = require('../models/topics.js');

const Quizzes = db.define('quizzes', {
  grade: {
    type: Sequelize.INTEGER
  }
});

Quizzes.belongsTo(Topics, { foreignKey: 'topic_id' });

module.exports = Quizzes;