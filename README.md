## Train Reservation System

A full-stack train reservation system that allows users to book, cancel, and manage train seats dynamically. The application ensures secure user authentication and supports responsive design for seamless functionality across devices.

## Features

# Frontend
User authentication: Login and Signup pages.
Dynamic seat layout with visual representation:
7 seats per row for 11 rows and 3 seats in the last row.
Color-coded seats for status: available, reserved, etc.
Seat booking:
Book up to 7 seats at a time.
Prioritize booking in one row; otherwise, nearby seats are booked.
Responsive design for mobile and desktop views.

# Backend
RESTful API for user authentication and seat management.
PostgreSQL database integration:
User data storage.
Seat availability management.
Secure password hashing with bcrypt.
Error handling and validations for all endpoints.

## Tech Stack

# Frontend
ReactJS
# Backend
Node.js
Express.js
# Database
PostgreSQL

## Setup Instructions

# Backend
1. Navigate to the backend directory:
cd backend
2. Install dependencies:
npm install
3. Setup the database:
Create a PostgreSQL database named train_db
Set environment variables in .env file:
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=train_reservation
JWT_SECRET=your_jwt_secret
4. Start the backend server:
npm start
5. Test the API endpoints using Postman or curl.

# Frontend
1. Navigate to the frontend directory:
cd frontend
2. Install dependencies:
npm install
3. Start the server:
npm start
4. Open your browser at http://localhost:3000

## Usage

1. Signup/Login:
Navigate to the login or signup page to create an account or log in.

2. Book Seats:
Select the desired seats on the seat layout and book up to 7 seats at a time.

## API Endpoint

# Authentication
POST - /api/auth/signup	
POST - /api/auth/login

# Seat Management
GET - /api/seats/
POST - /api/seats/book






