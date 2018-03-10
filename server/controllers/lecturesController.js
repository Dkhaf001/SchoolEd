const Classes = require('../db/models/classes.js');
const Lectures = require('../db/models/lectures.js');



module.exports = {
  addLecture: async ({ lectureName, class_id }) => {
    try {
      let { id } = await Classes.findOne({ where: { id: class_id }});
      await Lectures.create({ name: lectureName, class_id: id });
    } catch (err) {
      throw err;
    }
  },
  fetchAllLectures: async ({ class_id }) => {
    try {
        // let lectures = [];
        let lectures = await Lectures.findAll({ where: { id: class_id }});
        return lectures;     
    } catch (err) {
      throw err;
    }
  },
  removeLecture: async ({ name }) => {
    try {
      let destroyed = await Lectures.destroy({
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