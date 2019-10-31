const positionModel = require('../models/positions')
const moment = require('moment')
const fs = require('fs')
const path = require('path')

const findAll = async(req, res, next) => {  
  res.set('Content-Type', 'application/json; charset=utf-8')

  let pageInfo = req.query

  let result = await positionModel.findAll(pageInfo)

  if (result) {
    res.render('succ', {
      data: JSON.stringify(result)
    })
  } else {
    res.render('fail', {
      data: JSON.stringify({})
    })
  }
}

const findOne = async (req, res, next) => {
  let id = req.query.id
  let result = await positionModel.findOne(id)
  if (result) {
    res.render('succ', {
      data: JSON.stringify(result)
    })
  } else {
    res.render('fail', {
      data: JSON.stringify(result)
    })
  }
}

const save = async (req, res, next) => {
  res.set('Content-Type', 'application/json; charset=utf-8')
  let data = req.body
  data.createTime = moment().format('YYYY-MM-DD HH:mm:ss')
  data.companyLogo = req.filename
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
  if (req.filename === '') {
    delete data.companyLogo
  } else {
    data.companyLogo = req.filename
  }
  
  data.createTime = moment().format('YYYY-MM-DD HH:mm:ss')
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

const remove = async (req, res, next) => {
  let { id, tempCompanylogo } = req.body
  let result = positionModel.remove(id)

  if (result) {
    fs.unlink(path.resolve(__dirname, '../public/uploads/' + tempCompanylogo), (err) => {
      if (err) {
        console.log(err.message)
      }
    })
    
    res.render('succ', {
      data: JSON.stringify({
        message: '数据删除成功.'
      })
    })
  } else {
    res.render('fail', {
      data: JSON.stringify({
        message: '数据删除失败.'
      })
    })
  }
}

const search = async (req, res, next) => {
  let { keywords } = req.body
  let result = await positionModel.search(keywords)

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

module.exports = {
  findAll,
  findOne,
  save,
  update,
  remove,
  search
}