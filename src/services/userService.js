const { Users } = require('../models');

exports.findUser = async ({ email, password }) => {
  const result = await Users.findOne({
    where: {
      email,
      password,
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

exports.update = async ({
  firstName,
  lastName,
  email,
  password,
  currentRoadmap,
  id,
}) =>
  Users.update(
    { firstName, lastName, email, password, currentRoadmap },
    {
      where: { id },
    }
  );
