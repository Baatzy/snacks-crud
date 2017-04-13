var express = require('express')
var router = express.Router()
var db = require('../db')

router.get('/', (req, res, next) => {
  db('snacks').then(snacks => {
    res.render('snacks/index', { snacks })
  })
})

router.get('/new', (req, res, next) => {
  res.render('snacks/new')
})

router.get('/:id', (req, res, next) => {
  let id = req.params.id
  db('snacks').select('*').where({ id }).first().then(snack => {
    res.render('snacks/show', { snack })
  })
})

router.post('/', (req, res, next) => {
  let newSnack = {
    name: req.body.name,
    rating: req.body.rating,
    review_description: req.body['review-description'],
    image_url: req.body['image-url']
  }
  db('snacks').insert(newSnack, '*').then(snack => {
    res.redirect(`snacks/${snack[0].id}`)
  })
})

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id
  db('snacks').where({ id }).first().then(snack => {
    res.render('snacks/edit', { snack })
  })
})

router.delete('/:id', (req, res, next) => {

})

module.exports = router
