const { Users } = require('../models');

exports.findUser = async ({ email }) => {
  const result = await Users.findOne({
    where: {
      email,
    },
  });
  return result;
};

exports.findAll = async () => {
  const users = await Users.findAll();
  const quantity = users.length;
  return { quantity, users };
};

exports.findById = async (id) => Users.findOne({ where: { id } });
