// 
const express = require('express')
const router = express.Router()
const db = require('../db/knex')

router.get('/', async (req, res, next) => {
  const users = await db('users')
  res.json(books)
});


module.exports = router