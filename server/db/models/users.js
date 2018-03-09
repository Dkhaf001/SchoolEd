const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../db.js');

const Users = db.define('users', {
  // username: {
  //     type: Sequelize.STRING,
  //     unique: true,
  //     allowNull: false
  // },
  type: Sequelize.INTEGER,
  email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
  },
  password: {
      type: Sequelize.STRING,
      allowNull: false
  }
}, {
  hooks: {
    beforeCreate: (user) => {
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(user.password, salt);
    }
  },
  instanceMethods: {
    validPassword: function(password) {
      return bcrypt.compareSync(password, this.password);
    }
  }    
});

module.exports = Users;