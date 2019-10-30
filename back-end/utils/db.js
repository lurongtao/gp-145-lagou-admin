const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/lagou-admin', { useUnifiedTopology: true, useNewUrlParser: true })

const Users = mongoose.model('users', {
  username: String,
  password: String
})

const Positions = mongoose.model('positions', {
  companyLogo: String,
  positionName: String,
  companyName: String,
  city: String,
  salary: String,
  createTime: String
})

module.exports = {
  Users,
  Positions
}