'use strict';

const ModelQuiz = require('./models/quiz');
const co = require('co');


let data = [
{
    id: 'a1',
    name: 'First Quiz',
    description: 'Just a first quiz',
    date: '2017-01-01',
    questions: [
        {
            question: 'How are you doing?',
            answerOptions: [
                {id: 0, text: 'I\'m fine'},
                {id: 1, text: 'Ugh?'},
                {id: 2, text: 'I\'m OK and you?'}
            ],
            correctOptions: [ 0, 2 ]
        },
        {
            question: 'What is the App name?',
            correctAnswers: [ 'quiz', 'quiz app', 'app quiz', 'quiz spa', 'spa quiz', 'quizzes', 'quizzes app', 'app quizzes', 'quizzes spa', 'spa quizzes' ]
        }
    ]
},
{
    id: 'a2',
    name: 'Second Quiz',
    description: 'This is a second quiz',
    date: '2017-01-02',
    questions: [
        {
            question: 'What is the weather?',
            answerOptions: [
                {id: 0, text: 'It\'s funy'},
                {id: 1, text: 'It\'s raining'},
                {id: 2, text: 'It\'s noon'}
            ],
            correctOption: 1
        },
        {
            question: 'What does \'U.S.\' mean?',
            correctAnswers: [ 'United States', 'The United States', 'United States Of America', 'The United States Of America' ]
        }
    ]
},
];


/*
(new ModelQuiz(data))
    .save(() => {
        console.log(`the end`);
        process.exit();
    })
    .catch(err => console.log(err));
*/

co(function*() {

    // if we got array of data, save that data
    if (data instanceof Array) {
        for (let i = 0; i < data.length; i++) {
            if (data[i]['_id']) {
                delete data[i]['_id'];
            };

            yield (new ModelQuiz(data[i])).save();//.then(() => console.log(i));
        }
    } else if (data instanceof Object) {
        // if we got a single mailbox object
        if (data['_id']) {
            delete data['_id'];
        };

        yield (new ModelQuiz(data)).save();//.then(() => console.log(`done`));
    }

    // yield function*() { console.log(`xxx`); };

}).then(() => {
    console.log(`the end`);
    process.exit();
});
