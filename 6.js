const express = require('express');

const router = express.Router(); // Create a router object

// Register new user
router.post('/', async (req, res) => {
    const userData = req.body; // Get user data from request body
    // Add logic to register new user (e.g., save to database)
    res.status(201).json({ message: 'User registered successfully!' }); // Send success response
});

module.exports = router; // Export the router