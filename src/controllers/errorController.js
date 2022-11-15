module.exports = (error, _req, res, _next) => {
  console.log(error.message);
  const err = error;
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Something wrong happened';

  res.status(err.statusCode).json({ message: err.message });
};
