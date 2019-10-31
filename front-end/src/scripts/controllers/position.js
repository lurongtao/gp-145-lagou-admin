import positionView from '../views/position.art'
import positionAddView from '../views/position.add.art'
import positionUpdateView from '../views/position.update.art'
import http from '../models/http'
import _ from 'lodash'

let count = 5

function _handleAddClick(res) {
  $('#btn-add').on('click', () => {
    res.go('/position_add')
  })
}

function _handleUpdateClick(res, obj) {
  let id = $(obj).attr('data-id')
  res.go('/position_update', {id})
}

function _handlePageNumberClick(req, res, obj, type, pageCount) {
  // list(req, res, next, ~~$(obj).text())
  if (type) {
    let page = ~~req.params.page
    
    if (type === 'prev' && page > 1) {
      res.go('/position_list/' + (page - 1))
    } else if (type === 'next' && page < pageCount.length) {
      res.go('/position_list/' + (page + 1))
    }

  } else {
    res.go('/position_list/' + ~~$(obj).text())
  }
}

async function _handleDeleteClick(res, obj) {
  let id = $(obj).attr('data-id')
  let tempCompanylogo = $(obj).attr('data-img')
  let result = await http.update({
    url: '/api/position',
    type: 'delete',
    data: { id, tempCompanylogo }
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
  let currentPage = ~~req.params.page || 1
  let result = await http.get({
    url: '/api/position',
    data: {
      start: (currentPage - 1) * count,
      count
    }
  })

  let pageCount = _.range(1, Math.ceil(result.data.total/count) + 1)
  
  if (result.ret) {
    let { list } = result.data
    res.render(positionView({
      list,
      pageCount,
      currentPage
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

  $('#box-footer a.page-number').on('click', function() {
    _handlePageNumberClick(req, res, this)
  })

  $('#box-footer a.page-prev').on('click', function() {
    _handlePageNumberClick(req, res, this, 'prev')
  })

  $('#box-footer a.page-next').on('click', function() {
    _handlePageNumberClick(req, res, this, 'next', pageCount)
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
    $('#position-form').ajaxForm({
      resetForm: true
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

  // $('#posedit-submit').on('click', async() => {
  //   let $form = $('#position-form')
  //   let data = $form.serialize()
  //   let result = await http.update({
  //     url: '/api/position',
  //     data: data + '&id=' + id,
  //     type: 'patch'
  //   })
  //   if (result.ret) {
  //     res.go('/position')
  //   } else {
  //     alert(result.data.message)
  //   }
  // })

  $('#position-form').ajaxForm({
    resetForm: true,
    dataType: 'json',
    url: '/api/position',
    method: 'patch',
    success: (result) => {
      if (result.ret) {
        res.go('/position')
      } else {
        alert(result.data.message)
      }
    }
  })

  $('#posedit-back').on('click', () => {
    res.go('/position')
  })
}