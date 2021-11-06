const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app.js');

describe.skip('routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('dummy test', () => {
    expect(1).toEqual(1);
  });
});

it('creates a new user', () => {
  return request(app)
    .post('/api/v1/users')
    .then((res) => {
      expect(res.body).toEqual({
        id: '1',
        quantity: 10,
      });
    });
});

// it('given an ID, get returns the user with that ID', async() => {
//   await request(app)
//     .post('/api/v1/users')
//     .send({ quantity: 14 });

//   return request(app)
//     .get('/api/v1/users/1')
//     .then(res => {
//       expect(res.body).toEqual({
//         id: '1',
//         quantity: 14
//       });
//     });
// });
