const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Mock database (for demonstration purposes)
let moodLogs = [];

// Route to handle mood submissions
app.post('/submit-mood', (req, res) => {
    const { mood, comments } = req.body;

    // Ideally, you'd also capture user ID from session or token
    const userId = req.session.userId; // Example placeholder

    // Save mood log to "database"
    if (userId) {
        moodLogs.push({ userId, mood, comments });
        
        // Redirect to success page after saving
        res.redirect('mood-tracking-success.html'); 
    } else {
        res.status(401).send('Unauthorized'); // Handle unauthorized access
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
