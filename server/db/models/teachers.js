const Sequelize = require('sequelize');
const db = require('../db.js');
const Schools = require('./schools.js');
const Classes = require('./classes.js');

const Teachers = db.define('teachers', {
  name: {
    type: Sequelize.STRING,
    unique: true
  }
});

Teachers.belongsTo(Schools, { foreignKey: 'school_id' });
Teachers.belongsTo(Classes, { foreignKey: 'class_id' });

module.exports = Teachers;