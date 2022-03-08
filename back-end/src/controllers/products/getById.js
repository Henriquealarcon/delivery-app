const productsServices = require('../../services/products');

module.exports = async (req, res, _next) => {
    const { id } = req.params;
    const result = await productsServices.getById(id);

    return res.status(result.status).json(result.message);
  };
