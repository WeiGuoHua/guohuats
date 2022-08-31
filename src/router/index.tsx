
import React, { ReactNode } from "react";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";

import { Home, Login, User, Page404 } from "./routeList"

export interface IRouter {
  title: string;
  path: string;
  key?: string;
  exact?: boolean;
  component?: ReactNode;
  children?: any;
  icon?: ReactNode;
}

const routers: IRouter[] = [
  {
    path: "/admin/home",
    key: "home",
    component: <Home />,
    title: '首页',
    icon: <HomeOutlined />
  },
  {
    path: "/admin/user",
    key: "user",
    title: '用户管理',
    icon: <UserOutlined />,
    children: [
      {
        path: "/admin/user/list",
        key: "userList",
        component: <User />,
        title: '用户列表',
      }
    ]
  }
];

const unAuthRouter: IRouter[] = [
  {
    path: "/login",
    key: "login",
    component: <Login />,
    title: '登录'
  },
  {
    path: "*",
    key: "404",
    exact: false,
    component: <Page404 />,
    title: '404'
  },
]

const onRouteBefore = () => {
  // 动态修改页面title
  // const pathname = window.location.pathname;
  // const title = routers.find(item => item.path === pathname)?.title;
  // if (title) {
  //   document.title = title;
  // }
  document.title = '后台管理项目';
}

export {
  routers,
  unAuthRouter,
  onRouteBefore,
};
