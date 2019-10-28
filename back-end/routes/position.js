var express = require('express')
var router = express.Router()

let position = require('../controllers/position')

router.get('/findAll', position.findAll)
router.post('/save', position.save)

module.exports = router
