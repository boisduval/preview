import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: require("@/components/Home").default,
      redirect: "/accountmanage",
      children: [
        // {
        //   path: "/welcome",
        //   name: "welcome",
        //   component: require("@/components/Welcome").default
        // },
        {
          path: "/accountmanage",
          name: "accountmanage",
          component: require("@/components/AccountManage").default
        },
        {
          path: "/weiboconfig",
          name: "weiboconfig",
          component: require("@/components/WeiboConfig").default,
          // redirect: "/weiboconfig/config1",
          children: [
            {
              path: "/",
              name: "config",
              component: require("@/components/Config").default
            },
            {
              path: "/weiboconfig/config1",
              name: "config1",
              component: require("@/components/Config1").default
            },
            {
              path: "/weiboconfig/config2",
              name: "config2",
              component: require("@/components/Config2").default
            },
            {
              path: "/weiboconfig/config3",
              name: "config3",
              component: require("@/components/Config3").default
            },
            {
              path: "/weiboconfig/config4",
              name: "config4",
              component: require("@/components/Config4").default
            }
          ]
        },
        {
          path: "/weiboaction",
          name: "weiboaction",
          component: require("@/components/WeiboAction").default
        }
      ]
    },
    {
      path: "/homePage",
      name: "homePage",
      component: require("@/components/HomePage").default
    }
  ]
});

router.beforeEach((to, from, next) => {
  // console.log(to, from);

  if (to.name === "homePage") {
    next();
  } else {
    // flag 判断是否已经导入
    const flag = "content";
    if (!flag) {
      router.push({
        name: "homePage"
      });
    } else {
      next();
    }
  }
});

export default router;
