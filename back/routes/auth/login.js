const passport = require('koa-passport');
const authorised = require('./authorised');

module.exports = function*(next) {
    yield passport.authenticate('local',
        { successRedirect: '/',
          failureRedirect: '/'
        }
   );

   yield * next;
};
