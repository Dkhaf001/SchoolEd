const Users = require('../db/models/users.js');
const bcrypt = require('bcrypt');

module.exports = {
  login: async ({ email, password }) => {
    try {
      let user = await Users.findOne({ where: { email: email } });
      console.log(user);
      let isCorrect = bcrypt.compare(password, user.password);

      if (!isCorrect) {
        throw null;
      }
    } catch (err) {
      throw err;
    }
  },
  signup: async ({ email, password }) => {
    try {
      Users.create({
        email: email,
        password: password
      });
    } catch (err) {
      throw err;
    }
  }
}