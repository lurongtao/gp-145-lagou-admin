import navView from '../views/nav.art'

import httpModel from '../models/http'

class Users {
  constructor() {
    this.render()
  }

  render() {
    let html = navView()
    $('#nav').html(html)

    // 提交
    $('#btn-submit').on('click', this.handleSubmit.bind(this))
  }

  async handleSubmit() {
    let data = $('.form-horizontal').serialize()

    let result = await httpModel.get({
      url: '/api/users/signup',
      data
    })

    this.handleSubmitSucc(result)
  }

  handleSubmitSucc(result) {
    console.log(result)
  }
}

export default new Users()