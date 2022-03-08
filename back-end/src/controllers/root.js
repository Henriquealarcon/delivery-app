const express = require('express');

const root = express.Router({ mergeParams: true });

const loginRouter = require('./login/router');
const registerRouter = require('./users/router');
const productRouter = require('./products/router');
const salesRouter = require('./sales/router');
const adminRouter = require('./admin/router');

root.use('/login', loginRouter);
root.use('/register', registerRouter);
root.use('/customer/products', productRouter);
root.use('/customer/order', salesRouter);
root.use('/adminRegister', adminRouter);

module.exports = root;
