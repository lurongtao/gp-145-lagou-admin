const positionModel = require('../models/positions')

const findAll = async(req, res, next) => {  
  res.set('Content-Type', 'application/json; charset=utf-8')
  
  let result = await positionModel.findAll()

  if (result) {
    res.render('succ', {
      data: JSON.stringify({
        list: result
      })
    })
  } else {
    res.render('fail', {
      data: JSON.stringify({
        list: []
      })
    })
  }
}

const save = async (req, res, next) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  let data = req.body
  data.createTime = '2019-10-28 17:56'
  let result = await positionModel.save(data)
  if (result) {
    res.render('succ', {
      data: JSON.stringify({
        message: '数据添加成功.'
      })
    })
  } else {
    res.render('fail', {
      data: JSON.stringify({
        message: '数据添加失败.'
      })
    })
  }
}

const update = async (req, res, next) => {
  let data = req.body
  let result = await positionModel.update(data)

  if (result) {
    res.render('succ', {
      data: JSON.stringify({
        message: '数据修改成功.'
      })
    })
  } else {
    res.render('fail', {
      data: JSON.stringify({
        message: '数据修改失败.'
      })
    })
  }
}

module.exports = {
  findAll,
  save,
  update
}