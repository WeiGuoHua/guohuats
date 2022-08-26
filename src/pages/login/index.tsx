import React, { RefObject, createRef, Component } from 'react';
import { Form, Button, FormInstance, Input, Space, message } from 'antd';
import './login.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
class Login extends Component {
  formRef: RefObject<FormInstance>
  constructor(props: any, context: any) {
    super(props, context);
    this.formRef = createRef();
  }
  onFinish = (values: any) => {
    message.success('登录成功！')
    localStorage.setItem('token', 'token')
    console.log(values);
  };

  render(): React.ReactNode {
    return <div className='login'>
      <Form {...layout} className='login-form' onFinish={this.onFinish}>
        <Form.Item label="用户名" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Button type="primary" htmlType="reset">
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>;
  }
}

export default Login;
