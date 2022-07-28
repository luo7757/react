import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { 
  //     path: '/', 
  //     component: '@/layouts/index', 
  //     exact: false,
  //     routes: [
  //       {
  //         exact: true,
  //         path: "/",
  //         component: "@/pages/index",
  //         meta: {
  //           name: "主页"
  //         },
  //         // wrappers 相当于一个高阶组件 在渲染component之前，先将component传递进wrappers数组中的组件依次
  //         // 处理后，才最终渲染最后一个wrappers返回的组件
  //         wrappers: ['@/routes/HandleTitle']
  //         // title: "主页"
  //       },
  //       {
  //         exact: true,
  //         path: "/docs",
  //         component: "@/pages/docs",
  //         meta: {
  //           name: "文档"
  //         },
  //         wrappers: ['@/routes/HandleTitle']
  //         // title: "文档"
  //       },
  //       {
  //         exact: true,
  //         path: "/test",
  //         component: "@/pages/test",
  //         meta: {
  //           name: "测试"
  //         },
  //         wrappers: ['@/routes/HandleTitle']
  //         // title: "测试"
  //         // title umi提供的设置标题的配置
  //       },
  //       {
  //         exact: false,
  //         path: "/sub",
  //         component: "@/pages/sub/_layout",
  //         routes: [
  //           {
  //             exact: true,
  //             path: "/sub",
  //             component: "@/pages/sub/index",
  //             meta: {
  //               name: "sub页"
  //             },
  //             wrappers: ['@/routes/HandleTitle']
  //             // title: "sub页"
  //           },
  //           {
  //             exact: true,
  //             path: "/sub/a",
  //             component: "@/pages/sub/a",
  //             meta: {
  //               name: "a页"
  //             },
  //             wrappers: ['@/routes/HandleTitle']
  //             // title: "a页"
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //   }
  // ],
 dva: {
  // immer: true, //这个插件不建议使用，会改变书写/直觉习惯
 },
 proxy: {
  // 代理转发
  // "/api" : {
  //   "target": "open.duyiedu.com",
  //   "changeOrigin": true
  // }
 }
});
