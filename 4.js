const express = require('express');
const axios = require('axios');

const router = express.Router(); // Create a router object

// Get all books based on title
router.get('/:title', async (req, res) => {
    const title = req.params.title; // Get title from URL parameters
    try {
        const response = await axios.get('https://api.example.com/books?title=${title}'); 
        res.json(response.data); // Send list of books by title as a JSON response
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving books by title.' }); // Handle errors
    }
});

module.exports = router; // Export the router