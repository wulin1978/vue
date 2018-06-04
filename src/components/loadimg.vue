<template>
  <div>
    <rightslot>
      <div slot='title'>图片加载</div>
      <div slot='content'>
        <p>这是模仿谷歌图片的加载，在图片未完成加载前，用随机的背景色占位，图片加载完成后才直接渲染出来。自定义指令代码如下：</p>
        <pre v-highlight><code>Vue.directive('img', {
  inserted (el,binding) {
    el.style.width = 120 + 'px'
    el.style.height = 80 + 'px'
    /* 设置随机背景色 */
    let color = Math.floor(Math.random()*1000000)
    el.style.background = '#' + color
    /* 加载图片 */
    let img = new Image()
    img.src = binding.value
    /* 图片加载完后设置背景为图片 */
    img.onload = function () {
      el.style.background = 'url(' + binding.value + ')'
    }
  }
})
</code></pre>
        <p>在需要放置图片的地方插入如下代码：</p>
        <pre v-highlight><code>&ltdiv v-img='[图片绝对路径]'&gt&lt/div&gt</code></pre>
        <div>
          效果：
          <div v-img='imgurl'></div>
          <h5>注：该方法有2个不足， 一是图片加载完成之前不能获取图片的长宽，填充的颜色
只能是固定长宽。二是图片路径只能是绝对路径，因为用webpack编译过的图片路径都是不可预知的（貌似是因为hash值）</h5>
        </div>
      </div>
    </rightslot>
  </div>
</template>
<script>
  import rightslot from './rightslot'
  export default {
    name: 'loadimg',
    data () {
      return {
        imgurl: 'http://localhost/bnzoo/images/logo.png'
      }
    },
    components: {
      rightslot
    }
  }
</script>
<style>
</style>