<template>
  <div>
    <rightslot>
      <div slot="title">Vuex的安装</div>
      <div slot="content">
        打开命令行工具或Git Bash Here，输入<span v-import>npm install vuex --save</span>安装，在模块里写下如下代码：
        <pre><code v-highlight>import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)</code></pre>
      </div>
    </rightslot>
    <br><br>
    <rightslot>
      <div slot="title">核心概念</div>
      <div slot="content">
        vuex的核心概念包含：State、Getter、Mutation、Action、Module
        <h4>1、State</h4>
        State 顾名思义就是指的状态，它里面包含了一系列的数据以便各个模块引用，其实它和全局变量的作用是一样的，state 和普通的全局变量有下面2点区别：
        <ul>
          <li>state 是响应式的，如果在多个模块引用了 state 里面的数据，在某一个模块改变了其值，在其他模块的 state 也会<b>实时</b>发生变化。</li>
          <li>state 里面的数据不能直接更改，必须通过提交 mutation 的方式来更改。</li>
        </ul>
        引用 State 使用<span v-import>store.state</span>，在模块中引用 State 使用<span v-import>this.$store.state</span>。如果不是全局 State 而是属于某一个Module，那么引用该 State 使用<span v-import>store.state.Module名称</span>。
        <h4>2、Getter</h4>
        Getter就相当于State的计算属性，getter的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。Getter中函数的第一个参数为<span v-import>state</span>，第二个参数为<span v-import>getter</span>，如果Getter是属于局部Module，那么Getter还有第三个和第四个参数分别是<span v-import>rootState</span>和<span v-import>rootGetter</span>。引用Getter使用<span v-import>store.getters</span>，在模块中引用Getter使用<span v-import>this.$store.getters</span>。
        <h4>3、Mutation</h4>
        更改 Vuex 的 store 中的状态的唯一方法是提交 mutation，提交 mutation 使用<span v-import>store.commit('xxx')</span>，在模块中提交 mutation 使用<span v-import>this.$store.commit('xxx')</span>，如果Mutation不属于全局而属于Module且Module使用了命名空间（namespaced: true），提交 mutation 使用<span v-import>store.commit('Module名称/xxx')</span>（注意：只有Module使用了命名空间才这么提交，否则和正常 mutation 一样提交）。Mutation中函数第一个参数是<span v-import>state</span>，如果Mutation属于Module，那么Mutation中函数第一个参数就是 Module 局部的 state。
        <h4>4、Action</h4>
        Action 类似于 mutation，不同在于：
        <ul>
          <li>Action 提交的是 mutation，而不是直接变更状态。</li>
          <li>Action 可以包含任意异步操作。</li>
        </ul>
        Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此可以调用<span v-import>context.commit</span>提交一个 mutation，调用<span v-import>context.dispatch</span>提交另一个 action，通过<span v-import>context.state</span>和<span v-import>context.getters</span>来获取 state 和 getters。如果是局部的Action，可以调用<span v-import>context.commit('xxx', null, {root: true})</span>提交一个全局 mutation，可以调用<span v-import>context.dispatch('xxx', null, {root: true})</span>提交一个全局 action，可以通过<span v-import>context.rootState</span>和<span v-import>context.rootGetters</span>来获取全局 state 和 getters。Action 通过<span v-import>store.dispatch('xxx')</span>方法触发，在模块中通过<span v-import>this.$store.dispatch('xxx')</span>触发。如果 Action 属于局部 Module ，并且 Module 设置了命名空间，触发该 Action 需加上命名空间：<span v-import>store.dispatch('Module名称/xxx')</span>（注意：只有Module使用了命名空间才这么提交，否则和正常 action 一样提交）。
        <h4>5、Module</h4>
        由于Vuex使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。Module就是用来解决这个问题的。Vuex 允许将 store 分割成若干模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割。<br>
        获取 Module 中的 State：<span v-import>store.state.module名称</span>，获取 Module 中的 Getters 以及调用 Module 中的 Mutations、Actions 和没有 Module 的情况一样。但如果 Module 设定了命名空间，那么获取 Module 中的 Getters用：<span v-import>store.getters['module名称/xxx']</span>，调用 Mutations 用：<span v-import>store.commit('module名称/xxx')</span>，调用 Actions 用：<span v-import>store.dispatch('module名称/xxx')</span>。
      </div>
    </rightslot><br>
    <rightslot>
      <div slot="title">代码实例</div>
      <div slot="content">
        <h4>1、一个简单的实例（demo1）</h4>
        定义store(demo1/store.js)：
