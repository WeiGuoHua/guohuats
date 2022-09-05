import View from "./components/View";
import { onRouteBefore } from "./router";
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { ConfigProvider } from "antd";
moment.locale('en');
function App() {
  onRouteBefore();
  return (
    <ConfigProvider locale={zhCN} csp={{ nonce: 'YourNonceCode' }}>
      <View />
    </ConfigProvider>);
}
export default App;