<template>
  <div>
    <button @click="test">点击测试</button>
    <button @click="mymutation">mutation更改state.xxx</button>
    <button @click="mymutation2">mutation更改state.yyy</button>
    <button @click="mymutation3('——载荷提交更改完毕')">mutation更改state.zzz</button><br>
    <button @click="action1">action更改state.xxx</button>
    <button @click="action2">action异步更改state.yyy</button>
    <button @click="action3">action异步更改state.zzz，更改成功后执行一个回调函数</button>

    <br>
    xxx：{{xxx}}<br>
    yyy：{{yyy}}<br>
    zzz：{{zzz}}<br>
    mygetter：{{mygetter}}<br>
  </div>
</template>
<script>
  import store from './store.js'
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    store,
    methods: {
      test () {
        console.log(this.$store.state.xxx)
        console.log(this.$store.getters.mygetter)
        this.$store.commit('mymutation')
        console.log(this.$store.state.xxx)
        this.$store.commit('mymutation2')
        console.log(this.$store.state.yyy)
        this.$store.commit('mymutation3', '——这是通过载荷（payload）方式提交的')
        console.log(this.$store.state.zzz)
        this.$store.dispatch('myaction')
        console.log(this.$store.state.zzz)
      },
      mymutation3: function (str) {
        this.$store.commit('mymutation3', str)
      },
      ...mapMutations([
        'mymutation',
        'mymutation2'
      ]),
      ...mapActions({
        action1: 'myaction',
        action2: 'myaction2'
      }),
      action3 () {
        this.$store.dispatch('myaction3').then(() => { alert('更改成功！') })
      }
    },
    computed: {
      ...mapState([
        'xxx',
        'yyy',
        'zzz'
      ]),
      ...mapGetters([
        'mygetter'
      ])
    }
  }
</script>