const Sequelize = require('sequelize');
const db = require('../db.js');
const Students = require('./students.js');
const Classes = require('./classes.js');

const StudentsClasses = db.define('students_classes', {});

StudentsClasses.belongsTo(Students, {
  foreignKey: 'student_id'
});

StudentsClasses.belongsTo(Classes, {
  foreignKey: 'class_id'
});

module.exports = Schools;