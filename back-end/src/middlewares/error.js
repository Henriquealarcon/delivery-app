const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, _req, res, _next) => {
  console.error(err);

  console.log('era pra estar aqui');

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err.message);
};

module.exports = errorHandler;