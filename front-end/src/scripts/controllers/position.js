import positionView from '../views/position.art'
import http from '../models/http'

export const list = async (req, res, next) => {
  let result = await http.get({
    url: '/api/position/findAll'
  })
  
  if (result.ret) {
    res.render(positionView()) 
  } else {
    res.go('/home')
  }
}