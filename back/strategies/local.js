const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

module.exports = new LocalStrategy(
    {
        usernameField: 'username', // 'username' by default
        passwordField: 'password'
    },
    (username, password, done) => {
        User.findOne({ username: username }, (err, user) => {
            if (err) return done(err);

            if (!user || !user.checkPassword(password)) {
                // don't say whether the user exists
                return done(null, false, { message: 'Нет такого пользователя или пароль неверен.' });
            };

            return done(null, user);
        });
    }
);
