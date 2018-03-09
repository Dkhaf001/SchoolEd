const Classes = require('../db/models/classes.js');
const Teachers = require('../db/models/teachers.js');
const StudentsClasses = require('../db/models/studentsClasses.js');
const Students = require('../db/models/students.js');


module.exports = {
  addClass: async ({ className, teacher }) => {
    try {
      let { id } = await Teachers.findOne({ where: { email: teacher }});
      await Classes.create({ name: className, teacher_id: id });
    } catch (err) {
      throw err;
    }
  },
  fetchAllClasses: async ({ email, type }) => {
    console.log('type:', typeof type);
    try {
      if (type === '0') { //student
        let student = await Students.findOne({ where: { email: email }});
        let all = await StudentsClasses.findAll({ where: { student_id: student.id }});
        let classes = [];
        for (let i = 0; i < all.length; i++) {
          let aClass = await Classes.findOne({ where: { id: all[i].class_id } });
          classes.push(aClass);
        }
        return classes;
      } else if (type === '1') {
        console.log('ok we here');
        let teacher = await Teachers.findOne({ where: { email: email } });
        console.log('found teacher:', teacher.email);
        let classes = await Classes.findAll({ where: { teacher_id: teacher.id } });
        return classes;
      }
    } catch (err) {
      throw err;
    }
  },
  removeClass: async ({ name }) => {
    try {
      let destroyed = await Classes.destroy({
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