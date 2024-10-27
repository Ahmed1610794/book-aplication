const express = require('express');

const router = express.Router(); // Create a router object

// Delete a book review added by that particular user
router.delete('/:isbn/review', async (req, res) => {
    const isbn = req.params.isbn; // Get ISBN from URL parameters
    // Add logic to delete the review (e.g., remove from database)
    res.status(200).json({ message: 'Book review deleted successfully!' }); // Send success response
});

module.exports = router; // Export the router