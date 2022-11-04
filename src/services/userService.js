const { Users } = require('../models');

exports.findUser = async ({ email }) => {
  const result = await Users.findOne({
    where: {
      email,
    },
  });
  return result;
};

exports.findAll = async () => Users.findAll();

exports.findById = async (id) => Users.findOne({ where: { id } });
