const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const helmet = require('helmet');
const cors = require('cors');

const { authController, globalErrorHandler } = require('./controllers');

const {
  userRouter,
  roadmapRouter,
  progressRouter,
  courseRouter,
} = require('./routes');

const app = express();

// Development log
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Allow cross origin request. It sets "Access-Controll-Allow-Origin" to "*"
app.use(cors());

// Configure response to OPTIONS http requests:
app.options('*', cors());

// Set security HTTP headers
app.use(helmet());

// Limit requests from the same IP
const limiter = rateLimit({
  max: 100, // Max requests per hour per IP
  windowMs: 60 * 60 * 1000, // Time window in ms for max requests
  message: 'Too many requests from this IP. Please try again in an hour',
});
app.use(limiter);

// Body parser with body size limit
app.use(express.json({ limit: '10kb' }));

// Data sanitization against cross-site scripting (XSS) attacks
app.use(xss());

// Compression of response data
app.use(compression());

// Routes
app.use('/login', authController.login);
app.use('/signup', authController.signup);
app.use('/users', userRouter);
app.use('/roadmaps', roadmapRouter);
app.use('/courses', courseRouter);
app.use('/progress', progressRouter);

// Error handler
app.use(globalErrorHandler);

module.exports = app;
