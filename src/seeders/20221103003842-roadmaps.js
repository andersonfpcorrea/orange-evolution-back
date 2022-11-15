'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) =>
    queryInterface.bulkInsert(
      'roadmaps',
      [
        {
          id: 1,
          title: 'Desenvolvimento Full Stack',
          image: 'https://i.ibb.co/bgYscGr/fullstack.jpg',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 2,
          title: 'UX/UI Design',
          image: 'https://i.ibb.co/2yWdct4/UI-UX-Design.jpg',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 3,
          title: 'Quality Assurance',
          image: 'https://i.ibb.co/fN63vKc/body-quality-assurance-1.jpg',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 4,
          title: 'O início',
          image: 'https://i.ibb.co/VBnq5NN/Iniciando-uma-nova-jornada.jpg',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 5,
          title: 'Opcional',
          image: 'https://i.ibb.co/LCvLtzd/opcional-1.jpg',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
      ],
      {}
    ),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('roadmaps', null, {}),
};
