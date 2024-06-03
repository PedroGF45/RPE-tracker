// express server
const express = require('express');
const app = express();
const session = require('express-session');

// passport
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// parsers
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// get private vars
require('dotenv').config();
const port = process.env.PORT || 3000;
//const mongo_uri = process.env.MONGO_URI;

// database management
const mongoose = require('mongoose');

// set app configs
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(bodyParser.json());

// session setup
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
    })
);

// passport setup
app.use(passport.initialize());
app.use(passport.session());

// passport-local-mongoose setup
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/*
// database connection
mongoose.connect(mongo_uri)
    .then(() => {
        console.log('Connected to database');
    }).catch((err) => {
        console.log('Database connection failed')
    });
*/

app.listen(port, () => {
    console.log('Server is running on port 3000');
});