const { courseService } = require('../services');

exports.getAllCourses = async (req, res) => {
  const { title, roadmap, type } = req.query;
  let result;
  if (!title && !roadmap && !type) result = await courseService.findAll();
  else if (type && roadmap)
    result = await courseService.findByRoadmapAndType(roadmap, type);
  else if (title && !roadmap) result = await courseService.findAll(title);
  else if (!title && roadmap)
    result = await courseService.findByRoadmap(roadmap);
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
