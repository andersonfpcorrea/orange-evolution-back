const app = require('./app');

process.on('uncaughtException', (err) => {
  console.log('Uncaught exception. Shutting down...');
  console.log(err.name, err.message);
});

const server = app.listen(process.env.API_PORT, () =>
  console.log(`Server running on port ${process.env.API_PORT}`)
);

process.on('unhandledRejection', (err) => {
  console.log('Unhandled rejection. Shutting down...');
  console.log(err.name, err.message);
  server.close(() => process.exit(1));
});

process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down...');
  server.close(() => console.log('Process terminated'));
});
