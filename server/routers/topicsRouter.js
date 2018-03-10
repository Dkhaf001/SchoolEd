const router = require('express').Router();
const topicsController = require('../controllers/topicsController.js');

router.route('/')
  .post(async (req, res) => {
    try {
      await topicsController.addTopic(req.body);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .get(async (req, res) => {
    try {
      console.log('geting topics');
      let allTopics = await topicsController.fetchAllTopics(req.query);
      console.log('got topics: ', allTopics);
      res.send(allTopics);  
    } catch (err) {
      res.sendStatus(500);
    }
  })
  .delete(async (req, res) => {
    try {
      await topicsController.removeTopic(req.body);
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

module.exports = router;