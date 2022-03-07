const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');
const { INVALID_ENTRIES } = require('../../../utils/errorSet');
const { salesValidation } = require('../../../utils/validations/sales');

module.exports = async (sales, userId) => {
    const validationError = salesValidation(sales);
    const { productsSold } = sales;
    
    if (validationError) {
        return INVALID_ENTRIES(validationError.message);
      }

    const salesCreate = await Models.sales.create({ ...sales, userId });

    const { saleId } = salesCreate;
    
    productsSold.forEach(({ productId, quantity }) => Models.salesProduct
        .create({ saleId, productId, quantity }));

    return { status: StatusCodes.CREATED,
        message: salesCreate };
};
