
import { Form, Button, Input, Space, message } from 'antd';
import { Link } from 'react-router-dom';
import { set } from '../../utils/storage';
import './login.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Login() {
  function onFinish(values: any) {
    message.success('登录成功！')
    set('token', '123456');
  };

  return <div className='login'>
    <Form {...layout} className='login-form' onFinish={onFinish}>
      <Form.Item label="用户名" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="密码" name="password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            <Link to="/admin/home">登录</Link>
          </Button>
          <Button type="primary" htmlType="reset">
            重置
          </Button>
        </Space>
      </Form.Item>
    </Form>
  </div>;
}

export default Login;
