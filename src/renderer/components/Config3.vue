<template>
  <div class="box">
    <h1>配置发帖任务</h1>
    <el-form ref="form" :model="form" label-width="130px">
      <el-form-item label="代理IP源类型：">
        <el-select v-model="form.type" placeholder="来自网络">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="代理IP源地址：">
        <el-input v-model="form.address" placeholder="单行输入"></el-input>
      </el-form-item>
      <el-form-item label="代理IP源端口号：">
        <el-input v-model="form.port" placeholder="单行输入"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>测试联通</el-button>
      </el-form-item>
    </el-form>
    <div class="action">
      <router-link :to="{ path: nextPage }" tag="el-button" @click.native="setOptions(form, name)">下一步</router-link>
      <router-link :to="{ path: nextPage }" tag="el-button">跳过</router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      form: {
        address: "",
        port: "",
        type: ""
      },
      name: "postMessage"
    };
  },
  computed: {
    ...mapState("config", ["active", "routePath", "nextPage", "options"])
  },
  methods: {
    ...mapMutations("config", ["next", "skip", "setActive", "setOptions"])
  },
  created() {
    this.setActive();
    this.next();
  }
};
</script>

<style scoped>
.el-form {
  margin-top: 40px;
  border: 1px solid #ccc;
  padding: 30px;
}

.box {
  width: 70%;
  margin: 0 15%;
  overflow: hidden;
}

.action {
  margin-top: 30px;
  float: right;
  margin-right: 20px;
}

.box h1 {
  font-size: 30px;
  text-align: center;
  margin-top: 40px;
}
</style>
