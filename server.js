const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;  // Use environment port for Render

// Enable CORS for GitHub Pages
app.use(cors({
    origin: "https://arko-253.github.io",  // Replace with your GitHub Pages URL
    methods: "GET,POST"
}));

// Middleware to serve static files
app.use(express.static('public'));

// Import Routes
const homeRoutes = require('./home');
const shopRoutes = require('./shop');
const aboutRoutes = require('./about');

// Use Routes
app.use('/', homeRoutes);
app.use('/shop', shopRoutes);
app.use('/about', aboutRoutes);

// API Route for Testing
app.get('/api/test', (req, res) => {
    res.json({ message: "Backend is connected successfully!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
