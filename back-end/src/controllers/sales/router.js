const express = require('express');

const rescue = require('express-rescue');

const router = express.Router({ mergeParams: true });

const create = require('./create');

router.post('/', rescue(create));

module.exports = router;
