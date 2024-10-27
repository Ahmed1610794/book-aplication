const express = require('express');

const router = express.Router(); // Create a router object

// Add/modify a book review (for registered users only)
router.post('/:isbn/review', async (req, res) => {
    const isbn = req.params.isbn; // Get ISBN from URL parameters
    const reviewData = req.body;   })