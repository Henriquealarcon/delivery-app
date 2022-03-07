const Joi = require('joi');

const salesSchema = Joi.object({
    sellerId: Joi.number().integer().required(),
    totalPrice: Joi.number().precision(2).required(),
    deliveryAddress: Joi.string().required(),
    deliveryNumber: Joi.number().integer().required(),
    status: Joi.string().required(),
    productsSold: Joi.required(),
});

const validationError = (sales) => salesSchema.validate(sales).error;

module.exports = {
  salesValidation: (sales) =>
    (validationError(sales) ? validationError(sales).details[0] : null),
};
