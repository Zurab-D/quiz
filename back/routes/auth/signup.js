'use strict';

const passport = require('koa-passport');
const config = require('config');
const path = require('path');
const User = require(path.join(config.root, 'models', 'user'));

module.exports = function*(next) {
    let { displayName, username, email, password } = this.request.body;
    let user = yield User.findOne({ username: username });

    if (!user) {
        user = yield User.create({
            displayName: displayName,
            username: username,
            email: email,
            password: password
        });
    }

    // sign in
    yield passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/'
    });

    yield * next;
};
