import homeView from '../views/home.art'

export const home = (req, res, next) => {
  res.render(homeView())
}