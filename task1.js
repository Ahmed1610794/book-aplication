const express = require('express');
const axios = require('axios');

const router = express.Router(); // Create a router object

// Get the list of available books
router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.example.com/books'); // Replace with the correct API endpoint
        res.json(response.data); // Send the list of books as a JSON response
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving books.' }); // Handle errors
    }
});

module.exports = router; // Export the router