'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) =>
    queryInterface.bulkInsert(
      'courses',
      [
        {
          id: 1,
          nameCourse:
            'Guia definitivo de como migrar para UX Design: 5 passos para virar um UX',
          type: 2,
          author: 1,
          length: '00:06:00',
          status: 1,
          url: 'https://medium.com/orangejuicefc/guia-definitivo-de-como-migrar-para-ux-design-5-passos-para-virar-um-ux-1675f71796b4',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 2,
          nameCourse:
            'Design Thinking e carreira: como migrei de Psicologia para UX Design',
          type: 2,
          author: 1,
          length: '00:05:00',
          status: 1,
          url: 'https://medium.com/orangejuicefc/design-thinking-e-carreira-como-migrei-de-psicologia-para-ux-design-cb79e8b47df5',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 3,
          nameCourse:
            'De advogada a desenvolvedora: um relato sobre minha migração de carreira',
          type: 2,
          author: 1,
          length: '00:06:00',
          status: 1,
          url: 'https://medium.com/orangejuicefc/de-advogada-a-desenvolvedora-um-relato-sobre-minha-migra%C3%A7%C3%A3o-de-carreira-e-dicas-para-quem-pretende-45ad5df833b5',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
      ],
      {}
    ),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('courses', null, {}),
};
