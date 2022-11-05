'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) =>
    queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          firstName: 'Anderson',
          lastName: 'Corrêa',
          email: 'anderson@gmail.com',
          password: '123456',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 2,
          firstName: 'Heloisa',
          lastName: 'Moraes',
          email: 'heloisa@gmail.com',
          password: '1234567',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 3,
          firstName: 'Kamila',
          lastName: 'Pantoja',
          email: 'kamila@gmail.com',
          password: '12345678',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 4,
          firstName: 'Laura',
          lastName: 'Morato',
          email: 'laura@gmail.com',
          password: '123456789',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
      ],
      {}
    ),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
