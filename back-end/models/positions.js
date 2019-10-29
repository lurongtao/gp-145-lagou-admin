const { Positions } = require('../utils/db')

const save = (data) => {
  let position = new Positions(data)
  return position.save()
}

const findAll = async () => {
  return await Positions.find({}).sort({_id: -1})
}

const update = async (data) => {
  return await Positions.findByIdAndUpdate(data.id, data)
}

module.exports = {
  save,
  findAll,
  update
}