const Sequelize = require('sequelize');
const db = require('../db.js');
const Schools = require('./schools.js');
 
const Students = db.define('students', {
  email: Sequelize.STRING
});

Students.belongsTo(Schools, { foreignKey: 'school_id' });

module.exports = Students;