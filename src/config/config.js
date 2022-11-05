// require('dotenv').config();

const config = {
  host: process.env.MYSQLHOST || process.env.MYSQL_HOST,
  port: process.env.MYSQLPORT || '3306',
  database: process.env.MYSQLDATABASE || 'orangedb_dev',
  username: process.env.MYSQLUSER || process.env.MYSQL_USER,
  password: process.env.MYSQLPASSWORD || process.env.MYSQL_PASSWORD,
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
  dev: {
    ...config,
  },
};
