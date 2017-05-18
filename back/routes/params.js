'use strict';

const path = require('path');
const config = require('config');
const mongoose = require(path.join(config.root, 'db'));

function setIdParamHandler(router, paramName, Model) {
    router.param(paramName, function*(id, next) {
       if (!mongoose.Types.ObjectId.isValid(id)) {
           this.throw(404);
       };

       this.objById = yield Model.findById(id, {__v:0});

       if (!this.objById) {
           this.throw(404);
       };

       yield* next;
    });
}


module.exports = function(router) {
    const Quiz = require(path.join(config.root, 'models', 'quiz.js'));
    setIdParamHandler(router, 'quiz', Mailbox);
};
