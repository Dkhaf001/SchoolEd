const Sequelize = require('sequelize');
const db = require('../db.js');
const Schools = require('./schools.js');

const Teachers = db.define('teachers', {
  email: {
    type: Sequelize.STRING,
    unique: true
  }
});

Teachers.belongsTo(Schools, { foreignKey: 'school_id' });

module.exports = Teachers;

// let data = await StudentsTeachers.findAll({ where: { teacher_id: 1 } });
// data.forEach((row) => {
//   let newData = await StudentsClasses.findAll({ where: { student_id: row.student_id } });

// });