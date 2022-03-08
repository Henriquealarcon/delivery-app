const { StatusCodes } = require('http-status-codes');

module.exports = (err, _req, res, _next) => {
  console.error(err);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err.message);
};
