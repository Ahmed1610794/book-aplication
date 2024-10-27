const express = require('express');
const axios = require('axios');

const router = express.Router(); // Create a router object

// Get all books by author
router.get('/:author', async (req, res) => {
    const author = req.params.author; // Get author name from URL parameters
    try {
        const response = await axios.get('https://api.example.com/books?author=${author}'); 
        res.json(response.data); // Send list of books by author as a JSON response
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving books by author.' }); // Handle errors
    }
});

module.exports = router; // Export the router