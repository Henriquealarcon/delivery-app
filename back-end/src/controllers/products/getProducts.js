const getProducts = require('../../services/products/getProducts');

const getAllProducts = async (req, res, _next) => {
    const result = await getProducts();
    
    return res.status(result.status)
      .json(result);
  };
  
  module.exports = getAllProducts;
