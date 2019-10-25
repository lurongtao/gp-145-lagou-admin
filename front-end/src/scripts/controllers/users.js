import navView from '../views/nav.art'

import httpModel from '../models/http'

class Users {
  constructor() {
    this.render()
    this.type = ''
  }

  render() {
    let that = this

    let html = navView({
      isSignin: false
    })
    $('#nav').html(html)

    // 注册登录按钮点击
    $('#btn-signin, #btn-signup').on('click', function() {
      that.type = $(this).attr('id')
    })

    // 提交
    $('#btn-submit').on('click', this.handleSubmit.bind(this))
  }

  async handleSubmit() {
    let data = $('.form-horizontal').serialize()

    let result = await httpModel.get({
      // this.type 存储了用户点了“登录”或“注册”按钮
      url: '/api/users/' + (this.type === 'btn-signin' ? 'signin' : 'signup'),
      data
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