const router = require('express').Router();
const { courseController } = require('../controllers');

router.get('/', courseController.getAllCourses);

router.get('/:id', courseController.getCourseById);

module.exports = router;