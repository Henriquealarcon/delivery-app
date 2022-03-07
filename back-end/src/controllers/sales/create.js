const salesService = require('../../services/sales/create');
 
const create = async (req, res, _next) => {
  const sales = req.body;
  const userId = req.user;
// console.log(userId);
  const result = await salesService(sales, userId);

  return res.status(result.status)
  .json(result.message);
};

module.exports = create;
