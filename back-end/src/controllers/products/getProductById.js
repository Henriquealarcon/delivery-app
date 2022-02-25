const getProductsById = require('../../services/products/getProductById');

const productsFound = async (req, res, _next) => {
    const { id } = req.params;
    const result = await getProductsById(id);

    return res.status(result.status)
      .json(result.message);
  };
  
  module.exports = { productsFound };
