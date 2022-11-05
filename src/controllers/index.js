const authController = require('./authController');
const globalErrorHandler = require('./errorController');
const userController = require('./userController');
const roadmapController = require('./roadmapController');
const courseController = require('./courseController');
const progressController = require('./progressController');

module.exports = {
  authController,
  globalErrorHandler,
  userController,
  roadmapController,
  courseController,
  progressController,
};
