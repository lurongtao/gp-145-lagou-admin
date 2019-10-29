import positionView from '../views/position.art'
import positionAddView from '../views/position.add.art'
import positionUpdateView from '../views/position.update.art'
import http from '../models/http'

function _handleAddClick(res) {
  $('#btn-add').on('click', () => {
    res.go('/position_add')
  })
}

function _handleUpdateClick(res, obj) {
  let id = $(obj).attr('data-id')
  res.go('/position_update', {id})
}

function _handleDeleteClick() {
  console.log(1)
}

export const list = async (req, res, next) => {
  let result = await http.get({
    url: '/api/position'
  })
  
  if (result.ret) {
    res.render(positionView({
      list: result.data.list
    }))

    _handleAddClick(res)
  } else {
    res.go('/home')
  }

  $('.btn-update').on('click', function() {
    _handleUpdateClick(res, this)
  })
  $('.btn-delete').on('click', _handleDeleteClick)
}

export const add = async (req, res, next) => {
  res.render(positionAddView())

  $('#posadd-submit').on('click', async() => {
    let $form = $('#position-form')
    let data = $form.serialize()
    let result = await http.update({
      url: '/api/position/save',
      data
    })
    if (result.ret) {
      $form[0].reset()
    } else {
      alert(result.data.message)
    }
  })

  $('#posadd-back').on('click', () => {
    res.go('/position')
  })
}

export const update = (req, res, next) => {
  res.render(positionUpdateView())

  let id = req.body.id
  // http.update({
  //   url: '/api/position',
  //   type: 'patch',
  //   data: {
  //     id
  //   }
  // })
}