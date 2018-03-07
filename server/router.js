const router = require('express').Router();



var sessionChecker = (req, res, next) => {
    if (!(req.session.user && req.cookies.user_sid)) {
        res.redirect('/login');
    } else {
        next();
    }    
};


app.get('/', sessionChecker, (req, res) => {
    res.render('index');
});


// app.route('/signup')
//     .get(sessionChecker, (req, res) => {
//         res.sendFile(__dirname + '/public/signup.html');
//     })
//     .post((req, res) => {
//         User.create({
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password
//         })
//         .then(user => {
//             req.session.user = user.dataValues;
//             res.redirect('/');
//         })
//         .catch(error => {
//             res.redirect('/signup');
//         });
//     });



// app.route('/login')
//     .get(sessionChecker, (req, res) => {
//         res.sendFile(__dirname + '/public/login.html');
//     })
//     .post((req, res) => {
//         var username = req.body.username,
//             password = req.body.password;

//         User.findOne({ where: { username: username } }).then(function (user) {
//             if (!user) {
//                 res.redirect('/login');
//             } else if (!user.validPassword(password)) {
//                 res.redirect('/login');
//             } else {
//                 req.session.user = user.dataValues;
//                 res.redirect('/dashboard');
//             }
//         });
//     });



// app.get('/student', (req, res) => {
//     if (req.session.user && req.cookies.user_sid) {
//         res.sendFile(__dirname + '/public/');
//     } else {
//         res.redirect('/login');
//     }
// });



app.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});


// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});



module.exports = router;