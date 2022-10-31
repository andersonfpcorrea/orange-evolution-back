const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors()); // TODO: Configurar cors antes do deploy

// Development log
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

module.exports = app;
