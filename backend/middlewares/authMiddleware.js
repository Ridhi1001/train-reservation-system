// middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(403).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, "secretkey");
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({ message: "Invalid token" });
    }
};

module.exports = authenticate;
