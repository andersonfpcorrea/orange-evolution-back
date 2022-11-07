'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) =>
    queryInterface.bulkInsert(
      'content_authors',
      [
        // ============== autores da trilha de DEV FULLSTACK
        {
          id: 1,
          author: 'Orange Juice',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 2,
          author: 'Grupo FCamara',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 3,
          author: 'PM3',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 4,
          author: 'Atlassian',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 5,
          author: 'Scrum Alliance',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 6,
          author: 'Alura',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 7,
          author: 'BTG Pactual',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 8,
          author: 'Fernanda de Oliveira',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 9,
          author: 'Udemy',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 10,
          author: 'Curso em Vídeo',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 11,
          author: 'Windows',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 12,
          author: 'Amanda Vilela',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 13,
          author: 'Michelli Brito',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 14,
          author: 'Cursa',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 15,
          author: 'Training Center',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 16,
          author: 'Neoteric',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 17,
          author: 'AWS',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 18,
          author: 'Cubos Academy',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        // ======================== a partir daqui sao autores da trilha de UX
        {
          id: 19,
          author: 'UX Now',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 20,
          author: 'Mergo',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 21,
          author: 'G4 Educação',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 22,
          author: 'UX Unicórnio',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 23,
          author: 'Ateliware',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 24,
          author: 'Awari',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 25,
          author: 'Aela',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 26,
          author: 'InfoQ',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 27,
          author: 'UX Collective',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 28,
          author: 'Chief of Design',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 29,
          author: 'FIAP',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 30,
          author: 'Casa do Código',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        // ======================== a partir daqui sao autores da trilha de QA
        {
          id: 31,
          author: 'Hipsters',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 32,
          author: 'DEVMEDIA',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 33,
          author: 'Linha de Código',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 34,
          author: 'Caroli.org',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 35,
          author: 'Neder',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 36,
          author: 'Assert+',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 37,
          author: 'Assert+',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 38,
          author: 'Julio de Lima',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 39,
          author: 'Testing Company',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 40,
          author: 'Geek Hunter',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 41,
          author: 'Treina Web',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 42,
          author: 'EBAC',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 43,
          author: 'Girls Testing',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 44,
          author: 'Serverest',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 45,
          author: 'CAcademy',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 46,
          author: 'Agilizei',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 47,
          author: 'Interasys',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 48,
          author: 'Teasy Tips',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 49,
          author: 'Test Automation Uni',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 50,
          author: '4ALL Tests',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 51,
          author: 'Free Code Camp',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 52,
          author: 'Agile Tester',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 53,
          author: 'Code Journey',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 54,
          author: 'Biblioteca QA',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
        {
          id: 55,
          author: 'Outros',
          image: 'https://i.pravatar.cc/300',
          createdAt: '2022-11-02 15:00:30',
          updatedAt: '2022-11-02 16:00:30',
        },
      ],
      {}
    ),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('content_authors', null, {}),
};
