const authController = require('./authController');
const globalErrorHandler = require('./errorController');
const userController = require('./userController');
const roadmapController = require('./roadmapController');

module.exports = {
  authController,
  globalErrorHandler,
  userController,
  roadmapController,
};
