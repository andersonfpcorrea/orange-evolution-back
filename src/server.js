const app = require('./app');

app.listen(process.env.API_PORT, () =>
  console.log('server running on port 3001')
);
