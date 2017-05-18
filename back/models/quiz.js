'use strict';

const config = require('config');
const path = require('path');
const mongoose = require(path.join(config.root, 'db'));


let answerOptionSchema = new mongoose.Schema({
  id   : Number,
  text : String,
});


let questionSchema = new mongoose.Schema({
    question        : { type: String, required: true },
    answerOptions   : [ answerOptionSchema ],
    correctOptions  : [ Number ],
    correctOption   : Number,
    correctAnswers  : [ String ],
    answerIsCorrect : Boolean,
});
questionSchema.pre('save', function (next) {
    if (this.isNew) {
        if (!this.correctAnswers.length) {
            this.correctAnswers = undefined;
        }
        if (!this.answerOptions.length) {
            this.answerOptions = undefined;
        }
        if (!this.correctOptions.length) {
            this.correctOptions = undefined;
        }
    }
    next();
})


let quizSchema = new mongoose.Schema({
    name        : { type: String, required: 'Name of quiz mustn\'t be empty.' },
    description : String,
    date        : Date,
    questions   : [ questionSchema ],
});
quizSchema.pre('save', function (next) {
    if (this.isNew && 0 === this.questions.length) {
        this.questions = undefined;
    }
    next();
})


module.exports = mongoose.model('Quiz', quizSchema);
