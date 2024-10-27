const express = require('express');
const axios = require('axios');

const router = express.Router(); // Create a router object

// Search by ISBN using Promises
router.get('/:isbn', (req, res) => {
    const isbn = req.params.isbn; // Get ISBN from URL parameters
    axios.get('https://api.example.com/books/${isbn}')
        .then(response => {
            res.json(response.data); // Send book details as a JSON response
        })
        .catch(error => {
            res.status(500).json({ message: 'Error retrieving book by ISBN.' }); // Handle errors
        });
});

module.exports = router; // Export the router