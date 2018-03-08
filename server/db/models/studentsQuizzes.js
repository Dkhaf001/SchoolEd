const Sequelize = require('sequelize');
const db = require('../db.js');
const Students = require('./students.js');
const Quizzes = require('./quizzes.js');

const StudentsQuizzes = db.define('students_quizzes', {});

StudentsQuizzes.belongsTo(Students, {
  foreignKey: 'student_id'
});

StudentsQuizzes.belongsTo(Quizzes, {
  foreignKey: 'quiz_id'
});

module.exports = StudentsQuizzes;