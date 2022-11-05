const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

const output = [
  {
    "idUser": 1,
    "courses": [
      "De advogada a desenvolvedora: um relato sobre minha migração de carreira",
      "Guia definitivo de como migrar para UX Design: 5 passos para virar um UX",
      "Design Thinking e carreira: como migrei de Psicologia para UX Design"
    ],
    "status": [
      "Não comecei",
      "Não comecei",
      "Em andamento"
    ],
    "favorites": [
      1,
      1,
      0
    ]
  },
  {
    "idUser": 2,
    "courses": [
      "Culture Code",
      "Design Thinking e carreira: como migrei de Psicologia para UX Design"
    ],
    "status": [
      "Não comecei",
      "Em andamento"
    ],
    "favorites": [
      1,
      1
    ]
  },
  {
    "idUser": 3,
    "courses": [
      "De advogada a desenvolvedora: um relato sobre minha migração de carreira",
      "Design Thinking e carreira: como migrei de Psicologia para UX Design",
      "Guia definitivo de como migrar para UX Design: 5 passos para virar um UX",
      "Culture Code"
    ],
    "status": [
      "Não comecei",
      "Não comecei",
      "Não comecei",
      "Em andamento"
    ],
    "favorites": [
      0,
      1,
      1,
      1
    ]
  }
]

const user1 = [
  {
    "idUser": 1,
    "courses": [
      "Guia definitivo de como migrar para UX Design: 5 passos para virar um UX",
      "Design Thinking e carreira: como migrei de Psicologia para UX Design",
      "De advogada a desenvolvedora: um relato sobre minha migração de carreira"
    ],
    "status": [
      "Não comecei",
      "Em andamento",
      "Não comecei"
    ],
    "favorites": [
      1,
      0,
      1
    ]
  }
]

describe('Making a GET request on /progress', function() {
  it("returns a list of all students' progress", async function() {
    const response = await chai.request(app).get('/progress');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(output);
  })
})

describe('Making a GET request on /progress/1', function () {
  it('returns the progress of the student whose id is 1', async function() {
    const response = await chai.request(app).get('/progress/1');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(user1);
  })
})
