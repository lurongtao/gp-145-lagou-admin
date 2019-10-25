import positionView from '../views/position.art'

export const list = (req, res) => {
  res.render(positionView())
}