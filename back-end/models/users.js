const { Users } = require('../utils/db')

const signup = (data) => {
  const users = new Users(data)
  return users.save()
}

module.exports = {
  signup
}