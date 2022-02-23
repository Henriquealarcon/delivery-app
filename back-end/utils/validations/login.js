const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const validationError = (user) => loginSchema.validate(user).error;

module.exports = {
  loginValidation: (user) =>
    (validationError(user) ? validationError(user).details[0] : null),
};