const express = require('express');

const root = express.Router({ mergeParams: true });

const newLoginRouter = require('./login/router');
const newRegisterRouter = require('./users/router');
const newProductRouter = require('./products/router');

root.use('/login', newLoginRouter);
root.use('/register', newRegisterRouter);
root.use('/customer/products', newProductRouter);

module.exports = { root };
