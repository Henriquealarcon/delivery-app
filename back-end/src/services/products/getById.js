const { StatusCodes, USER_NOT_EXIST } = require('http-status-codes');
const Models = require('../../database/models');

module.exports = async (id) => {
    const products = await Models.products.findByPk(id); 

    if (!products) {
        return USER_NOT_EXIST;
    }

    return { status: StatusCodes.OK, message: products };
};
