// Setup
const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');

mongoose.connect('mongodb://localhost/Exemple')
const app = express();
app.use(express.json());


//on part le tout
app.use(router);
app.listen(3000); 