export default {
  get({url, type='GET', data={}}) {
    return $.ajax({
      url,
      type,
      data,
      dataType: 'json',
      success: (result) => {
        return result
      }
    })
  }
}