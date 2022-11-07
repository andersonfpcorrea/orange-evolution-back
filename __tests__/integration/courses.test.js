const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const { coursesOutput } = require('../integration/outputs/coursesOutput');

const { expect } = chai;
chai.use(chaiHttp);

describe('Making a GET request on /courses', function () {
  it('returns a list of all courses', async function () {
    const response = await chai.request(app).get('/courses');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(coursesOutput);
  });
});

describe('Making a GET request on /courses/1', function () {
  it('returns a roadmap whose id is 1', async function () {
    const response = await chai.request(app).get('/courses/1');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal([coursesOutput[0]]);
  });
});
