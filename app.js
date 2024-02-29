const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

// MongoDB
mongoose.connect('mongodb+srv://yeezyanwar:benmolay@project1.zurxw0g.mongodb.net/?retryWrites=true&w=majority&appName=project1', {

})
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

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is running at :' + PORT);
});
