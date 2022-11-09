const { courseService } = require('../services');

exports.getAllCourses = async (req, res) => {
  const { q } = req.query;
  const result = await courseService.findAll(q);
  res.status(200).json(result);
};

exports.getOneCourse = async (_req, res) => {
  const result = await courseService.findOne();
  res.status(200).json(result);
};

exports.getCourseById = async (req, res) => {
  const { id } = req.params;
  const result = await courseService.findById(id);
  res.status(200).json(result);
};
