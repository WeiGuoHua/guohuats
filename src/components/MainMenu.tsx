
import { UserOutlined } from '@ant-design/icons';

import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import SubMenu from 'antd/lib/menu/SubMenu';
import React, { useEffect, useState } from 'react';
import { Link, matchRoutes, useLocation } from 'react-router-dom';
import routers from '../router';

const MainMenu: React.FC = () => {
  const location = useLocation();
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>([]);
  const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>([]);
  const [isInit, setIsInit] = useState<Boolean>(false)
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    const routes = matchRoutes(routers, location.pathname); // 返回匹配到的路由数组对象，每一个对象都是一个路由对象
    const pathArr: string[] = [];
    if (routes !== null) {
      routes.forEach((item) => {
        const path = item.route.path;
        if (path) {
          pathArr.push(path);
        }
      })
    }
    setDefaultSelectedKeys(pathArr);
    setDefaultOpenKeys(pathArr);
    setIsInit(true);
  }, [location.pathname]);
  if (!isInit) {
    return null;
  }
  return (
    <div className='sider'>
      <Sider style={{ height: "100%" }} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo" />
        <Menu
          mode="inline"
          defaultSelectedKeys={defaultSelectedKeys}
          defaultOpenKeys={defaultOpenKeys}
          style={{ height: '100%', borderRight: 0 }}
          theme="dark"
        >
          <Menu.Item key="1" icon={<UserOutlined />} >
            <Link to='/home'>首页</Link>
          </Menu.Item>
          <SubMenu key="/user" icon={<UserOutlined />} title="用户管理">
            <Menu.Item key="3">
              <Link to='/user/list'>用户信息</Link>
            </Menu.Item>

          </SubMenu>

        </Menu>
      </Sider>

    </div>
  );
};

export default MainMenu;