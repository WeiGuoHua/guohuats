
import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Link } from 'react-router-dom';
import { IRouter, routers } from '../router';
// 左侧菜单递归
export default function MainMenu() {
  const generateMenu = (data: IRouter[]) => {
    return data.map((item: any) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            icon={<UserOutlined />}
            title={item.title}
          >
            {generateMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.path}>{item.title}</Link>
        </Menu.Item>
      );
    })
  }
  // 生成动态菜单
  return (
    <Menu
      mode="inline"
      style={{ height: '100%', borderRight: 0 }}
      theme="dark"
      // defaultOpenKeys={['user']}
      // defaultSelectedKeys={['userList']}
    >
      {generateMenu(routers)}
    </Menu>
  )
};
