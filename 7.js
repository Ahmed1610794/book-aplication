const express = require('express');

const router = express.Router(); // Create a router object

// Login as a registered user
router.post('/', async (req, res) => {
    const { username, password } = req.body; // Get username and password from request body
    // Add logic to authenticate user (e.g., check credentials in database)
    res.status(200).json({ message: 'User logged in successfully!' }); // Send success response
});

module.exports = router; // Export the router