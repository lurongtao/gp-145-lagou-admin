var express = require('express')
var router = express.Router()

const { signup, signin, hasUsername } = require('../controllers/users')

router.post('/signup', hasUsername, signup)
router.post('/signin', signin)

module.exports = router
