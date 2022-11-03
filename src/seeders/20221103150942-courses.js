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
        {
          id: 4,
          nameCourse: 'Culture Code',
          type: 6,
          author: 2,
          length: '01:22:25',
          status: 1,
          url: 'https://www.youtube.com/watch?v=n0KH8dQSrv0',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 5,
          nameCourse: 'Product Owner e Scrum Master',
          type: 6,
          author: 2,
          length: '01:13:33',
          status: 1,
          url: 'https://www.youtube.com/watch?v=_ku7bY5GtIY',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 6,
          nameCourse: 'Product Owner',
          type: 2,
          author: 3,
          length: '00:08:00',
          status: 1,
          url: 'https://www.cursospm3.com.br/product-owner-o-que-faz-salario-habilidades/',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 7,
          nameCourse: 'O que é um scrum master?',
          type: 2,
          author: 4,
          length: '00:06:00',
          status: 1,
          url: 'https://www.atlassian.com/br/agile/scrum/scrum-master',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 8,
          nameCourse: 'A Day in the Life of a Scrum Master',
          type: 2,
          author: 5,
          length: '00:05:00',
          status: 1,
          url: 'https://resources.scrumalliance.org/Article/day-life-scrum-master',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 8,
          nameCourse: 'Com grandes códigos, vem grandes responsabilidades',
          type: 6,
          author: 2,
          length: '01:25:20',
          status: 1,
          url: 'https://www.youtube.com/watch?v=N78-5gHLzbE',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 9,
          nameCourse:
            'Como se tornar um desenvolvedor full-stack no próximo ano',
          type: 2,
          author: 6,
          length: '00:05:00',
          status: 1,
          url: 'https://www.alura.com.br/artigos/como-se-tornar-um-desenvolvedor-full-stack-no-proximo-ano',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 9,
          nameCourse: 'Mas o que é UX?',
          type: 2,
          author: 1,
          length: '00:04:00',
          status: 1,
          url: 'https://medium.com/orangejuicefc/mas-o-que-%C3%A9-ux-330edd9c6887',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 10,
          nameCourse:
            'UX e UI: conheça as semelhanças e diferenças entre ambos',
          type: 2,
          author: 6,
          length: '00:05:00',
          status: 1,
          url: 'https://www.alura.com.br/artigos/ux-e-ui-conheca-as-semelhancas-e-diferencas-entre-ambos',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 11,
          nameCourse: 'UX Rainbow: como nossa equipe trabalha',
          type: 6,
          author: 2,
          length: '01:25:58',
          status: 1,
          url: 'https://www.youtube.com/watch?v=_RsYz_iKP4k',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 12,
          nameCourse: 'Qual o papel do QA em uma equipe?',
          type: 2,
          author: 1,
          length: '00:04:00',
          status: 1,
          url: 'https://medium.com/orangejuicefc/qual-o-papel-do-qa-em-uma-equipe-8e8147be28dd',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 13,
          nameCourse: 'Selo Q.A. de qualidade',
          type: 6,
          author: 2,
          length: '01:23:10',
          status: 1,
          url: 'https://www.youtube.com/watch?v=pP5M7lf6JmQ',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 14,
          nameCourse: 'O que é "stakeholder"',
          type: 2,
          author: 3,
          length: '00:02:00',
          status: 1,
          url: 'https://www.cursospm3.com.br/glossario/stakeholder/',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 15,
          nameCourse:
            'Leandro Karnal em O Futuro da Liderança - BTG Bankers Experience 2021',
          type: 6,
          author: 7,
          length: '00:56:33',
          status: 1,
          url: 'https://www.youtube.com/watch?v=b9A34yUvzEc',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 16,
          nameCourse:
            'Orange Juice Cast #17 - Scrum: uma revolução nas terras da T.I.',
          type: 5,
          author: 1,
          length: '00:57:52',
          status: 1,
          url: 'https://www.youtube.com/watch?v=TmTupAe14T4',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 17,
          nameCourse: 'Fundamentos iniciais da Metodologia Ágil',
          type: 2,
          author: 1,
          length: '00:04:00',
          status: 1,
          url: 'https://medium.com/orangejuicefc/fundamento-iniciais-da-metodologia-%C3%A1gil-a4f3f0a3f025',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 18,
          nameCourse: 'Manifesto Ágil: a Bíblia das Metodologias Ágeis',
          type: 2,
          author: 1,
          length: '00:05:00',
          status: 1,
          url: 'https://medium.com/orangejuicefc/manifesto-%C3%A1gil-a-b%C3%ADblia-das-metodologias-%C3%A1geis-1a4ec9f220a',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 19,
          nameCourse: 'Squads - o que é e como funciona?',
          type: 2,
          author: 2,
          length: '00:06:00',
          status: 1,
          url: 'https://blog.fcamara.com.br/squads-o-que-e-e-como-funciona/',
          roadmap: 4,
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 20,
          nameCourse: 'MVP: o que é e como construir um Produto Mínimo Viável',
          type: 2,
          author: 3,
          length: '00:08:00',
          status: 1,
          url: 'https://www.cursospm3.com.br/blog/mvp-o-que-e-e-como-construir-um-produto-minimo-viavel/',
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
