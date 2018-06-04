<template>
<div>
  <div id="top">
    <div><h3>vue.js知识点</h3></div>
  </div>
  <div id="outer">
    <div id="left" class="textclass">
      <tree :list='list'></tree>
    </div>
    <div id="right">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>
<script>
  import tree from './components/tree.vue'
  export default {
    data () {
      return {
        msg: 'http://localhost/bnzoo/images/logo.png',
        path: this.$route.path,
        list: [
          {
            name: 'Vue.js',
            childer: [
              {
                name: 'Vue安装与配置',
                id: 'config'
              },
              {
                name: 'Vuex',
                id: 'vuex'
              }
            ]
          },
          {
            name: '实例',
            childer: [
              {
                name: '树状结构',
                id: 'tree'
              },
              {
                name: '图片加载',
                id: 'loadimg'
              }
            ]
          }
        ]
      }
    },
    components: {
      tree
    },
    directives: {
      focus: {
        inserted (el) {
          el.focus()
        }
      }
    },
    methods: {
      checkmsg () {
        if (this.msg > 6) {
          this.msg = 6
        } else if (this.msg < 1) {
          this.msg = 1
        }
      }
    }
  }
</script>
<style>
html,body,div,h3{margin:0px;border:0px;padding:0px;}
html,body{
  height: 100%;
  width: 100%;
}
#outer{
  height: 100%;
  width: 100%;
  position: relative;
}
#top{
  position: fixed;
  top: 0;
  border-bottom: 1px solid grey;
  width: 100%;
  height: 38px;
  background: #D5D4D4;
  padding-top: 8px;
  z-index: 1000;
}
#top div{
  padding-left: 30px;
  background: url("./assets/logo.png") no-repeat 4px 5px;
  background-size: 18px 18px;
}
#left{
  position: fixed;
  background: #F7F7F7;
  width: 200px;
  top: 42px;
  bottom: 0px;
  border-right: dotted 1px grey;
  overflow-x: hidden;
  overflow-y: auto;
}
#right{
  margin-left: 230px;
  margin-top: 80px;
  padding-right: 28px;
}
.textclass{
  font-size: 16px;
  line-height: 30px;
}
</style>