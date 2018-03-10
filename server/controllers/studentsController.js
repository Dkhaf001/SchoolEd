// const Classes = require('../db/models/classes.js');
// const Students = require('../db/models/students.js');



// module.exports = {
//   addStudent: async ({ className, student_id }) => {
//     try {
//       let { id } = await Students.findOne({ where: { id: student_id }});
//       await Topics.create({ name: topicName, lecture_id: id });
//     } catch (err) {
//       throw err;
//     }
//   },
//   fetchAllTopics: async ({ lecture_id }) => {
//     try {
//         // let topics = [];
//         let topics = await Lectures.findAll({ where: { id: lecture_id }});
//         return topics;     
//     } catch (err) {
//       throw err;
//     }
//   },
//   removeTopic: async ({ name }) => {
//     try {
//       let destroyed = await Topics.destroy({
//         where: {
//           name: name
//         }
//       });

//       if (!destroyed) {
//         throw null;
//       }
//     } catch (err) {
//       throw err;
//     }
//   },
// };