var express = require('express')
var router = express.Router()

let position = require('../controllers/position')

// router.get('/findAll', position.findAll)
// router.post('/save', position.save)
// router.patch('/save')

router.route('/')
  .get(position.findAll)
  .post(position.save)
  .patch(position.update)

module.exports = router
