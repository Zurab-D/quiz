'use strict';

const get = require('./get');

exports.getAllQuizzes = get.all('quiz');

exports.getQuizById = get.oneById('quiz');
