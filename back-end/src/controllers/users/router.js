const express = require('express');
const rescue = require('express-rescue');

const create = require('./create');
const sellersList = require('./sellersList');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(create));
router.get('/', rescue(sellersList));

module.exports = router;
