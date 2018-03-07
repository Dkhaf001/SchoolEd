const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const router = require('./router.js');
const path = require('path');
const User = require('./db/models/user.js');

const app = express();

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
//---------------------------------------------------
app.use('/api', router);
app.use('/', express.static(path.join(__dirname, '../public/')));

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));


app.use(cookieParser());

app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});



//----------------------------------------------------

const port = 9001;

app.listen(port, () => {
  console.log('Server has started on port: ' + port);
});
