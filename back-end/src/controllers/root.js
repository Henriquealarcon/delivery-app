const express = require('express');

const root = express.Router({ mergeParams: true });

const newLoginRouter = require('./login/router');
const newRegisterRouter = require('./users/router');
const newProductRouter = require('./products/router');
const newSalesRouter = require('./sales/router');
const newAdminRegisterRouter = require('./admin/router');

root.use('/login', newLoginRouter);
root.use('/register', newRegisterRouter);
root.use('/customer/products', newProductRouter);
root.use('/customer/order', newSalesRouter);
root.use('/adminRegister', newAdminRegisterRouter);


module.exports = { root };
