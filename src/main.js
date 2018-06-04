// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
/* eslint-disable spaced-comment */

/* 高亮代码 ：须先在NPM中安装highlight.js------npm install highlight.js */
import Hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

Vue.directive('highlight', {
  inserted (el) {
    Hljs.highlightBlock(el)
    el.style.letterSpacing = '1px'
    el.style.borderRadius = '5px'
    el.style.fontSize = '18px'
    el.style.maxHeight = '500px'
  }
})
/* 图片加载指令: 图片加载完成之前用随机颜色填充，但有2个不足， 一是图片加载完成之前不能获取图片的长宽，填充的颜色
只能是固定长宽。二是图片路径只能是绝对路径，因为用webpack编译过的图片路径都是不可预知的（貌似是因为hash值）*/
Vue.directive('img', function (el, binding) {
  let img = new Image()
  img.src = binding.value
  let color = Math.floor(Math.random() * 1000000)
  el.style.background = '#' + color
  el.style.height = 180 + 'px'
  el.style.width = 500 + 'px'
  img.onload = function () {
    el.style.background = 'url(' + binding.value + ') center center no-repeat grey'
  }
})
Vue.directive('import', function (el) {
  el.style.padding = '0 8px'
  el.style.borderRadius = '3px'
  el.style.background = 'black'
  el.style.color = '#fff'
  el.style.fontStyle = 'italic'
})
Vue.directive('demo', function (el) {
  el.style.padding = '8px'
  el.style.background = '#C0BDBD'
  el.style.borderRadius = '5px'
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
