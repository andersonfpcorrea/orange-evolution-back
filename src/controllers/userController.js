const { userService } = require('../services');
const { AppError } = require('../utils');

exports.getUsers = async (_req, res) => {
  const result = await userService.findAll();
  res.status(200).json(result);
};

exports.getUser = async (req, res) => {
  const { id } = req.params;
  const result = await userService.findById(id);
  res.status(200).json(result);
};

exports.update = async (req, res) => {
  const { firstName, lastName, email, password, roadmap, id } = req.body;
  console.log(firstName, lastName, email, password, roadmap, id);
  if (!firstName || !lastName || !email || !password || !roadmap)
    throw new AppError(400, 'Required fields missing');
  await userService.update({
    firstName,
    lastName,
    email,
    password,
    roadmap,
    id,
  });
  const result = await userService.findUser({ email, password });
  res.status(200).json(result);
};
