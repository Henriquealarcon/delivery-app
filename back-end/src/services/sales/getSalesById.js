const { StatusCodes } = require('http-status-codes');
const sequelize = require('sequelize');
const Models = require('../../database/models');

const attributes = {
    include: [
      [sequelize.fn('DATE_FORMAT',
       sequelize.col('sale_date'), '%d/%m/%Y'), 'saleDate'],
    ],
  };

module.exports = async (id) => {
  const getSalesById = await Models.sales.findByPk(id, { 
    attributes,
    include: [
  { model: Models.users, as: 'seller', attributes: { exclude: ['email', 'password'] } },
  { model: Models.users, as: 'user', attributes: { exclude: ['email', 'password'] } },
  { model: Models.products, as: 'products', through: { attributes: ['quantity'] } },
] });
    return { 
      status: StatusCodes.OK, message: getSalesById,
     };
};