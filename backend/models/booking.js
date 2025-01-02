// models/booking.js
const pool = require("../config/db");

const createBookingTable = async () => {
    await pool.query(`
    CREATE TABLE IF NOT EXISTS bookings (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      seat_numbers TEXT,
      booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
};

module.exports = { createBookingTable };
