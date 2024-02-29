const express = require('express');
const router = express.Router();

// Define your routes
router.get('/', (req, res) => {
  res.render('dashboard', { title: 'Dashboard - Made by Anwar' });
});


module.exports = router;
