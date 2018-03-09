const Classes = require("./db/models/classes.js");
const Lectures = require("./db/models/lectures.js");
const Quizzes = require("./db/models/quizzes.js");
const Schools = require("./db/models/schools.js");
const Students = require("./db/models/students.js");
const StudentsClasses = require("./db/models/studentsClasses.js");
const StudentsQuizzes = require("./db/models/studentsQuizzes.js");
const StudentsTeachers = require("./db/models/studentsTeachers.js");
const Teachers = require("./db/models/teachers.js");
const Topics = require("./db/models/topics.js");
const classesData = require("./db/data/classes.json");
const lecturesData = require("./db/data/lectures.json");
const quizzesData = require("./db/data/quizzes.json");
const schoolsData = require("./db/data/schools.json");
const studentsData = require("./db/data/students.json");
const studentsClassesData = require("./db/data/studentsClasses.json");
const studentsQuizzesData = require("./db/data/studentsQuizzes.json");
const studentsTeachersData = require("./db/data/studentsTeachers.json");
const teachersData = require("./db/data/teachers.json");
const topicsData = require("./db/data/topics.json");

const create = async () => {
  try {
    await Schools.bulkCreate(schoolsData);
    await Teachers.bulkCreate(teachersData);
    await Classes.bulkCreate(classesData);
    await Lectures.bulkCreate(lecturesData);
    await Topics.bulkCreate(topicsData);
    await Quizzes.bulkCreate(quizzesData);
    await Students.bulkCreate(studentsData);
    await StudentsClasses.bulkCreate(studentsClassesData);
    await StudentsQuizzes.bulkCreate(studentsQuizzesData);
    await StudentsTeachers.bulkCreate(studentsTeachersData);
    console.log('done inserting data');
  } catch (err) {
    console.log('error inserting data');
    throw err;
  }
};

create();

