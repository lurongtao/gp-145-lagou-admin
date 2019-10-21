import navView from '../views/nav.art'

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

  handleSubmit() {
    let data = $('.form-horizontal').serialize()
    $.ajax({
      url: '/api/users/signup',
      type: 'POST',
      data,
      success: this.handleSubmitSucc
    })
  }

  handleSubmitSucc() {
    console.log(0)
  }
}

export default new Users()