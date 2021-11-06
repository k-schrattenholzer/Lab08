const { Router } = require('express');
// eslint-disable-next-line no-unused-vars
const User = require('../models/User.js');
const userFetch = require('../utils/user-util.js');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const user = await userFetch();
    console.log('USER', user);
    
  } catch (err) {
    next(err);
  }
});

//will add routes for
//get/
//get/:id
//post
//patch/:id
