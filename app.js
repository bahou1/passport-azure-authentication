const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const logger = require('morgan');

// Passport Configuration
const passportConfig = require('./config/passport-config'); 

// Logging middleware
app.use(logger('dev'));

// MongoDB
mongoose.connect('mongodb+srv://yeezyanwar:benmolay@project1.zurxw0g.mongodb.net/?retryWrites=true&w=majority&appName=project1', {})
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(session({
  secret: 'kanye',
  resave: true,
  saveUninitialized: true,
}));

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// Passport
app.get('/users/login/azure',
  passport.authenticate('azuread-openidconnect', { failureRedirect: '/' }),
  (req, res) => {
    // Successful login handling
    res.redirect('/');
  },
  (err, req, res, next) => {
    // Handle authentication errors
    console.error(err);
    res.redirect('/'); 
  }
);

// Callback route to handle Azure AD B2C login callback
app.get('/users/login/azure/callback',
  passport.authenticate('azuread-openidconnect', { failureRedirect: '/' }),
  (req, res) => {
   
    res.redirect('/');
  },
  (err, req, res, next) => {
   
    console.error(err);
    res.redirect('/'); 
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is running at :' + PORT);
});
