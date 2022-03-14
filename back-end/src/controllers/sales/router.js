const express = require('express');
const rescue = require('express-rescue');

const { auth } = require('../../middlewares');
const create = require('./create');
const getAllSales = require('./getSales');
const getSalesById = require('./getSalesById');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(auth), rescue(create));
router.get('/sales/:id', rescue(auth), rescue(getSalesById));
router.get('/:id', rescue(auth), rescue(getAllSales));

module.exports = router;
