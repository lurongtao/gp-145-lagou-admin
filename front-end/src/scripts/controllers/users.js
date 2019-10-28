import store from 'store'

import navView from '../views/nav.art'

import httpModel from '../models/http'


class Users {
  constructor() {
    this.render()
    this.type = ''
    this.isSignin = false
    this.username = ''
  }

  async render() {
    // 如果调用了一个async 方法，方法里如果有await
    // 在调用的时候必须await
    await this.auth()

    let that = this

    let html = navView({
      isSignin: this.isSignin,
      username: this.username
    })
    $('#nav').html(html)

    // 注册登录按钮点击
    $('#btn-signin, #btn-signup').on('click', function() {
      that.type = $(this).attr('id')
    })

    // 提交
    $('#btn-submit').on('click', this.handleSubmit.bind(this))

    // 注销
    $('body').off('click').on('click', '#btn-signout', async () => {
      // let result = await httpModel.get({
      //   url: '/api/users/signout'
      // })
      // if (result.ret) {
      //   location.reload()
      // }

      store.remove('token')
      location.reload()
    })
  }

  async auth() {
    let result = await httpModel.get({
      url: '/api/users/isSignin'
    })

    let username = result.data.username
    this.isSignin = username ? true : false
    this.username = username
  }

  async handleSubmit() {
    let data = $('.form-horizontal').serialize()

    let result = await httpModel.get({
      // this.type 存储了用户点了“登录”或“注册”按钮
      url: '/api/users/' + (this.type === 'btn-signin' ? 'signin' : 'signup'),
      data,
      type: 'POST'
    })

    this.handleSubmitSucc(result)
  }

  handleSubmitSucc(result) {
    $('.form-horizontal')[0].reset()

    if (result.ret) {
      let html = navView({
        isSignin: true,
        username: result.data.username
      })

      if (this.type === 'btn-signin') {
        $('#nav').html(html)
      } else {
        alert(result.data.message)
      }
    } else {
      alert(result.data.message)
    }

  }
}

export default new Users()