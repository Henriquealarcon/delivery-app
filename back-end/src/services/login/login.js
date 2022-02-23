const { StatusCodes } = require('http-status-codes');
const md5 = require('md5');
const Users = require('../../database/models/users');
const { INVALID_ENTRIES, INVALID_FIELDS } = require('../../../utils/errorSet');
const { genToken } = require('../authentication/authentication');
const { loginValidation } = require('../../../utils/validations/login');

module.exports = async (user) => {
  const validationError = loginValidation(user);

  console.log('login service');

  if (validationError) {
    return INVALID_ENTRIES(validationError.message);
  }

  let findUserByEmail = await Users.findOne({ where: { email: user.email } });
  findUserByEmail = findUserByEmail ? findUserByEmail.dataValues : null;

  if (!findUserByEmail || findUserByEmail.password !== user.password) {
    return INVALID_FIELDS;
  }

  console.log(findUserByEmail);
  
  const passwordHash = md5(user.password);

  const userWithHash = { ...findUserByEmail, password: passwordHash };

  const token = genToken(userWithHash);

  return { status: StatusCodes.OK, message: token };
};