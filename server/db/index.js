const db = require('./db.js');



db.sync()
.then(() => {
  console.log('db synced');
})
.catch(() => {
  console.log('error syncing db');
});