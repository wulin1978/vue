import Vue from 'vue'
import Router from 'vue-router'
import Test from '../components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test/:id',
      name: 'Test',
      component: Test
    }
  ]
})
