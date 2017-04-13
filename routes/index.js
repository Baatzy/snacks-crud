var express = require('express');
var router = express.Router();
var db = require('../db')

// Redirect to /snacks if navigating to home page
router.get('/', (req, res, next) => {
  db('snacks').then(snacks => {
    res.redirect('snacks/index', { snacks })
  })
})

module.exports = router;
