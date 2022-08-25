import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { DatePicker, message } from 'antd';
const Login = () => {
  const [date, setDate]: any = useState(null);
  const handleChange = (value: any) => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
  };
  return <div>
    当前页面是登录：
    <Link type="primary" to="/home">返回home</Link>
      <div >
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
        </div>
      </div>
  </div>
}
export default Login;