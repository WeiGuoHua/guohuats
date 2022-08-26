import Home from '../pages/home';
import Login from '../pages/login';
import Son from '../pages/son';

const routers = [
  {
    id: 0,
    compontent: Home,
    path: '/home',
    title: '首页',
    children: [
      {
        id: 11,
        path: 'son',
        compontent: Son,
      },
    ],
  },
  { id: 1, compontent: Login, path: '/login', title: '登录' },
];

export default routers;
