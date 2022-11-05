const authController = require('./authController');
const globalErrorHandler = require('./errorController');
const userController = require('./userController');
const roadmapController = require('./roadmapController');
const courseController = require('./courseController');

module.exports = {
  authController,
  globalErrorHandler,
  userController,
  roadmapController,
  courseController,
};
