const db = require('./db.js');
const Students = require('./models/students.js');
const Schools = require('./models/schools.js');


db.sync()
.then(() => {
  console.log('db synced');
})
.catch(() => {
  console.log('error syncing db');
});