const authController = require('./authController');
const globalErrorHandler = require('./errorController');
const userController = require('./userController');

module.exports = {
  authController,
  globalErrorHandler,
  userController,
};
