import { createRouter, createWebHistory } from 'vue-router';
// 全局组件
import Home from '../view/Home/Home.vue';
import Login from '../view/Login/Login.vue';
import Layout from '../view/Layout/Layout.vue';
// 普通组件
import DoctorList from '../view/Common/DoctorList/DoctorList.vue';
import FlashTable from '../view/Common/FlashTable/FlashTable.vue';
import FlashForm from '../view/Common/FlashForm/FlashForm.vue';
// 路由
export const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'CIS首页',
        icon: 'HomeFilled',
        component: Home
      },
      {
        path: '/common',
        name: '常用功能',
        icon: 'Operation',
        children: [
          {
            path: '/common/list',
            name: '卡片列表',
            icon: 'Postcard',
            component: DoctorList
          },
          {
            path: '/common/flashTable',
            name: '快速表格',
            icon: 'List',
            component: FlashTable
          },
          {
            path: '/common/flashForm',
            name: '快速表单',
            icon: 'Tickets',
            component: FlashForm
          }
        ]
      },

      {
        path: '/doctor/orderSettings',
        name: '医嘱设置',
        icon: 'Setting',
        children: [
          {
            path: '/doctor/orderSettings/remarksMaintenance',
            name: '备注维护',
            icon: 'DataBoard',
            component: DoctorList
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: '登录',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
