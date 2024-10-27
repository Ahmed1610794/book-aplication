const express = require('express');
const axios = require('axios');

const router = express.Router(); // Create a router object

// Search by title
router.get('/:title', (req, res) => {
    const title = req.params.title; // Get title from URL parameters
    axios.get('https://api.example.com/books?title=${title}')
        .then(response => {
            res.json(response.data); // Send list of books by title as a JSON response
        })
        .catch(error => {
            res.status(500).json({ message: 'Error retrieving books by title.' }); // Handle errors
        });
});

module.exports = router; // Export the router