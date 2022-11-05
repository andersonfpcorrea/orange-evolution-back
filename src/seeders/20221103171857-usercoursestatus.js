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
        {
          idUser: 1,
          idCourse: 2,
          idStatus: 2,
          favoriteCourse: false,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          idUser: 1,
          idCourse: 3,
          idStatus: 1,
          favoriteCourse: true,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          idUser: 2,
          idCourse: 4,
          idStatus: 1,
          favoriteCourse: true,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          idUser: 2,
          idCourse: 2,
          idStatus: 2,
          favoriteCourse: true,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          idUser: 3,
          idCourse: 1,
          idStatus: 1,
          favoriteCourse: true,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          idUser: 3,
          idCourse: 2,
          idStatus: 1,
          favoriteCourse: true,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          idUser: 3,
          idCourse: 3,
          idStatus: 1,
          favoriteCourse: false,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          idUser: 3,
          idCourse: 4,
          idStatus: 2,
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
