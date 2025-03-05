const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Use environment port for Render

// Enable CORS for GitHub Pages
app.use(cors({
    origin: "https://arko-253.github.io", // Allow frontend to access backend
    methods: "GET,POST"
}));

// Serve static files (HTML, CSS, JS, Images)
app.use(express.static(path.join(__dirname)));

// API Route for Testing
app.get('/api/test', (req, res) => {
    res.json({ message: "Backend is connected successfully!" });
});

// Serve shop.html and about.html correctly
app.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'shop.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Serve index.html for unknown routes (Fixes "no such file" error)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
