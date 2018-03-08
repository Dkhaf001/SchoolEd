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

Schools.bulkCreate(schoolsData).then(() => {
    Quizzes.bulkCreate(quizzesData).then(() => {
      Students.bulkCreate(studentsData).then(() => {
        Topics.bulkCreate(topicsData).then(() => {
          Lectures.bulkCreate(lecturesData).then(() => {
            Classes.bulkCreate(classesData).then(() => {
              Teachers.bulkCreate(teachersData).then(() => {
                StudentsClasses.bulkCreate(studentsClassesData).then(() => {
                  StudentsQuizzes.bulkCreate(studentsQuizzesData).then(() => {
                    StudentsTeachers.bulkCreate(studentsTeachersData).then(
                      () => {
                        console.log("done inserting data");
                      }
                    );
                  });
                });
              });
            });
          });
        });
      });
    });
  })
  .catch(err => {
    throw err;
  });
