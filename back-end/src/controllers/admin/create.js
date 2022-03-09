const adminServices = require('../../services/admin');

module.exports = async (req, res, _next) => {
    const user = req.body;
  
    const result = await adminServices.create(user);

    return res.status(result.status).json(result.message);
  };
