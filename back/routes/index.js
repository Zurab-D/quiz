'use strict';

const handlerGet = require('./get');
const auth = require('./auth');

module.exports = (app, router) => {
    router.get('/quizzes',              handlerGet.getAllQuizzes);
    router.get('/quizzes/:id',          handlerGet.getQuizById);
    /*
    router.post('/quizzes',               handlerPost.AddQuizzes);
    router.patch('/quizzes/:quiz',        handlerPatch.patchQuiz(router));
    router.delete('/quizzes/',            handlerDelete.deleteAllQuizzes);
    router.delete('/quizzes/:quizzes',    handlerDelete.deleteQuiz);
    */
    // ------------------------------------------------------------------ //


    router.post('/signup',          auth.signup);
    router.post('/login',           auth.login);
    router.get('/authorised',       auth.authorised);
    router.get('/logout',           auth.logout);
    // router.get('/salt/:saltuser',   auth.salt);
    // ------------------------------------------------------------------ //
    app.use(router.routes());
    return router;
};
