const { AppError, validator, jwt } = require('../utils');
const { userService } = require('../services');

/**
 * @param {string} email
 * @param {string} password
 */
const validateCredentials = async (email, password) => {
  const { error } = validator.validateLogin(email, password);

  if (error) throw new AppError(400, 'Some required fields are missing');

  const result = await userService.findUser({ email, password });

  if (!result) throw new AppError(400, 'Invalid fields');

  return result;
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const { id } = await validateCredentials(email, password);

  const token = jwt.generateJwt(id);

  res.status(200).json({ token });
};
