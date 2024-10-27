const express = require('express');

const router = express.Router(); // Create a router object

// Submit the project GitHub link
router.post('/', async (req, res) => {
    const { githubLink } = req.body; // Get GitHub link from request body
    // Add logic to save the link or handle submission
    res.status(200).json({ message: 'Project GitHub link submitted successfully!' }); // Send success response
});

module.exports = router; // Export the router