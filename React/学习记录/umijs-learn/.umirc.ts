// 这里进行配置修改

export default {
  npmClient: 'npm',
  routes: [
    {
      exact: false,
      path: '/',
      component: "/index"
    },
    {
      exact: true,
      path: "/docs",
      component: "/docs"
    },
    {
      exact: true,
      path: "/test",
      component: "/test"
    },
    {
      exact: false,
      path: "/sub",
      component: '/sub/_layout',
      routes: [
        { 
          exact: true,
          path: "/sub",
          componet: "/sub/index"
        },
        {
          exact: true,
          path: "/sub/a",
          component: "/sub/a"
        }
      ]
    }
  ]
};
