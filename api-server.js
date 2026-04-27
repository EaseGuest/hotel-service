'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Sample route for current date and time
app.get('/api/time', (req, res) => {
    const currentDateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    res.json({
        time: currentDateTime,
        user: 'EaseGuest'
    });
});

app.listen(port, () => {
    console.log(`API Server running on port ${port}`);
});