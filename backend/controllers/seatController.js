// controllers/seatController.js
const pool = require("../config/db");

const getSeats = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM seats");
        res.status(200).json({ seats: result.rows });
    } catch (error) {
        res.status(500).json({ message: "Error fetching seats", error: error.message });
    }
};

module.exports = { getSeats };
