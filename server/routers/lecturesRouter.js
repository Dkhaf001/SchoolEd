const router = require('express').Router();
const lecturesController = require('../lecturesController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await lecturesController.addLecture(req.body);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    try {
      let allLectures = await lecturesController.fetchAllLectures(req.query);

      res.send(allLectures);  
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    try {
      await lecturesController.removeLecture(req.body);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

module.exports = router;