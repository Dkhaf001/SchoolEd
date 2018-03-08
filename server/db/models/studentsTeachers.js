const Sequelize = require('sequelize');
const db = require('../db.js');
const Students = require('./students.js');
const Teachers = require('./teachers.js');

const StudentsTeachers = db.define('students_teachers', {});

StudentsTeachers.belongsTo(Students, {
  foreignKey: 'student_id'
});

StudentsTeachers.belongsTo(Teachers, {
  foreignKey: 'teacher_id'
});

module.exports = StudentsTeachers;