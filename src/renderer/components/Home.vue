<template>
  <div id="wrap">
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="menu"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
        >
          <el-menu-item index="/accountmanage">
            <i class="el-icon-document"></i>
            <span slot="title">微博账号管理</span>
          </el-menu-item>
          <el-menu-item index="/weiboconfig">
            <i class="el-icon-setting"></i>
            <span slot="title">超话任务设置</span>
          </el-menu-item>
          <el-menu-item index="/weiboaction">
            <i class="el-icon-circle-check"></i>
            <span slot="title">超话任务执行</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-button type="primary" icon="el-icon-finished" circle></el-button>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      menu: "/accountmanage"
    };
  },
  watch: {
    $route(to, from) {
      this.setRoute(to.path);
      this.menu = to.path.replace(/\/weiboconfig\S+/i, "/weiboconfig"); // data中放置一个default-active的绑定数据
    }
  },
  computed: {
    ...mapState("handlestate", ["done"]),
    ...mapState("config", ["routePath"])
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    addAccount() {
      this.$store.counter.console.log(this.$store.state.counter.main);
    },
    ...mapMutations("config", ["setRoute"])
  },
  created() {
    this.setRoute(this.$route.path);
    this.menu = this.routePath.replace(/\/weiboconfig\S+/i, "/weiboconfig");
  }
};
</script>

<style scoped>
#wrap {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: rgb(84, 92, 100);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.el-container {
  /* margin-bottom: 40px; */
  height: 100%;
}

.el-menu {
  margin-top: -50px;
  background-color: rgb(84, 92, 100);
  border: none;
}

.el-header {
  background-color: #f0f2f7;
  text-align: right;
}

.el-button.is-circle {
  padding: 10px;
}
</style>
