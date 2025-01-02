// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./config/db");

// Import routes
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const seatRoutes = require("./routes/seatRoutes");

// Initialize Express app
const app = express();
const port = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/seats", seatRoutes);

// Database table creation (ensure these are created)
const { createUserTable } = require("./models/user");
const { createSeatTable } = require("./models/seat");
const { createBookingTable } = require("./models/booking");

(async () => {
    await createUserTable();
    await createSeatTable();
    await createBookingTable();
})();

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
