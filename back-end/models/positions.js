const { Positions } = require('../utils/db')

const save = (data) => {
  let position = new Positions(data)
  return position.save()
}

module.exports = {
  save
}