var express = require('express')
var router = express.Router()

const { signup, signin, signout, hasUsername, isSignin } = require('../controllers/users')

router.post('/signup', hasUsername, signup)
router.post('/signin', signin)
router.get('/isSignin', isSignin)
router.get('/signout', signout)

module.exports = router
