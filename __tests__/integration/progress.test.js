const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

const output = [
  {
    idUser: 1,
    courses: [
      'Habilidades além do código',
      'Qual a melhor linguagem de programação?',
      'LGPD: Desvendando o bicho de 7 cabeças',
      'Design Thinking e carreira: como migrei de Psicologia para UX Design',
      'Guia definitivo de como migrar para UX Design: 5 passos para virar um UX',
      'O que um Dev júnior pode ensinar?',
      'Mini Curso Javascript do Zero',
      'O design do dia a dia',
      'A poderosa união entre design de UX e desenvolvimento de software',
      'De advogada a desenvolvedora: um relato sobre minha migração de carreira',
    ],
    status: [
      'Em andamento',
      'Em andamento',
      'Em andamento',
      'Em andamento',
      'Em andamento',
      'Concluído',
      'Concluído',
      'Concluído',
      'Concluído',
      'Concluído',
    ],
    favorites: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  },
  {
    idUser: 2,
    courses: [
      'Culture Code',
      'Design Thinking e carreira: como migrei de Psicologia para UX Design',
    ],
    status: ['Em andamento', 'Em andamento'],
    favorites: [1, 1],
  },
  {
    idUser: 3,
    courses: [
      'Culture Code',
      'Design Thinking e carreira: como migrei de Psicologia para UX Design',
      'De advogada a desenvolvedora: um relato sobre minha migração de carreira',
      'Guia definitivo de como migrar para UX Design: 5 passos para virar um UX',
    ],
    status: ['Em andamento', 'Em andamento', 'Concluído', 'Concluído'],
    favorites: [1, 1, 0, 1],
  },
];

describe('Making a GET request on /progress', function () {
  it("returns a list of all students' progress", async function () {
    const response = await chai.request(app).get('/progress');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(output);
  });
});

describe('Making a GET request on /progress/1', function () {
  it('returns the progress of the student whose id is 1', async function () {
    const response = await chai.request(app).get('/progress/1');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal([output[0]]);
  });
});
