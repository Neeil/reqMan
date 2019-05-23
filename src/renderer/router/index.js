import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'
import tableRouter from './modules/table'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children : [
        {
          path:'index',
          component: () => import('@/views/documentation/index'),
          name : "Documentation",
          meta : { title :'Documentation', icon: 'documentation', affix: true}
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    },
    tableRouter,
  ]
})
