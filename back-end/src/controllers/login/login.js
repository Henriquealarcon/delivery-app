const loginServices = require('../../services/login');
 
module.exports = async (req, res, _next) => {
  const user = req.body;

  const result = await loginServices.login(user);

  return res.status(result.status)
  .json(result.message);
};
