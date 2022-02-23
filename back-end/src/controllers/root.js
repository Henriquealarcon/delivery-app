const express = require('express');

const root = express.Router({ mergeParams: true });

const newLoginRouter = require('./login/router');

root.use('/login', newLoginRouter);

module.exports = { root };