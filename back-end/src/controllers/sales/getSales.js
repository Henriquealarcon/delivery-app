const { getSales } = require('../../services/sales');

const getAllSales = async (req, res, _next) => {
  const { id } = req.params;
    const result = await getSales(id);
    return res.status(result.status)
      .json(result);
  };
  
  module.exports = getAllSales;