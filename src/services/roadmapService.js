const { Roadmaps } = require('../models');

exports.getAll = async () => Roadmaps.findAll();
