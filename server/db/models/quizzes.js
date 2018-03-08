const Sequelize = require('sequelize');
const db = require('../db.js');

const Quizzes = db.define('quizzes', {
  grade: {
    type: Sequelize.INTEGER
  }
});

module.exports = Quizzes;