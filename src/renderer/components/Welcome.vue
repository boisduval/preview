<template>
  <div>
    <el-button type="primary" plain @click="addAccount()">导入微博账号</el-button>
    <div class="box-content">这可能是您第一次启动本应用，点击导入微博账号导入.txt后缀的微博账号文件</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box-content {
  border-radius: 5px;
  width: 50vh;
  line-height: 5vh;
  padding: 20px;
  background-color: #409eff;
  color: #fff;
  /* margin-top: 3vh; */
}
</style>