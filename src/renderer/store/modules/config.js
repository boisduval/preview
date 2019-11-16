const state = {
  active: 0, // 进度
  routePath: "", // 当前路径
  nextPage: "", // 下一步路径
  options: {} // 任务设置
};

const mutations = {
  next(state) {
    if (state.routePath === "/weiboconfig") {
      state.nextPage = state.routePath + "/config1";
    } else {
      var num = state.routePath.match(/.$/)[0];
      num = parseInt(num) + 1;
      state.nextPage = state.routePath.replace(/.$/, num);
      console.log(state.nextPage);
    }
    // state.active = parseInt(state.nextPage.match(/.$/)[0]) - 1
  },
  skip(state) {},
  previous(state, path) {},
  setRoute(state, path) {
    state.routePath = path;
  },
  setActive(state) {
    if (state.routePath === "/weiboconfig") {
      state.active = 0;
    } else {
      state.active = parseInt(state.routePath.match(/.$/)[0]);
    }
  },
  setOptions(state, obj, name) {
    state.options.name = obj;
    console.log(state.options);
  },
  clearOptions(state) {
      state.options = {}
  }
};

const namespaced = true;

export default {
  state,
  namespaced,
  mutations
};
