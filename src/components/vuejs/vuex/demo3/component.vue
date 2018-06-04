<template>
  <div>
    <input type="text" v-model="msg"><br><br>{{msg}}
  </div>
</template>
<script>
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
</script>