<pre><code v-highlight>/* store.js */
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
    mygetter (s) { // getter函数第一个参数值等于state,所以s.xxx===state.xxx
      return [s.xxx, s.yyy, s.zzz]
    }
  },
  mutations: {
    mymutation: function (s) { // mutation函数第一个参数值等于state,所以s.xxx===state.xxx
      s.xxx += '——更改完毕'
    },
    mymutation2: function (s) {
      s.yyy += '——更改完毕'
    },
    mymutation3: function (s, pay) { // 该mutation函数包含一个载荷“pay”，用 commit 提交 mymutation3 时必须包含一个载荷
      s.zzz += pay
    }
  },
  actions: {
    myaction (con) {
      con.commit('mymutation', '——更改完毕')
    },
    myaction2 ({commit}) { // action 实现异步提交 mutation
      setTimeout(() => {
        commit('mymutation2', '——更改完毕')
      }, 1000)
    },
    myaction3 ({commit}) { // myaction3返回一个Promise，dispach('myaction3')返回的也是一个Promise，所以可以用dispach('myaction3').then()实现一个回调函数
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('mymutation3', '——更改完毕')
          resolve()
        }, 1000)
      })
    }
  }
})</code></pre>
        在模块中引用store(demo1/component.vue):
<pre><code v-highlight>&lttemplate&gt
  &ltdiv&gt
    &ltbutton @click="test"&gt点击测试&lt/button&gt
    &ltbutton @click="mymutation"&gtmutation更改xxx&lt/button&gt
    &ltbutton @click="mymutation2"&gtmutation更改yyy&lt/button&gt
    &ltbutton @click="mymutation3('——载荷提交更改完毕')"&gtmutation更改zzz&lt/button&gt&ltbr&gt
    &ltbutton @click="action1"&gtaction更改xxx&lt/button&gt
    &ltbutton @click="action2"&gtaction更改yyy&lt/button&gt
    &ltbutton @click="action3"&gtaction更改zzz&lt/button&gt
    &ltbr&gt
    xxx：&ltspan v-html='xxx'&gt&lt/span&gt&ltbr&gt
    yyy：&ltspan v-html='yyy'&gt&lt/span&gt&ltbr&gt
    zzz：&ltspan v-html='zzz'&gt&lt/span&gt&ltbr&gt
    mygetter：&ltspan v-html='mygetter'&gt&lt/span&gt&ltbr&gt
  &lt/div&gt
&lt/template&gt
&ltscript&gt
  import store from './store.js'
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  /* mapState, mapGetters 可以很方便的在 computed 中建立和State,Getters关联的计算属性。
  mapMutations, mapActions 可以很方便的在 methods 中建立和Mutations, Actions 关联的方法 */

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
      mymutation3: function (str) { //提交带有载荷的 Mutations
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
      /* 因为myaction3返回了一个Promis，所以this.$store.dispatch('myaction3')返回的也是一个Promis，后面可以跟一个then执行回调函数 */
        this.$store.dispatch('myaction3').then(() => { console.log('成功了') })
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
&lt/script&gt</code></pre>
        效果：
        <div v-demo>
          <demo1></demo1>
        </div>
        <h4>2、包含Module和命名空间的实例（demo2）</h4>
        定义store(demo2/store.vue)：
<pre><code v-highlight>&ltscript&gt
  /* eslint-disable spaced-comment */
  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)

  const moduleA = {
    state: {
      xxx: 1
    },
    getters: {
      /*Getters函数的第一个参数就是其所在module的局部State,这里的参数s就等于moduleA的State*/
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
      /*action中的第一个参数等于context，context是和store 实例具有相同方法和属性的对象，context包含commit属性、state属性、getters属性、rootState属性、rootGetters属性*/
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
        if (c.state.xxx + c.rootState.zzz + c.rootGetters.xxx + c.getters.moduleAgetter &gt 5) {
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
        /* 全局 State 属性包含所有 Module，所以只要能获取全局 State 就能获取所有 Module 中的 state */
        console.log('moduleA.xxx：' + s.moduleA.xxx)
        console.log('moduleB.yyy：' + s.moduleB.yyy)
        return s.zzz + 1
      }
    },
    modules: {
      moduleA,
      moduleB
    }
  })
&lt/script&gt</code></pre>
        在模块中引用store(demo2/component.vue)：
<pre><code v-highlight>&lttemplate&gt
  &ltdiv&gt
    &ltspan class="tt"&gt全局的State和Getters&lt/span&gt&ltbr&gt
    this.$store.state.zzz: { {zzz}} &ltbr&gt
    this.$store.getters.xxx: { {mygetter}} &ltbr&gt&ltbr&gt

    &ltspan class="tt"&gtmoduleA中的State和Getters&lt/span&gt&ltbr&gt
    &ltbutton @click="moduleAmutation"&gt更改moduleA中的xxx&lt/button&gt
    &ltbutton @click="moduleAaction"&gt异步更改moduleA中的xxx&lt/button&gt&ltbr&gt
    &ltbutton @click="moduleAaction2"&gt全局state.zzz+全局getters.xxx+moduleA中state.xxx+moduleA中getters.moduleAgetter大于5时更改moduleA中的xxx&lt/button&gt&ltbr&gt
    this.$store.state.moduleA.xxx: { {moduleAxxx}} &ltbr&gt
    this.$store.getters.moduleAgetter: { {moduleAgetter}} &ltbr&gt
    this.$store.getters.moduleAgetter2: { {moduleAgetter2}}&ltbr&gt&ltbr&gt

    &ltspan class="tt"&gtmoduleB中的State和Getters&lt/span&gt&ltbr&gt
    &ltbutton @click="moduleBmutation"&gt更改moduleB中的yyy&lt/button&gt
    &ltbutton @click="moduleBaction"&gt异步更改moduleB中的yyy&lt/button&gt&ltbr&gt
    this.$store.state.moduleB.yyy: { {moduleByyy}} &ltbr&gt
    this.$store.getters.moduleBgetter: { {moduleBgetter}}&ltbr&gt&ltbr&gt
  &lt/div&gt
