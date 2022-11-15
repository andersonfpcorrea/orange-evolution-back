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
  roadmap,
  id,
}) =>
  Users.update(
    { firstName, lastName, email, password, currentRoadmap: roadmap },
    {
      where: { id },
    }
  );

exports.createUser = async (userData) => {
  const { firstName, lastName, email, password, roadmap } = userData;
  const [user, created] = await Users.findOrCreate({
    where: { email },
    defaults: {
      firstName,
      lastName,
      email,
      password,
      currentRoadmap: roadmap,
      progress: 1,
    },
  });
  if (created) return { success: user };
  return { fail: 'User already exists in data base' };
};
