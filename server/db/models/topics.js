const Sequelize = require('sequelize');
const db = require('../db.js');
const Students = require('./students.js');
const Quizzes = require('./quizzes.js');

const Topics = db.define('topics', {
  name: {
    type: Sequelize.STRING,
    unique: true
  }
});

Topics.belongsTo(Students, { foreignKey: 'student_id' });
Topics.belongsTo(Quizzes, { foreignKey: 'quiz_id' });

module.exports = Topics;