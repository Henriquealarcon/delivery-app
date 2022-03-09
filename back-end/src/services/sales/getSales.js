const { StatusCodes } = require('http-status-codes');
const { sequelize } = require('../../database/models');
const Models = require('../../database/models');

const attributes = {
  include: [
    [sequelize.fn('DATE_FORMAT',
      sequelize.col('sale_date'), '%d/%m/%Y'), 'saleDate'],
  ],
};

module.exports = async (id) => {
    const getSales = await Models.sales.findAll({ where: { userId: id }, attributes });

    if (getSales.length === 0) {
    const getSalesFromSeller = await Models.sales.findAll({ where: { sellerId: id }, attributes });
    
    return { 
      status: StatusCodes.OK, message: getSalesFromSeller,
     };
    }

    return { 
      status: StatusCodes.OK, message: getSales,
     };
};
