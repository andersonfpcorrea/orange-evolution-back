const { roadmapService } = require('../services');

exports.getAll = async (_req, res) => {
  const result = await roadmapService.getAll();
  res.status(200).json(result);
};

exports.getOne = async (req, res) => {
  const { id } = req.params;
  const result = await roadmapService.getOne(id);
  res.status(200).json(result);
};
