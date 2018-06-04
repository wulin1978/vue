<template>
  <div>
    ooooo
    <com></com>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)
  import com from './component'
  const store = new Vuex.Store({
    state: {
      xxx: '这是State里的原始数据',
      yyy: '这是即将被Mutation更改的数据',
      zzz: '这是即将被Mutation更改的数据，并且Mutation通过Action来触发'
    },
    getters: {
      mygetter(s) {
        return s.xxx + '，现在被用在getter里面，但原始数据本身没有变化'
      }
    },
    mutations: {
      mymutation(s) {
        s.yyy += '——更改完毕'
      },
      mymutation2(st, pay) {
        st.zzz = st.zzz + pay
      }
    },
    actions: {
      myaction(con) {
        con.commit('mymutation2', '——更改完毕')
      },
      myaction2({commit}) {
        commit('mymutation2', '——更改完毕')
      }
    }
  })
  export default {
    components: {
      com
    }
  }
</script>
