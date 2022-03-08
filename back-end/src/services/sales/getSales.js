const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');

module.exports = async () => {
    const getSales = await Models.sales.findAll();
    console.log('aqui');

    return { 
      status: StatusCodes.OK, message: getSales,
     };
};
