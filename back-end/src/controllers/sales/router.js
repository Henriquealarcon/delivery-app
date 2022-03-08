const express = require('express');

const rescue = require('express-rescue');

const router = express.Router({ mergeParams: true });

const getSales = require('./getSales');

router.get('/', rescue(getSales));

module.exports = router;
