const express = require('express');
const rescue = require('express-rescue');

const { auth } = require('../../middlewares');
const list = require('./list');
const getById = require('./getById');

const router = express.Router({ mergeParams: true });

router.get('/', rescue(auth), rescue(list));
router.get('/:id', rescue(auth), rescue(getById));

module.exports = router;
