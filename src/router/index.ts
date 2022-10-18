import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../view/Home/Home.vue';
import Login from '../view/Login/Login.vue';
import Layout from '../view/Layout/Layout.vue';
import EditDoctor from '../view/Doctor/Doctor.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'ccc',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: { title: '首页', path: '/' },
    children: [
      {
        path: 'home',
        component: Home,
        name: 'Home',
        meta: {
          requireAuth: true,
          title: '首页',
          path: '/home'
        },
        children: [
          {
            path: '/home/doctor',
            component: EditDoctor,
            name: 'Doctor',
            meta: {
              requireAuth: true,
              title: '医生编辑',
              path: '/home/doctor'
            }
          }
        ]
      }
    ]
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
