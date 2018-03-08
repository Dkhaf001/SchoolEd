const Classes = require('./db/models/classes.js');
const Lectures = require('./db/models/lectures.js');
const Quizzes = require('./db/models/quizzes.js');
const Schools = require('./db/models/schools.js');
const Students = require('./db/models/students.js');
const StudentsClasses = require('./db/models/studentsClasses.js');
const StudentsQuizzes = require('./db/models/studentsQuizzes.js');
const StudentsTeachers = require('./db/models/studentsTeachers.js');
const Teachers = require('./db/models/teachers.js');
const Topics = require('./db/models/topics.js');

Users.bulkCreate(usersData)
  .then(() => {
    Posts.bulkCreate(postsData)
      .then(() => {
        Likes.bulkCreate(likesData)
          .then(() => {
            FollowingsFollowers.bulkCreate(followingsFollowersData)
              .then(() => {
                console.log('done inserting data');
              });
          });
      });
  })
  .catch((err) => {
    throw err;
  });