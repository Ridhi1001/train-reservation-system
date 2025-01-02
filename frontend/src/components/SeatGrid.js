import React, { useState } from "react";
import "../styles.css"; // Add styling for the grid

const SeatGrid = ({ seats, onSeatSelect }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (seatNumber) => {
        if (selectedSeats.length < 7 && !selectedSeats.includes(seatNumber)) {
            const newSelection = [...selectedSeats, seatNumber];
            setSelectedSeats(newSelection);
            onSeatSelect(newSelection);
        }
    };

    return (
        <div className="seat-grid">
            {seats.map((seat, index) => (
                <div
                    key={index}
                    className={`seat ${seat.reserved ? "reserved" : ""} ${selectedSeats.includes(seat.number) ? "selected" : ""
                        }`}
                    onClick={() => !seat.reserved && handleSeatClick(seat.number)}
                >
                    {seat.number}
                </div>
            ))}
        </div>
    );
};

export default SeatGrid;
