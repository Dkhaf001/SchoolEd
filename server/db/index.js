const db = require('./db.js');
const Classes = require('./models/classes.js');
const Lectures = require('./models/lectures.js');
const Students = require('./models/students.js');
const Schools = require('./models/schools.js');
const Teachers = require('./models/teachers.js');
const Topics = require('./models/topics.js');
const StudentsClasses = require('./models/studentsClasses.js');
const StudentsQuizzes = require('./models/studentsQuizzes.js');
const StudentsTeachers = require('./models/studentsTeachers.js');
const Quizzes = require('./models/quizzes.js');


db.sync()
.then(() => {
  console.log('db synced');
})
.catch(() => {
  console.log('error syncing db');
});