const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');

module.exports = async (id) => {
    const getSales = await Models.sales.findAll({ where: { userId: id } });

    if (getSales.length === 0) {
    const getSalesFromSeller = await Models.sales.findAll({ where: { sellerId: id } });
    
    return { 
      status: StatusCodes.OK, message: getSalesFromSeller,
     };
    }

    return { 
      status: StatusCodes.OK, message: getSales,
     };
};
