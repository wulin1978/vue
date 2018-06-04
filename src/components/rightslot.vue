<template>
  <div>
    <h3><slot name='title'>标题</slot></h3>
    <div class='content'><slot name='content'>内容</slot></div>
  </div>
</template>
<style>
  .content{
    color: #262626;
    margin: 20px 12px 8px 18px;
    line-height: 30px;
  }
</style>