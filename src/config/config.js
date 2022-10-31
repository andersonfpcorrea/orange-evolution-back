// require('dotenv').config();

const config = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT || '3306',
  database: process.env.MYSQL_DATABASE || 'orangedb_dev',
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
};

module.exports = {
  development: {
    ...config,
  },
  test: {
    ...config,
  },
};
