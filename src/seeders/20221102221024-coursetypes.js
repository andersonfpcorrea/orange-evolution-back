'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) =>
    queryInterface.bulkInsert(
      'course_types',
      [
        {
          id: 1,
          title: 'Apostila',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 2,
          title: 'Artigo',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 3,
          title: 'Curso',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 4,
          title: 'Livro',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 5,
          title: 'Vídeo',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 6,
          title: 'Live',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
      ],
      {}
    ),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('course_types', null, {}),
};
