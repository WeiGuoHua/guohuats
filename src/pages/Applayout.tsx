import { Layout, Breadcrumb } from 'antd';
import { matchRoutes, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainMenu from '../components/MainMenu';
import routers from '../router/index';
import '../assect/index.less';

const { Header, Content, Footer } = Layout;

export default function AppLayout() {
  const location = useLocation();
  useEffect(() => {
    const routes = matchRoutes(routers, location.pathname); // 返回匹配到的路由数组对象，每一个对象都是一个路由对象
    const pathArr: string[] = [];
      if(routes !== null) {
      routes.forEach((item) => {
        const path = item.route.path;
      if (path) {
        pathArr.push(path);
      }
      })
    }
  }, [location.pathname]);
return (
  <div>
    <Layout className='container'>
      {/* 头部 */}
      <Header className="header">
        <div className="logo">this is logo！</div>
      </Header>
      {/* 内容部分 */}
      <Layout>
        {/* 侧边栏 */}
        <MainMenu />
        {/* 主题页面 */}
        <Layout className='content'>
          <Breadcrumb className='breadcrumb'>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Cppy Right ©2018 Created by WeiGuoHua</Footer>
    </Layout>
  </div>
  )
}