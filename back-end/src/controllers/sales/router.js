const express = require('express');

const rescue = require('express-rescue');
const authentication = require('../../middlewares/authentication');

const router = express.Router({ mergeParams: true });

const create = require('./create');

router.post('/', rescue(authentication), rescue(create));

module.exports = router;
