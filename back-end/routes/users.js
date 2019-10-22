var express = require('express')
var router = express.Router()

const { signup } = require('../controllers/users')

router.post('/signup', signup)

module.exports = router
