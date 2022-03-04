require('dotenv').config();
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const archive = path.join(__dirname, '..', '..', '..', 'jwt.evaluation.key');

const JWT_SECRET = fs.readFileSync(archive, {
  encoding: 'utf8',
  flags: 'string',
}).trim() || 'grupo21senhasecreta';

const JWT_CONFIG = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const genToken = (data) => {
  const token = jwt.sign({ data }, JWT_SECRET, JWT_CONFIG);

  return token;
};

const verifyToken = (token) => {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = decoded.data;

    return user;
};

module.exports = {
  genToken,
  verifyToken,
};