const express = require('express');

const cors = require('cors');

const { root } = require('../controllers/root');

const error = require('../middlewares/error');

const app = express();

app.use(cors());
app.use(express.json());

app.use(root);

app.use(error);

module.exports = app;
