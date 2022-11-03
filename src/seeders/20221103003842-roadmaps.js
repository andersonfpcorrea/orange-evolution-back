'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('roadmaps',
    [
      {
        id: 1,
        title: 'Desenvolvimento Full Stack',
        createdAt: '2022-11-02 15:00:30',
        updatedAt: '2022-11-02 16:00:30',
      },
      {
        id: 2,
        title: 'UX/UI Design',
        createdAt: '2022-11-02 15:00:30',
        updatedAt: '2022-11-02 16:00:30',
      },
      {
        id: 3,
        title: 'Quality Assurance',
        createdAt: '2022-11-02 15:00:30',
        updatedAt: '2022-11-02 16:00:30',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('roadmaps', null, {}),
};