// routes/bookingRoutes.js
const express = require("express");
const router = express.Router();
const { bookSeats } = require("../controllers/bookingController");

router.post("/book", bookSeats);

module.exports = router;
