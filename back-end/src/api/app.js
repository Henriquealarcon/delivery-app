const express = require('express');
const path = require('path');
const cors = require('cors');

const root = require('../controllers/root');
const { errorHandler } = require('../middlewares');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/images/:name', async (req, res, _next) => {
    const { name } = req.params;
    res.sendFile(path.join(__dirname, '../../public/images', name));
});

app.use(root);

app.use(errorHandler);

module.exports = app;
