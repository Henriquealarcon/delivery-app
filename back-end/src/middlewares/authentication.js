const { StatusCodes } = require('http-status-codes');
const Services = require('../services/authentication/authentication');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  const user = Services.auth.verifyToken(authorization);

  if (!user) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }

  req.user = user;
  next();
};