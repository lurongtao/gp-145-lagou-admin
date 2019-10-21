import layoutView from '../views/layout.art'

class Layout {
  constructor() {
    this.render()
  }

  render() {
    let html = layoutView()
    $('#root').html(html)
  }
}

export default new Layout()