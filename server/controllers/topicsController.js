const Topics = require('../db/models/topics.js');
const Lectures = require('../db/models/lectures.js');



module.exports = {
  addTopic: async ({ topicName, lecture_id }) => {
    try {
      let { id } = await Lectures.findOne({ where: { id: lecture_id }});
      await Topics.create({ name: topicName, lecture_id: id });
    } catch (err) {
      throw err;
    }
  },
  fetchAllTopics: async ({ lecture_id }) => {
    try {
        // let topics = [];
        console.log('before topics');
        let topics = await Lectures.findAll({ where: { id: lecture_id }});
        console.log('after topics', topics);
        return topics;     
    } catch (err) {
      throw err;
    }
  },
  removeTopic: async ({ name }) => {
    try {
      let destroyed = await Topics.destroy({
        where: {
          name: name
        }
      });

      if (!destroyed) {
        throw null;
      }
    } catch (err) {
      throw err;
    }
  },
};