const request = require('superagent');
const URL = 'https://randomuser.me/api/';

const userFetch = async () => {
  const response = await request.get(
    `${URL}?inc=name,email,login,picture&nat=us&format=JSON`
  );

  console.log('RESPONSE', response.body.results[0]);
  return response.body.results[0];
};

module.exports = userFetch;

//API call and munging
