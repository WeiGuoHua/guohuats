import React, { ReactNode, useState } from "react";
import { Layout, Breadcrumb, Space, Dropdown, Menu, Avatar } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import MainMenu from "../../components/MainMenu";
import Logo from "../../assect/logo.png";
import "./index.less";
import { withRouter } from "react-router";

const { Header, Content, Sider, Footer } = Layout;
// 页面主题布局
function AppLayout(props: any) {
  const [collapsed, setCollapsed] = useState(false);
  const [trigger, setTrigger] = useState<ReactNode>(
    <MenuFoldOutlined className="iconFont" />
  );
  const toggle = (collapseds: boolean) => {
    !collapseds
      ? setTrigger(<MenuFoldOutlined className="iconFont" />)
      : setTrigger(<MenuUnfoldOutlined className="iconFont" />);
    setCollapsed(collapseds);
  };
  const signOut = () => {
    console.log(props.history);
    props.history.push("/login");
  };
  return (
    <div className="container">
      <Layout>
        {/* 页面头部 */}
        <Header className="header">
          <div className="header-box">
            <div className="logo">
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "40px", height: "40px" }}
              />{" "}
              React Project
            </div>
            <div className="header-right">
              <Space size={8}>
                <div className="help pointer">帮助</div>
                <div className="about pointer">关于</div>
                <div className="message pointer">消息</div>
                <div className="signOut pointer">
                  <Dropdown
                    overlay={
                      <Menu
                        items={[
                          {
                            key: "1",
                            label: "退出登录",
                            onClick: signOut
                          }
                        ]}
                      />
                    }
                  >
                    <div>
                      <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        style={{
                          backgroundColor: "#00a2ae",
                          verticalAlign: "middle"
                        }}
                        size="large"
                      >
                        张三
                      </Avatar>
                    </div>
                  </Dropdown>
                </div>
              </Space>
            </div>
          </div>
        </Header>
        <Layout>
          {/* 侧边栏 */}
          <Sider
            theme="dark"
            // breakpoint="xxl"
            trigger={trigger}
            onCollapse={toggle}
            className="sider"
            collapsible
            collapsed={collapsed}
          >
            {/* 主菜单 */}
            <MainMenu />
          </Sider>
          <Layout style={{ padding: "0 16px 16px" }}>
            {/* 面包屑 */}
            <Breadcrumb style={{ margin: "8px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content className="content">{props.children}</Content>
          </Layout>
        </Layout>
        {/* 页脚 */}
        <Footer style={{ textAlign: "center" }}>
          Project ©2022 Created by WondersGroup
        </Footer>
      </Layout>
    </div>
  );
}
export default withRouter(AppLayout);
