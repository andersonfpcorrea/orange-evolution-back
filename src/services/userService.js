const { Users } = require('../models');

exports.findUser = async ({ email }) => {
  const result = await Users.findOne({
    where: {
      email,
    },
  });
  return result;
};
