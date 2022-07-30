import { defineConfig } from "umi";

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: "/", component: "@/layouts/index", exact: false,
      routes: [
        {
          path: "/", component: "@/pages/index", exact: false,
          // wrappers: ["@/routes/RouteGuard"]
          routes: [
            {
              path: "/students", component: "@/pages/student/students", exact: true,
            },
            {
              path: "/addStudent", component: "@/pages/student/addStudent", exact: true,
            },
          ]
        },
        // {
        //   path: "/login", component: "@/pages/login/index", exact: true,
        //   // wrappers: ["@/routes/RouteGuard"]
        // },
        
      ]
    }
  ],
  dva:{},
  proxy: {
    "/api": {
      "target": "http://localhost:4141/",
      "changeOrigin": true,
    }
  }
});
