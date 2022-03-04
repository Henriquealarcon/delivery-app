const { StatusCodes } = require('http-status-codes');
const path = require('path');
const fs = require('fs');
const { verifyToken } = require('../services/authentication/authentication');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const archive = path.join(__dirname, '..', '..', '..', 'jwt.evaluation.key');

  const JWT_SECRET = fs.readFileSync(archive, {
    encoding: 'utf8',
    flags: 'string',
  }).trim() || 'grupo21senhasecreta';

  if (!authorization) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  }
  
  const user = verifyToken(authorization, JWT_SECRET);

  if (!user) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }

  req.user = user;
  next();
};