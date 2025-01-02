import React, { useState } from "react";
import SeatGrid from "../components/SeatGrid";
import BookingForm from "../components/BookingForm";
import "../styles.css";

const BookingPage = () => {
    const [seats, setSeats] = useState(
        Array.from({ length: 80 }, (_, i) => ({
            number: i + 1,
            reserved: false,
        }))
    );

    const handleSeatSelect = (selectedSeats) => {
        console.log("Selected seats:", selectedSeats);
    };

    const handleBookingSubmit = ({ name, seats: selectedSeats }) => {
        const updatedSeats = seats.map((seat) =>
            selectedSeats.includes(seat.number)
                ? { ...seat, reserved: true }
                : seat
        );
        setSeats(updatedSeats);
        alert(`${name}, your seats are booked!`);
    };

    return (
        <div className="booking-page">
            <h1>Book Your Seats</h1>
            <SeatGrid seats={seats} onSeatSelect={handleSeatSelect} />
            <BookingForm onSubmit={handleBookingSubmit} />
        </div>
    );
};

export default BookingPage;
