const { StatusCodes } = require('http-status-codes');
const md5 = require('md5');
const Models = require('../../database/models');
const { INVALID_ENTRIES, ALREADY_REGISTERED } = require('../../../utils/errorSet');
const { registerValidation } = require('../../../utils/validations/register');
const { genToken } = require('../auth/auth');

module.exports = async (user) => {
    const passwordHash = md5(user.password);
    const validationError = registerValidation(user);
    const { name, email, role } = user;
    
    if (validationError) {
        return INVALID_ENTRIES(validationError.message);
      }

    const findUser = await Models.users.findOne({ where: { email: user.email } });

    if (findUser) {
        return ALREADY_REGISTERED;
    }

    const userWithHash = { ...user, password: passwordHash };

  const token = genToken(userWithHash);

    const newRegister = await Models.users.create({ name, email, password: passwordHash, role });
    return { status: StatusCodes.CREATED,
        message: { token, users: newRegister.dataValues } };
};
