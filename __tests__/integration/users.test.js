const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

const output = [
  {
    id: 1,
    firstName: 'Anderson',
    lastName: 'Corrêa',
    email: 'anderson@gmail.com',
    password: '123456',
    createdAt: '2022-11-02T15:00:30.000Z',
    updatedAt: '2022-11-02T16:00:30.000Z',
  },
  {
    id: 2,
    firstName: 'Heloisa',
    lastName: 'Moraes',
    email: 'heloisa@gmail.com',
    password: '1234567',
    createdAt: '2022-11-02T15:00:30.000Z',
    updatedAt: '2022-11-02T16:00:30.000Z',
  },
  {
    id: 3,
    firstName: 'Kamila',
    lastName: 'Pantoja',
    email: 'kamila@gmail.com',
    password: '12345678',
    createdAt: '2022-11-02T15:00:30.000Z',
    updatedAt: '2022-11-02T16:00:30.000Z',
  },
  {
    id: 4,
    firstName: 'Laura',
    lastName: 'Morato',
    email: 'laura@gmail.com',
    password: '123456789',
    createdAt: '2022-11-02T15:00:30.000Z',
    updatedAt: '2022-11-02T16:00:30.000Z',
  },
];

describe('Making a GET request on /users', function () {
  it('returns a list of all users', async function () {
    const response = await chai.request(app).get('/users');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(output);
  });
});

describe('Making a GET request on /users/1', function () {
  it('returns the user with id equal to 1', async function () {
    const response = await chai.request(app).get('/users/1');

    expect(response.status).to.be.equal(200);
    expect(response.body.id).to.be.equal(output[0].id);
  });
});
