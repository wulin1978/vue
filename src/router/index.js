import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Loadimg from '@/components/loadimg'
import Tree from '@/components/example/treelist'
import Config from '@/components/vuejs/config/index.vue'
import Vuex from '@/components/vuejs/vuex/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/loadimg',
      name: 'Loadimg',
      component: Loadimg
    },
    {
      path: '/tree',
      name: 'Tree',
      component: Tree
    },
    {
      path: '/config',
      name: 'Config',
      component: Config
    },
    {
      path: '/vuex',
      name: 'Vuex',
      component: Vuex
    }
  ]
})
