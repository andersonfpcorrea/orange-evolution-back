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

  if (!result) throw new AppError(400, 'Invalid password or email');

  return result;
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const { id, firstName, lastName, currentRoadmap, photo, progress } =
    await validateCredentials(email, password);

  const token = jwt.generateJwt(id);

  res.status(200).json({
    token,
    user: { id, firstName, lastName, currentRoadmap, photo, email, progress },
  });
};

exports.signup = async (req, res) => {
  const { firstName, lastName, email, password, roadmap } = req.body;
  if (!firstName || !lastName || !email || !password || !roadmap)
    throw new AppError(400, 'Some fields missing');
  const { success, fail } = await userService.createUser({
    firstName,
    lastName,
    email,
    password,
    roadmap,
  });
  if (fail) throw new AppError(404, fail);
  res.status(201).json(success);
};
