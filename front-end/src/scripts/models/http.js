import store from 'store'

export default {
  get({url, type='GET', data={}}) {
    // let token = store.get('token')
    return $.ajax({
      url,
      type,
      data,
      // headers: {
      //   'X-Access-Token': token
      // },
      success: (result, textStatus, jqXHR) => {
        // let token = jqXHR.getResponseHeader('x-access-token')
        // if (token) {
        //   store.set('token', token)
        // }
        return result
      }
    })
  }
}