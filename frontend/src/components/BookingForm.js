import React, { useState } from "react";
import "../styles.css"; // Add styling for the form

const BookingForm = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [seats, setSeats] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (seats.length === 0) {
            alert("Please select at least one seat.");
            return;
        }
        onSubmit({ name, seats });
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Book Seats</button>
        </form>
    );
};

export default BookingForm;
