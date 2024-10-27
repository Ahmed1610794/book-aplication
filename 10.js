const express = require('express');
const axios = require('axios');

const router = express.Router(); // Create a router object

// Get all books using async callback function
router.get('/', (req, res) => {
    axios.get('https://api.example.com/books') // Replace with the correct API endpoint
        .then(response => {
            res.json(response.data); // Send the list of books as a JSON response
        })
        .catch(error => {
            res.status(500).json({ message: 'Error retrieving books.' }); // Handle errors
        });
});

module.exports = router; // Export the router