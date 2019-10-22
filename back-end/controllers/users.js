const usersModel = require('../models/users')

const signup = async function(req, res, next) {
  res.set('Content-Type', 'application/json; charset=utf-8')

  let result = await usersModel.signup(req.body)
  console.log(result)
  
  res.render('succ', {
    data: JSON.stringify({
      message: '用户注册成功.'
    })
  })
}

module.exports = {
  signup
}