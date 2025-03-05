const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Import Routes
const homeRoutes = require('./routes/home');
const shopRoutes = require('./routes/shop');
const aboutRoutes = require('./routes/about');

// Use Routes
app.use('/', homeRoutes);
app.use('/shop', shopRoutes);
app.use('/about', aboutRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
