// controllers/bookingController.js
const pool = require("../config/db");

const bookSeats = async (req, res) => {
    const { userId, seats } = req.body; // seats is an array of seat numbers

    try {
        const seatNumbers = seats.join(","); // Converting array to comma-separated string

        // Check if any of the selected seats are already reserved
        const checkSeats = await pool.query(
            "SELECT * FROM seats WHERE seat_number = ANY($1) AND is_reserved = TRUE",
            [seats]
        );

        if (checkSeats.rows.length > 0) {
            return res.status(400).json({ message: "Some of the seats are already reserved" });
        }

        // Mark the selected seats as reserved
        for (let seat of seats) {
            await pool.query(
                "UPDATE seats SET is_reserved = TRUE, user_id = $1 WHERE seat_number = $2",
                [userId, seat]
            );
        }

        res.status(200).json({ message: "Seats booked successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error booking seats", error: error.message });
    }
};

module.exports = { bookSeats };
