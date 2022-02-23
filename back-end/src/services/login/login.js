const { StatusCodes } = require('http-status-codes');
const md5 = require('md5');
const Models = require('../../database/models');
const { INVALID_ENTRIES, USER_NOT_EXIST } = require('../../../utils/errorSet');
const { genToken } = require('../authentication/authentication');
const { loginValidation } = require('../../../utils/validations/login');

module.exports = async (user) => {
  const validationError = loginValidation(user);
  const passwordHash = md5(user.password);

  if (validationError) {
    return INVALID_ENTRIES(validationError.message);
  }

  let findUserByEmail = await Models.users.findOne({ where: { email: user.email } });
  findUserByEmail = findUserByEmail ? findUserByEmail.dataValues : null;

  if (!findUserByEmail || findUserByEmail.password !== passwordHash) {
    return USER_NOT_EXIST;
  }

  console.log(findUserByEmail);

  const userWithHash = { ...findUserByEmail, password: passwordHash };

  const token = genToken(userWithHash);

  return { status: StatusCodes.OK,
     message: { token, users: { ...findUserByEmail, password: null } } };
};