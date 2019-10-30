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

async function _handleDeleteClick(res, obj) {
  let id = $(obj).attr('data-id')
  let result = await http.update({
    url: '/api/position',
    type: 'delete',
    data: { id }
  })
  if (result.ret) {
    res.go('/position?r=' + (new Date().getTime()))
  }
}

async function _handleSearch(res, keywords) {
  let result = await http.update({
    url: '/api/position/search',
    data: {
      keywords
    }
  })

  if (result.ret) {
    res.render(positionView({
      list: result.data.list
    }))
  } else {
    res.go('/position')
  }
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
  $('.btn-delete').on('click', function() {
    _handleDeleteClick(res, this)
  })

  $('body').on('keyup', '#search', (e) => {
    if (e.keyCode === 13) {
      _handleSearch(res, e.target.value)
    }
  })
}

export const add = async (req, res, next) => {
  res.render(positionAddView())

  // $('#posadd-submit').on('click', async() => {
  //   let $form = $('#position-form')
  //   let data = $form.serialize()
  //   let result = await http.update({
  //     url: '/api/position',
  //     data
  //   })
  //   if (result.ret) {
  //     $form[0].reset()
  //   } else {
  //     alert(result.data.message)
  //   }
  // })

  // $('#posadd-submit').on('click', () => {
  //   console.log(0)
    $('#position-form').ajaxForm(() => {
      console.log(0)
    })
  // })
  
  $('#posadd-back').on('click', () => {
    res.go('/position')
  })
}

export const update = async (req, res, next) => {
  let id = req.body.id

  let result = await http.get({
    url: '/api/position/findOne',
    data: {
      id
    }
  })
  res.render(positionUpdateView({
    item: result.data
  }))

  $('#posedit-submit').on('click', async() => {
    let $form = $('#position-form')
    let data = $form.serialize()
    let result = await http.update({
      url: '/api/position',
      data: data + '&id=' + id,
      type: 'patch'
    })
    if (result.ret) {
      res.go('/position')
    } else {
      alert(result.data.message)
    }
  })

  $('#posedit-back').on('click', () => {
    res.go('/position')
  })
}