import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="home-page">
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-container">
                    <h2 className="logo">Train Reservation System</h2>
                    <div className="nav-links">
                        <Link to="/login" className="nav-button">
                            Login
                        </Link>
                        <Link to="/signup" className="nav-button">
                            Signup
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="content">
                <h1>Welcome to Train Reservation System</h1>
                <Link to="/booking" className="button">
                    Book Seats
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
