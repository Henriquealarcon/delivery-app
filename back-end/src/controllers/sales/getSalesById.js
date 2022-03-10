const { getSalesById } = require('../../services/sales');

const getAllSales = async (req, res, _next) => {
  const { id } = req.params;
    const result = await getSalesById(id);
    return res.status(result.status)
      .json(result.message);
  };

  module.exports = getAllSales;