const { progressService } = require('../services');

exports.getOne = async (req, res) => {
  const { id } = req.params;
  const result = await progressService.getOne(id);
  res.status(200).json(result);
};

exports.getAll = async (_req, res) => {
  const result = await progressService.getAll();
  res.status(200).json(result);
};
