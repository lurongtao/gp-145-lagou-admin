export default {
  get({url, type='GET', data={}}) {
    return $.ajax({
      url: '/api/users/signup',
      type: 'POST',
      data,
      success: (result) => {
        return result
      }
    })
  }
}