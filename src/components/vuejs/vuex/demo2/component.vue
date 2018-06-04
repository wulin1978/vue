<template>
  <div>
    <span class="tt">全局的State和Getters</span><br>
    this.$store.state.zzz: {{zzz}} <br>
    this.$store.getters.xxx: {{mygetter}} <br><br>

    <span class="tt">moduleA中的State和Getters</span><br>
    <button @click="moduleAmutation">更改moduleA中的xxx</button>
    <button @click="moduleAaction">异步更改moduleA中的xxx</button><br>
    <button @click="moduleAaction2">全局state.zzz+全局getters.xxx+moduleA中state.xxx+moduleA中getters.moduleAgetter大于5时更改moduleA中的xxx</button><br>
    this.$store.state.moduleA.xxx: {{moduleAxxx}} <br>
    this.$store.getters.moduleAgetter: {{moduleAgetter}} <br>
    this.$store.getters.moduleAgetter2: {{moduleAgetter2}}<br><br>

    <span class="tt">moduleB中的State和Getters</span><br>
    <button @click="moduleBmutation">更改moduleB中的yyy</button>
    <button @click="moduleBaction">异步更改moduleB中的yyy</button><br>
    this.$store.state.moduleB.yyy: {{moduleByyy}} <br>
    this.$store.getters.moduleBgetter: {{moduleBgetter}}<br><br>
  </div>
</template>
<script>
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
</script>
<style>
  .tt{background:#8F8E8E;}
</style>