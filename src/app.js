const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
//const cors = require('cors');

const { authController, globalErrorHandler } = require('./controllers');
const { userRouter } = require('./routes');

const app = express();

//app.use(cors()); // TODO: Configurar cors antes do deploy

// Development log
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/login', authController.login);

app.use('/users', userRouter);

app.use(globalErrorHandler);

module.exports = app;
