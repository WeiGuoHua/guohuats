
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { clear } from '../../utils/storage';
function Home() {
  const backLogin = () => {
    console.log("backLogin");
    clear();
    
  }
  const clearStorge = () => {
    clear()
  }
  return <div>
    当前页面是首页：
    <Button onClick={backLogin}>退出</Button>
    <Button onClick={clearStorge}>清楚缓存</Button>
    <Link to="/admin/user">进入子级路由</Link>
  </div>
}
export default Home;