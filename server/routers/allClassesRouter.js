const router = require('express').Router();
const allClassesController = require('../controllers/allClassesController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      console.log(req.body)
      await allClassesController.addClass(req.body);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    try {
      let allClasses = await allClassesController.fetchAllClasses(req.query.classes);

      
      res.send({
        classes: allClasses
      });  
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    try {
      await allClassesController.removeClass(req.body);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

module.exports = router;