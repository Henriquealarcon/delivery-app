const express = require('express');

const rescue = require('express-rescue');
const authentication = require('../../middlewares/authentication');
const { productsFound } = require('./getProductById');
const getAllProducts = require('./getProducts');

const router = express.Router({ mergeParams: true });

router.get('/', rescue(authentication), rescue(getAllProducts));
router.get('/:id', rescue(authentication), rescue(productsFound));

module.exports = router;
