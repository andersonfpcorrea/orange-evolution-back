// require('dotenv').config();

const config = {
  username: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE || 'orangedb_dev',
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT || '3306',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
