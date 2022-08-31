import { Button, Result } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Page404: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="对不起，您访问的页面不存在。"
    extra={<Button type="primary"><Link to="/login">返回登录</Link></Button>}
  />
);

export default Page404;