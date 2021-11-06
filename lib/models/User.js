const pool = require('../utils/pool');

module.exports = class User {
  //define static methods
  // to insert a new user
  static async insert(quantity) {
    const { rows } = await pool.query(
      'INSERT INTO users (quantity) VALUES ($1) RETURNING *',
      [quantity]
    );

    return new User(rows[0]);
  }
  //find user by id
  // get all users
  //update user
  //delete user
};
