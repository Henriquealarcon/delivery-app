const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');

module.exports = async () => {
    const getProducts = await Models.products.findAll();
    console.log('aqui');

    return { 
      status: StatusCodes.OK, message: getProducts,
     };
};
