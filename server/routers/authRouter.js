const router = require('express').Router();
const authController = require('../controllers/authController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      console.log(req.body);
      await authController.signup(req.body);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    try {
      await authController.login(req.query);
      req.session[req.query.email] = true; //req.query grabs from params passed in
      console.log(req.session);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

module.exports = router;



