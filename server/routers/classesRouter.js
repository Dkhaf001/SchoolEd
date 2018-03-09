const router = require('express').Router();
const classesController = require('../controllers/classesController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await classesController.addClass(req.body);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    try {
      let allClasses = await classesController.fetchAllClasses(req.query);

      res.send(allClasses);  
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    try {
      await classesController.removeClass(req.body);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

module.exports = router;