const router = require('express').Router();
const classesRouter = require('./routers/classesRouter.js');
const Users = require('./db/models/users.js');
const path = require('path');
const authRouter = require('./routers/authRouter');

router.use('/auth', authRouter);
router.use('/class', classesRouter);

var sessionChecker = (req, res, next) => {
    if (!(req.session && req.session.user)) {
        res.redirect('/login');
    } else {
        console.log('sessionChecker failed');
        next();
    }    
};


router.route('/')
    .get(sessionChecker, (req, res) => {
        console.log('/ router logic hit');
        res.render('index');
    })
    .delete(async (req, res) => {
        if (req.session) {
            delete req.session;
            console.log(req.session);
            res.sendStatus(200);
        } else {
            res.sendStatus(500);
        }
    });


// router.route('/signup')
//     .get(sessionChecker, (req, res) => {
//         console.log("in here");
//         // res.sendFile(__dirname + '/public/signup.html');
//     })
//     .post((req, res) => {
//         console.log('made it into postasdasd');
//         Users.create({
//             email: req.body.email,
//             password: req.body.password
//         })
//         .then(user => {
//             req.session.user = user.dataValues;
//             console.log('no error yet');
//             res.redirect('/');
//         })
//         .catch(error => {
//             console.log('signup error');
//             res.redirect('/');
//         });
//     });



// router.route('/login')
//     .get((req, res) => {
        
//     })
//     .post((req, res) => {
//         var username = req.body.username,
//             password = req.body.password;

//         Users.findOne({ where: { username: username } }).then(function (user) {
//             if (!user) {
//                 res.redirect('/');
//             } else if (!user.validPassword(password)) {
//                 res.redirect('/login');
//             } else {
//                 req.session.user = user.dataValues;
//                 res.redirect('/');
//             }
//         }).catch(error => {
//             res.redirect('/login');
//         })
//     });



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