import { ReactNode, Suspense } from "react";
import { RouteObject } from "react-router-dom";

// 切换页面会出现闪屏现象
// 解决思路：公共页面不采用懒加载的方式 并在App.tsx去除Suspense的包裹
// 用懒加载实现优化
// const AppLayout = lazy(() => import('../pages/appLayout'));
import { Home, Login, AppLayout, User } from "./routeList"
// 实现懒加载的用Suspense包裹 定义函数
const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>;
};

const routers: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    //路由嵌套，子路由的元素需使用<Outlet />
    children: [
      {
        // index: true,
        path: "/home",
        element: lazyLoad(<Home />)
      },
      {
        path: "/user/list",
        element: lazyLoad(<User />)
      },
    ]
  },
  {
    path: "/login",
    element: lazyLoad(<Login />)
  }
];
export default routers;
