<template>
  <div id="config">
    <div class="box">
      <el-steps :active="active" align-center>
        <el-step title="步骤1"></el-step>
        <el-step title="步骤2"></el-step>
        <el-step title="步骤3"></el-step>
        <el-step title="步骤4"></el-step>
        <el-step title="步骤5"></el-step>
      </el-steps>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("config", ["active"])
  },
  methods: {
    ...mapMutations("config", ["clearOptions"])
  },
  created() {
    this.clearOptions();
  }
};
</script>

<style scoped>
/* #config h1 {
  text-align: center;
  font-size: 24px;
} */
#config {
  max-width: 800px;
  margin: 0 auto;
}
</style>
