const loginServices = require('../../services/login/login');
 
const login = async (req, res, _next) => {
  const user = req.body;

  console.log('login controller');

  const result = await loginServices(user);

  return res.status(result.status)
    .json(result.message.length < 100
      ? { message: result.message }
      : { token: result.message });
};

module.exports = login;