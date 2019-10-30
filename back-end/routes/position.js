var express = require('express')
var router = express.Router()

let position = require('../controllers/position')
let uploadMiddleware = require('../middlewares/upload')

router.route('/')
  .get(position.findAll)
  .post(uploadMiddleware, position.save)
  .patch(uploadMiddleware, position.update)
  .delete(position.remove)

router.get('/findOne', position.findOne)

router.post('/search', position.search)

module.exports = router
