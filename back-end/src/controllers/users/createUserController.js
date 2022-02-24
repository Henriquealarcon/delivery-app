const create = require('../../services/users/create');

const createUser = async (req, res, _next) => {
    const user = req.body;
  
    const result = await create(user);
  console.log(result);
    return res.status(result.status)
      .json(result.message.length < 100
        ? { message: result.message }
        : { data: result });
  };
  
  module.exports = createUser;
