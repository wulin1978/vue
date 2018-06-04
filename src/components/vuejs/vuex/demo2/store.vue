<script>
/* eslint-disable spaced-comment */
  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)

  const moduleA = {
    state: {
      xxx: 1
    },
    getters: {
      /*Getters函数的第一个参数就是其所在module的局部State,这里的参数s就等于moduleA的state*/
      moduleAgetter: (s) => {
        return s.xxx + 1
      },
      /*getters函数的第二个参数就是其所在module的局部Getter*/
      /*getters函数的第三个参数RootState,就是全局State*/
      /*getters函数的第四个参数rootGetters,就是全局Getters*/
      moduleAgetter2: (state, getters, rootState, rootGetters) => {
        return {
          'moduleA中的State.xxx': state.xxx,
          'moduleA中的moduleAgetter': getters.moduleAgetter,
          '根store中的state.zzz': rootState.zzz,
          '根store中的getters.xxx': rootGetters.xxx
        }
      }
    },
    mutations: {
      /*Mutations函数的第一个参数就是其所在module的局部State,这里的参数s就等于moduleA的State*/
      moduleAmutation: (s) => {
        s.xxx ++
      }
    },
    actions: {
      /*action中的第一个参数等于context， context是和store 实例具有相同方法和属性的对象，context包含commit属性、state属性、getters属性、rootState属性、rootGetters属性*/
      /*context.commit用来提交Mutation，context.state可以获取当前的局部state，context.getters可以获取当前的局部getters，context.rootState可以获取全局state，context.rootGetters可以获取全局Getters*/
      moduleAaction (c) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            c.commit('moduleAmutation')
            resolve()
          }, 1000)
        })
      },
      moduleAaction2 (c) {
        if (c.state.xxx + c.rootState.zzz + c.rootGetters.xxx + c.getters.moduleAgetter > 5) {
          c.commit('moduleAmutation')
        }
      }
    }
  }

  const moduleB = {
    /* 设置命名空间后从模块中获取moduleB中的Getters或者提交moduleB中的Mutations和Actions需加上命名空间 */
    /*加名命名空间就是在Getters、Mutations或Actions前面加上“moduleB/”，就好似Getters、Mutations或Actions是在moduleB文件夹下一样*/
    namespaced: true, // 设置命名空间
    state: {
      yyy: 2
    },
    getters: {
      moduleBgetter: (s) => {
        return s.yyy + 1
      }
    },
    mutations: {
      moduleBmutation: (s) => {
        s.yyy ++
      }
    },
    actions: {
      moduleBaction (c) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            c.commit('moduleBmutation')
            resolve()
          }, 1000)
        })
      }
    }
  }

  export default new Vuex.Store({
    state: {
      zzz: 0
    },
    getters: {
      xxx (s) {
        /* 全局 state 属性包含所有 Module，所以只要能获取全局 state 就能获取所有 Module 中的 state */
        console.log('state.moduleA.xxx：' + s.moduleA.xxx)
        console.log('state.moduleB.yyy：' + s.moduleB.yyy)
        return s.zzz + 1
      }
    },
    modules: {
      moduleA,
      moduleB
    }
  })
</script>