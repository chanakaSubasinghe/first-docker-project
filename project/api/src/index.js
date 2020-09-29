const express = require('express');
const app = express();

require('./db/mongoose');

const PORT = process.env.PORT || 8000;

const userRoute = require('../src/routes/user');

app.use(userRoute);

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});