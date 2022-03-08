const express = require('express');
const rescue = require('express-rescue');

const { auth } = require('../../middlewares');
const create = require('./create');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(auth), rescue(create));

module.exports = router;
