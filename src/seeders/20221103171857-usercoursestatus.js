'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) =>
    queryInterface.bulkInsert(
      'users_courses_status',
      [
        {
          idUser: 1,
          idCourse: 1,
          idStatus: 1,
          favoriteCourse: true,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
      ],
      {}
    ),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('users_courses_status', null, {}),
};
