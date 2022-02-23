const express = require('express');

const rescue = require('express-rescue');

const router = express.Router({ mergeParams: true });

const login = require('./login');

router.post('/', rescue(login));

module.exports = router;