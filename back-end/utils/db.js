const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/lagou-admin', { useUnifiedTopology: true, useNewUrlParser: true })

const Users = mongoose.model('user', {
  username: String,
  password: String
})

module.exports = {
  Users
}