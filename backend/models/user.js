// models/user.js
const pool = require("../config/db");

const createUserTable = async () => {
    await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    );
  `);
};

module.exports = { createUserTable };
