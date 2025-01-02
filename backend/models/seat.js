// models/seat.js
const pool = require("../config/db");

const createSeatTable = async () => {
    await pool.query(`
    CREATE TABLE IF NOT EXISTS seats (
      seat_number INTEGER PRIMARY KEY,
      is_booked BOOLEAN DEFAULT FALSE,
      user_id INTEGER REFERENCES users(id) ON DELETE SET NULL
    );
  `);

    // Initialize seat numbers 1 to 80
    for (let i = 1; i <= 80; i++) {
        await pool.query("INSERT INTO seats (seat_number) VALUES ($1) ON CONFLICT DO NOTHING", [i]);
    }
};

module.exports = { createSeatTable };
