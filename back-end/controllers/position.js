const findAll = (req, res, next) => {  
  res.set('Content-Type', 'application/json; charset=utf-8')
  res.render('succ', {
    data: JSON.stringify({
      list: []
    })
  })
}

module.exports = {
  findAll
}