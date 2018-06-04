<script>
  /* eslint-disable spaced-comment */
  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)
  
  export default new Vuex.Store({
    strict: true,
    state: {
      msg: '这是测试数据'
    },
    mutations: {
      updatemsg (state, message) {
        state.msg = message
      }
    }
  })
</script>