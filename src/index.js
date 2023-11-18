const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose');
const { Film } = require('./database/db.config');
const filmRoutes = require('./routes/filmRoutes')


// Main Route
app.get('/', async (req, res) => {
    const films = await Film.find()
    res.send(films);
});

app.use('/films', filmRoutes)

// Port
const port = 4000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
