const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');

module.exports = async (user_id) => {
    const getSales = await Models.sales.findAll({where: { user_id }});
    console.log('aqui');

    return { 
      status: StatusCodes.OK, message: getSales,
     };
};
