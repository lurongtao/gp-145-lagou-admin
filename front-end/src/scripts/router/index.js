import SMERouter from 'sme-router'

import { home } from '../controllers/home'
import * as position from '../controllers/position'

import titleView from '../views/title.art'

const router = new SMERouter('content')

router.use((req) => {
  let url = req.url.slice(1).split('_')[0]

  // 高亮处理
  $(`.sidebar-menu li[data-url=${url}]`).addClass('active').siblings().removeClass('active')

  // 面包屑
  let BreadcrumbMap = {
    'home': {
      level1: '管理系统',
      level2: '首页'
    },
    'position': {
      level1: '管理系统',
      level2: '职位管理'
    }
  }
  let TitleMap = {
    'home': {
      title: '首页',
      subtitle: '欢迎你'
    },
    'position': {
      title: '职位管理',
      subtitle: '职位管理'
    }
  }

  let info = {
    Breadcrumb: {
      level1: BreadcrumbMap[url].level1,
      level2: BreadcrumbMap[url].level2
    },
    Title: {
      title: TitleMap[url].title,
      subtitle: TitleMap[url].subtitle
    }
  }

  let html = titleView({
    title: info.Title,
    breadcrumb: info.Breadcrumb
  })
  $('.content-header').html(html)
})

window.router = router

router.route('/home', home)
router.route('/position', position.list)
router.route('/position_add', position.add)
router.route('/position_update', position.update)

router.route('*', (req, res, next) => {
  res.redirect('/home')
})

export default router