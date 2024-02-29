// users.js
const express = require('express');
const router = express.Router(); // Use express.Router() to create a router
const User = require('../models/userModel');

// Render register.ejs for GET request
router.get('/register', (req, res) => {
  res.render('register', { title: 'Register - Made by Anwar' });
});

// Register route - handle form submission for POST request
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log('Received registration request:', { username, email, password });

    const newUser = new User({ username, email, password });
    await newUser.save();
    
    console.log('User saved successfully');

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);

    if (error.code === 11000) {
      res.status(400).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

// Render login.ejs for GET request
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Login route - handle form submission for POST request
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router; // Export the router
