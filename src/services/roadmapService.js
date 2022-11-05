const { Roadmaps } = require('../models');

exports.getAll = async () => Roadmaps.findAll();

exports.getOne = async (id) => Roadmaps.findOne({ where: { id } });
