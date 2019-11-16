<template>
  <div class="box">
    <h1>设置单步任务执行间隔</h1>
    <el-form ref="form" :model="form" label-width="130px">
      <el-form-item label="单步任务执行间隔">
        <el-col :span="15">
          <el-input v-model="form.time" placeholder="单行输入"></el-input>
        </el-col>
        <el-col class="line" :span="2">&nbsp;</el-col>
        <el-col :span="5">
          <el-select v-model="form.type">
            <el-option label="秒" value="seconds"></el-option>
            <el-option label="分" value="minutes"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
    </el-form>
    <div class="action">
      <router-link
        :to="{ path: nextPage }"
        tag="el-button"
        @click.native="setOptions(form, name)"
        >下一步</router-link
      >
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
        time: "",
        type: "seconds"
      },
      name: "intervalTime"
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
