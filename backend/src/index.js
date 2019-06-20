const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://rochele:TsFQTy5Wj44nz9Na@cluster0-pae2m.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(require('./routes'));

app.listen(3333); // ou 80