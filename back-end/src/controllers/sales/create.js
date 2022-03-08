const salesServices = require('../../services/sales');
 
module.exports = async (req, res, _next) => {
  const sales = req.body;
  const userId = req.user.id;

  const result = await salesServices.create(sales, userId);

  return res.status(result.status).json(result.message);
};
