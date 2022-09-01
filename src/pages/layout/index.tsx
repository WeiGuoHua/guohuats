import React, { useState } from 'react'
import { Layout, Breadcrumb } from 'antd'
import MainMenu from '../../components/MainMenu';
import Logo from '../../assect/logo.png'
import './index.less'
const { Header, Content, Sider, Footer } = Layout;

export default function AppLayout(props: any) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className='container'>
      <Layout>
        <Header className="header">
          <div className="logo">
            <img src={Logo} alt="Logo" style={{ width: '40px', height: "40px" }} /> CIS智慧医院
          </div>
          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={this.items1} /> */}
        </Header>
        <Layout>
          <Sider className='sider' collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
            <MainMenu />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className='content'
            >
              {props.children}
            </Content>
          </Layout>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  )
}