const express = require('express');

const rescue = require('express-rescue');

const router = express.Router({ mergeParams: true });

const createUser = require('./createUserController');

router.post('/', rescue(createUser));

module.exports = router;
