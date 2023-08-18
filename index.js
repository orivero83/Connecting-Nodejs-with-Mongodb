const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000');
})

mongoose.connect('mongodb://127.0.0.1:27017/crud', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB' + err);
})

