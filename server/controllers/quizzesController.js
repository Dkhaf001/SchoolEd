const Topics = require('../db/models/topics.js');
const Quizzes = require('../db/models/quizzes.js');



module.exports = {
  addQuiz: async ({ quizName, topic_id }) => {
    try {
      let { id } = await Topics.findOne({ where: { id: topic_id }});
      await Quizzes.create({ name: quizName, topic_id: id });
    } catch (err) {
      throw err;
    }
  },
  fetchAllQuizzes: async ({ topic_id }) => {
    try {
        // let topics = [];
        let quizzes = await Topics.findAll({ where: { id: topic_id }});
        return quizzes;     
    } catch (err) {
      throw err;
    }
  },
  removeQuiz: async ({ name }) => {
    try {
      let destroyed = await Quizzes.destroy({
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