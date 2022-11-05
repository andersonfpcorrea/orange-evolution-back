const { userService } = require('../services');

exports.getUsers = async (_req, res) => {
  const result = await userService.findAll();
  res.status(200).json(result);
};

exports.getUser = async (req, res) => {
  const { id } = req.params;
  const result = await userService.findById(id);
  res.status(200).json(result);
};
