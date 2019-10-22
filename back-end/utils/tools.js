const bcrypt = require('bcrypt')

const hash = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        resolve(hash)
      })
    })
  })
}

const compare = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, function(err, res) {
      resolve(res)
    })
  })
}

module.exports = {
  hash,
  compare
}