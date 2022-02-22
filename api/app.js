// Setup
const express = require('express');
const mongoose = require('mongoose');
const mongoStore = require('connect-mongo');
const router = require('./router');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const User = require('./models/user');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb://localhost/Exemple')
const app = express();
app.use(express.json());


//on part le tout
app.use(router);
app.listen(3000); 