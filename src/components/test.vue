<template >
	<div id="app">
		<button @click="t">显示/隐藏</button>
		<transition name="fade-slide">
		<p v-if="show">哈哈哈</p>
		</transition>
	</div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  props: ['pro'],
  methods: {
    t () {
      this.show = !this.show
    }
  }
}
</script>
<style>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all .5s
}
.fade-slide-enter, .fade-slide-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(20px);
}

</style>