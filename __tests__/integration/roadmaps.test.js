const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

const output = [
  {
    "id": 1,
    "title": "Desenvolvimento Full Stack",
    "createdAt": "2022-11-02T15:00:30.000Z",
    "updatedAt": "2022-11-02T16:00:30.000Z"
  },
  {
    "id": 2,
    "title": "UX/UI Design",
    "createdAt": "2022-11-02T15:00:30.000Z",
    "updatedAt": "2022-11-02T16:00:30.000Z"
  },
  {
    "id": 3,
    "title": "Quality Assurance",
    "createdAt": "2022-11-02T15:00:30.000Z",
    "updatedAt": "2022-11-02T16:00:30.000Z"
  },
  {
    "id": 4,
    "title": "O início",
    "createdAt": "2022-11-02T15:00:30.000Z",
    "updatedAt": "2022-11-02T16:00:30.000Z"
  },
  {
    "id": 5,
    "title": "Opcional",
    "createdAt": "2022-11-02T15:00:30.000Z",
    "updatedAt": "2022-11-02T16:00:30.000Z"
  }
]

describe('Making a GET request on /roadmaps', function() {
  it('returns a list of all roadmaps', async function() {
    const response = await chai.request(app).get('/roadmaps');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(output);
  })
})

describe('Making a GET request on /roadmaps/1', function () {
  it('returns a roadmap whose id is 1', async function() {
    const response = await chai.request(app).get('/roadmaps/1');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(output[0]);
  })
})
