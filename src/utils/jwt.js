const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const configLogin = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

/**
 * @param {number} id
 * @return {string}
 */
exports.generateJwt = (id) => jwt.sign({ id }, secret, configLogin);

/**
 * @param {string} token
 * @returns {{id: number, iat:number, exp:number} | null}
 */
exports.verifyJwt = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    console.log(err.message);
    return null;
  }
};
