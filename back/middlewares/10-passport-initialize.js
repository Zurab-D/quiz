const passport = require('koa-passport');
const User = require('../models/user');

const localStrategy = require('../strategies/local');

// save user session on the server on user
passport.serializeUser((user, done) => {
    done(null, user.id); // uses _id as idFieldd
});

// check signeded in user using session data
passport.deserializeUser((id, done) => {
    // callback version checks id validity automatically
    // id got from session saved on the server
    User.findById(id, done);
});

// done(null, user)
// OR
// done(null, false, { message: <error message> })  <- 3rd arg format is from built-in messages of strategies
passport.use(localStrategy);

module.exports = passport.initialize();
