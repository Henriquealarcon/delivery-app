const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');

module.exports = async (id) => {
    const getSales = await Models.sales.findAll({ where: { userId: id } });

    if (getSales.length === 0) {
    const getSales = await Models.sales.findAll({ where: { sellerId: id } });
    
    return { 
      status: StatusCodes.OK, message: getSales,
     };
    }

    return { 
      status: StatusCodes.OK, message: getSales,
     };
};
