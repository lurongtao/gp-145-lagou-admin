import positionView from '../views/position.art'
import positionAddView from '../views/position.add.art'
import http from '../models/http'

function _handleAddClick(res) {
  $('#btn-add').on('click', () => {
    res.go('/position_add')
  })
}

export const list = async (req, res, next) => {
  let result = await http.get({
    url: '/api/position/findAll'
  })
  
  if (result.ret) {
    res.render(positionView())

    _handleAddClick(res)
  } else {
    res.go('/home')
  }
}

export const add = async (req, res, next) => {
  res.render(positionAddView())
}