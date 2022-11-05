const { courseService } = require('../services');

exports.getAllCourses = async (_req, res) => {
    const result = await courseService.findAll();
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

