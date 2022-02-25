const create = require('../../services/users/create');

const createUser = async (req, res, _next) => {
    const user = req.body;
  
    const result = await create(user);

    return res.status(result.status)
    .json(result.message);
  };
  
  module.exports = createUser;
