// 
const express = require('express')
// const parseurl = require('parseurl');
const bodyParser = requrie('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const knex = require('knex');
const db = require('../db/knex')
const app = express();


const router = express.Router()

const app = express();

// Root Directory
router.get('/', async (req, res, next) => {
  const users = await db('users')
  console.log("you did it")
  res.json(users)
});

// Get All "Signatures"
router.get('/api/users', funtion(req,res) {

}

// Post New Users
app.post('/api/poker')


module.exports = router