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
          photo: 'https://i.ibb.co/PwwMdYT/anderson.jpg',
          progress: 10,
          currentRoadmap: 'Desenvolvimento Full Stack',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 2,
          firstName: 'Heloisa',
          lastName: 'Moraes',
          email: 'heloisa@gmail.com',
          password: '123456',
          photo: 'https://i.ibb.co/q56m6R9/heloisa.jpg',
          progress: 25,
          currentRoadmap: 'Desenvolvimento Full Stack',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 3,
          firstName: 'Kamila',
          lastName: 'Pantoja',
          email: 'kamila@gmail.com',
          password: '123456',
          photo: 'https://i.ibb.co/pP3gY0h/kamila.jpg',
          progress: 60,
          currentRoadmap: 'Desenvolvimento Full Stack',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 4,
          firstName: 'Laura',
          lastName: 'Morato',
          email: 'laura@gmail.com',
          password: '123456',
          photo: 'https://i.ibb.co/yQV0N3h/laura.jpg',
          progress: 50,
          currentRoadmap: 'Desenvolvimento Full Stack',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 5,
          firstName: 'Lia',
          lastName: 'Sousa',
          email: 'liasousa@email.com',
          password: '123456',
          photo: 'https://i.ibb.co/rMxyrPq/Lia.png',
          progress: 30,
          currentRoadmap: 'Desenvolvimento Full Stack',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
      ],
      {}
    ),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};
