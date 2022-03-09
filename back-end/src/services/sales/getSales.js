const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');

module.exports = async (userId) => {
    const getSales = await Models.sales.findAll({ where: { userId } });
    return { 
      status: StatusCodes.OK, message: getSales,
     };
};
