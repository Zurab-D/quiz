'use strict';

/**
 * This file must be required at least ONCE.
 * After it's done, one can use require('mongoose')
 *
 * In web-app: this is done at init phase
 * In tests: in mocha.opts
 * In gulpfile: in beginning
 */

const mongoose = require('mongoose');
const config = require('config');

//mongoose.Promise = Promise;
mongoose.Promise = require('bluebird');

mongoose.set('debug', config.debug);

mongoose.connect(config.mongoose.uri + config.dbName, config.mongoose.options);

module.exports = mongoose;
