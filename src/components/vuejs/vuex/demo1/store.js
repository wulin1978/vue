import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    xxx: 'xxx',
    yyy: 'yyy',
    zzz: 'zzz'
  },
  getters: {
    mygetter (s) {
      return [s.xxx, s.yyy, s.zzz]
    }
  },
  mutations: {
    mymutation (s) {
      s.xxx += '——更改完毕'
    },
    mymutation2 (st) {
      st.yyy += '——更改完毕'
    },
    mymutation3 (st, pay) {
      st.zzz += pay
    }
  },
  actions: {
    myaction (con) {
      con.commit('mymutation', '——更改完毕')
    },
    myaction2 ({commit}) {
      setTimeout(() => {
        commit('mymutation2', '——更改完毕')
      }, 1000)
    },
    myaction3 ({commit}) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('mymutation3', '——更改完毕')
          resolve()
        }, 1000)
      })
    }
  }
})
