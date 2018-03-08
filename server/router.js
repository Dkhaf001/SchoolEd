const router = require('express').Router();
const allClassesRouter = require('./routers/allClassesRouter.js');
const Users = require('./db/models/users.js');

var sessionChecker = (req, res, next) => {
    if (!req.session.user) {
        res.redirect('/login');
    } else {
        console.log('sessionChecker failed');
        next();
    }    
};


router.get('/', sessionChecker, (req, res) => {
    console.log('/ router logic hit');
    res.render('index');
});


router.route('/signup')
    .get(sessionChecker, (req, res) => {
        console.log("in here");
        // res.sendFile(__dirname + '/public/signup.html');
    })
    .post((req, res) => {
        console.log('made it into postasdasd');
        Users.create({
            email: req.body.email,
            password: req.body.password
        })
        .then(user => {
            req.session.user = user.dataValues;
            res.redirect('htto://localhost:3000/');
        })
        .catch(error => {
            res.redirect('http://localhost:3000/signup');
        });
    });



router.route('/login')
    .get(sessionChecker, (req, res) => {
        console.log("in hereee");
        res.sendFile(__dirname + '/public/login.html');
    })
    .post((req, res) => {
        var username = req.body.username,
            password = req.body.password;

        Users.findOne({ where: { username: username } }).then(function (user) {
            if (!user) {
                res.redirect('/login');
            } else if (!user.validPassword(password)) {
                res.redirect('/login');
            } else {
                req.session.user = user.dataValues;
                res.redirect('/');
            }
        });
    });



router.get('/student', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.sendFile(__dirname + '/public/');
    } else {
        res.redirect('/login');
    }
});



router.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});


router.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});



module.exports = router;