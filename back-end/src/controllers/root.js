const express = require('express');

const root = express.Router({ mergeParams: true });

const newLoginRouter = require('./login/router');
const newRegisterRouter = require('./users/router');

root.use('/login', newLoginRouter);
root.use('/register', newRegisterRouter);

module.exports = { root };
