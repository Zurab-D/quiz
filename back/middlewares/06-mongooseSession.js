const config = require('config');
const path = require('path');
const mongoose = require(path.join(config.root, 'db'));
const session = require('koa-generic-session');
const mongooseStore = require('koa-session-mongoose');

module.exports = session({
  store: mongooseStore.create({
    model: 'Session'
  })
});
