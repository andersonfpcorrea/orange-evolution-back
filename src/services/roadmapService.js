const { Roadmaps } = require('../models');

exports.getAll = async () => {
  const roadmaps = await Roadmaps.findAll();
  const quantity = roadmaps.length;
  return { quantity, roadmaps };
};

exports.getOne = async (id) => Roadmaps.findOne({ where: { id } });
