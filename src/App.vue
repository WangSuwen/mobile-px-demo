<template>
  <div id="app">
    <div class="test-viewport">测试转换</div>
    <van-tabs v-model="active">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      active: 2
    };
  },
    created() {
        
    }
}
</script>

<style lang="less" scoped>
.test-viewport {
  width: 750px;
  height: 100px;
  font-size: 40px;
  text-align: center;
  line-height: 100px;
  background: #13b5b1;
}
</style>
