const userServices = require('../../services/users');

module.exports = async (req, res, _next) => {
    const user = req.body;
  
    const result = await userServices.create(user);

    return res.status(result.status).json(result.message);
};
