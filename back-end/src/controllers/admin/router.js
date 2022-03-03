const express = require('express');

const rescue = require('express-rescue');
const authentication = require('../../middlewares/authentication');

const router = express.Router({ mergeParams: true });

const createUser = require('./createUserController');

router.post('/', rescue(authentication), rescue(createUser));

module.exports = router;