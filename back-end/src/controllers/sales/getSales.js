const getSales = require('../../services/sales/getSales');

const getAllSales = async (req, res, _next) => {
    const result = await getSales();
    
    return res.status(result.status)
      .json(result);
  };
  
  module.exports = getAllSales;