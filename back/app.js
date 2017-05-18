'use strict';

// -- Long stack trace (+clarify from co) if needed ----------
if (process.env.TRACE) {
    require('./libs/trace');
}
console.log('== process.env.TRACE = ' + !!process.env.TRACE);


const koa = require('koa');
const config = require('config');
const path = require('path');
const fs = require('fs');
const Router = require('koa-router');
const router = new Router();
var cors = require('koa-cors')


const app = koa();

// enable CORS
// app.use(cors());

app.use(function * (next) {
    /*var origins = [
        'http://localhost',
        'http://localhost:3000',
        'http://localhost:4200',
    ];

    for(var i = 0; i < origins.length; i++){
        var origin = origins[i];

        if(req.headers.origin.indexOf(origin) > -1){
            res.header('Access-Control-Allow-Origin', req.headers.origin);
        }
    }*/
    // console.log(this);
    this.response.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    this.response.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    this.response.set('Access-Control-Allow-Origin', '*');
    yield * next;
});


// keys for in-koa KeyGrip cookie signing (used in session, maybe other modules)
app.keys = [config.secret];


// -- Middlewares ----------
require('./middlewares')(app);


// -- Router ----------
require('./routes')(app, router);


// -- Export ----------
module.exports = app;
