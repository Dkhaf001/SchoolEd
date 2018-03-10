const router = require('express').Router();
const quizzesController = require('../controllers/quizzesController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await quizzesController.addQuiz(req.body);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    try {
      let allQuizzes = await quizzesController.fetchAllQuizzes(req.query);

      res.send(allQuizzes);  
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    try {
      await quizzesController.removeQuiz(req.body);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

module.exports = router;