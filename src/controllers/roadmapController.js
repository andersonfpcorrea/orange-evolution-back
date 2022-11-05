const { roadmapService } = require('../services');

exports.getAll = async (_req, res) => {
  const result = await roadmapService.getAll();
  res.status(200).json(result);
};
