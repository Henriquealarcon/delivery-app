const Joi = require('joi');

const minCaracterPassword = 6;
const minCharacterName = 12;
const loginSchema = Joi.object({
  // tlds precisa ser setado como falso para não quebrar a página. Referêcia: https://github.com/sideway/joi/issues/2390.
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(minCaracterPassword).required(),
});

const registerSchema = Joi.object({
  name: Joi.string().min(minCharacterName).required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(minCaracterPassword).required(),
  role: Joi.string(),
});

module.exports = {
  loginValidation: (login) => loginSchema.validate(login),
  registerValidation: (register) => registerSchema.validate(register),
};
