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

  const newSale = await Models.sales.create({ ...sales, userId });

  const { id: saleId } = newSale;
  
  productsSold.forEach(({ productId, quantity }) =>
    Models.salesProducts.create({ saleId, productId, quantity }));

  return { status: StatusCodes.CREATED, message: newSale };
};
