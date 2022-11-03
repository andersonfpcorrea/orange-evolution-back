'use strict';
// SELECT * FROM orangedb_dev.courses
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('courses',
    [
      {
        id: 1,
        nameCourse: 'Migração de Carreira',
        type: 2,
        author: 1,
        length: '00:06:00',
        status: 1,
        url: 'https://medium.com/orangejuicefc/guia-definitivo-de-como-migrar-para-ux-design-5-passos-para-virar-um-ux-1675f71796b4',
        roadmap: 1,
        createdAt: '2022-11-02 15:00:30',
        updatedAt: '2022-11-02 16:00:30',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('courses', null, {}),
};