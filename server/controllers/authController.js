const Users = require('../db/models/users.js');
const bcrypt = require('bcrypt');

module.exports = {
  login: async ({ email, password }) => {
    try {
      let user = await Users.findOne({ where: { email: email } });
      // console.log(user);
      let isCorrect = bcrypt.compare(password, user.password);

      if (!isCorrect) {
        throw null;
      }

      return user.type;
    } catch (err) {
      throw err;
    }
  },
  signup: async ({ email, password, type }) => {
    try {
      console.log('we are inside signup!!!!!!');
      await Users.create({
        email: email,
        password: password,
        type: type
      });
    } catch (err) {
      throw err;
    }
  }
}