const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');

module.exports = async (_req, res, _next) => {
    const result = await Models.products.findAll();
    
    return res.status(StatusCodes.OK).json(result);
  };
