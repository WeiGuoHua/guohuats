
import { UserOutlined } from '@ant-design/icons';

import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import SubMenu from 'antd/lib/menu/SubMenu';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IRouter, routers } from '../router';


export default class MainMenu extends Component {
  generateMenu = (data: IRouter[]) => {
    return data.map((item: any) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            icon={<UserOutlined />}
            title={item.title}
          >
            {this.generateMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.path}>{item.title}</Link>
        </Menu.Item>
      );
    }
    )
  }
  // 生成动态菜单
  render() {
    return (
      <div className='sider'>
        <Sider
          style={{ height: "100%" }}
          collapsible 
          collapsed={false}
          // onCollapse={value => setCollapsed(value)}
        >
          <div className="logo" />
          <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
            theme="dark"
            // items={this.generateMenu(routers)}
          >
            {this.generateMenu(routers)}
          </Menu>
        </Sider>

      </div>
    )
  };
};
