const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');

module.exports = async (_req, res, _next) => {  
    const result = await Models.users.findAll({ where: { role: 'seller' } });

    return res.status(StatusCodes.OK).json(result);
};
