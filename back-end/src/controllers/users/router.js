const express = require('express');
const rescue = require('express-rescue');

const create = require('./create');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(create));

module.exports = router;
