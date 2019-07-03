import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/index'),
      children:[{
          path: '/me',
          name: '/me',
            component: () => import('./views/index')
        },{
          path: '/dashboard/homepage',
          name: '/dashboard/homepage',
          component: () => import('./views/dashboard')
        },{
          path: '/me/data-source',
          name: '/me/data-source',
            component: () => import('./views/dataSource')
        },{
          path: '/me/connection',
          name: '/me/connection',
            component: () => import('./views/connection')
        },{
          path: '/me/board/list',
          name: '/me/board/list',
            component: () => import('./views/board')
        }]
    }
  ]
})
