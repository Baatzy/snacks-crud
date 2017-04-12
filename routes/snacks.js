var express = require('express')
var router = express.Router()
var db = require('../db')

// GET route for all movie reviews
router.get('/', (req, res, next) => {
  db('snacks').then(snacks => {
    res.render('snacks/index', { snacks })
  })
})

module.exports = router
