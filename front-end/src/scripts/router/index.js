import SMERouter from 'sme-router'

import { home } from '../controllers/home'
import * as position from '../controllers/position'

const router = new SMERouter('content')

router.use((req) => {
  let url = req.url.slice(1)
  $(`.sidebar-menu li[data-url=${url}]`).addClass('active').siblings().removeClass('active')
})

router.route('/home', home)
router.route('/position', position.list)

router.route('*', (req, res, next) => {
  res.redirect('/home')
})

export default router