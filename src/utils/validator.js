const Joi = require('joi');

/**
 * @param {string} email
 * @param {string} password
 * @returns
 */
exports.validateLogin = (email, password) => {
  const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().required(),
  });

  return schema.validate({ email, password });
};