&lt/template&gt
&ltscript&gt
  import store from './store'
  import { mapState, mapGetters } from 'vuex'

  export default {
    store,
    computed: {
      moduleAgetter () { // 由于moduleA没有设置命名空间，获取moduleA中的getters就跟正常获取getters一样
        return this.$store.getters['moduleAgetter']
      },
      moduleAgetter2 () {
        return this.$store.getters['moduleAgetter2']
      },
      moduleBgetter () { // 由于moduleB设置了命名空间,获取moduleB中的Getters需加上命名空间
        return this.$store.getters['moduleB/moduleBgetter']
      },
      ...mapState([
        'zzz'
      ]),
      ...mapState({ // 用 mapState 绑定 Module 中的 State，函数第一个参数是 State，前面我们已经知道只要获取了全局 State 就能获取所有 Module 中的数据
        'moduleAxxx': state => state.moduleA.xxx,
        'moduleByyy': state => state.moduleB.yyy
      }),
      ...mapGetters({
        mygetter: 'xxx'
      })
    },
    methods: {
      moduleAmutation () { // moduleA没有设置命名空间，提交moduleA中的 Mutations, Action 就跟正常提交一样
        this.$store.commit('moduleAmutation')
      },
      moduleBmutation () { // 由于moduleB设置了命名空间，所以提交moduleB中的 Mutations, Actions 需加上命名空间
        this.$store.commit('moduleB/moduleBmutation')
      },
      moduleAaction () {
        this.$store.dispatch('moduleAaction').then(() => { console.log('更改成功！') })
      },
      moduleAaction2 () {
        this.$store.dispatch('moduleAaction2')
      },
      moduleBaction () {
        this.$store.dispatch('moduleB/moduleBaction').then(() => { console.log('更改成功！') })
      }
      /* Action 也可以用 mapActions 绑定(前提是必须先 import { mapActions } from 'Vuex')：
      ...mapActions({
        'moduleAaction': 'moduleAaction',
        'moduleAaction2': 'moduleAaction',
        'moduleBaction': 'moduleB/moduleBaction'
      })
      */
    }
  }
&lt/script&gt
&ltstyle&gt
  .tt{background:#8F8E8E;}
&lt/style&gt</code></pre>
        效果：
        <div v-demo>
          <demo2></demo2>
        </div>
        <h4>3、表单处理 Vuex 的实例（demo3）</h4>
        在表单中使用 v-model 时：
        <pre><code v-highlight>&ltinput v-model="msg"&gt</code></pre>
        假设这里的 msg 是在计算属性中返回的一个属于 Vuex store 的对象，在用户输入时，v-model 会试图直接修改 store.state，这违反了 mutations 是修改 state 的唯一方法（直接修改state就不能达到响应的目的），正确的方法是使用带有 setter 的双向绑定计算属性。<br>
        定义store(demo3/store.vue)：
<pre><code v-highlight>&ltscript&gt
  /* eslint-disable spaced-comment */
  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)
  
  export default new Vuex.Store({
    strict: true, // 开启严格模式
    state: {
      msg: '这是测试数据'
    },
    mutations: {
      updatemsg (s, message) {
        s.msg = message
      }
    }
  })
&lt/script&gt
</code></pre>
          在模块中引用store(demo3/component.vue)：
<pre><code v-highlight>&lttemplate&gt
  &ltdiv&gt
    &ltinput type="text" v-model="msg"&gt&ltbr&gt&ltbr&gt{{msg}}
  &lt/div&gt
&lt/template&gt
&ltscript&gt
  import store from './store'

  export default {
    store,
    computed: {
      msg: {
        get () {
          return this.$store.state.msg
        },
        set (value) {
          this.$store.commit('updatemsg', value)
        }
      }
    }
  }
&lt/script&gt</code></pre>
        <div v-demo>
          <demo3></demo3>
        </div>
      </div>
    </rightslot>
  </div>
</template>
<script>
  import rightslot from '@/components/rightslot'
  import demo1 from './demo1/component'
  import demo2 from './demo2/component'
  import demo3 from './demo3/component'
  export default {
    components: {
      rightslot,
      demo1,
      demo2,
      demo3
    }
  }
</script>