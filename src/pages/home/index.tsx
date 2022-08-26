
import { Link, Outlet } from 'react-router-dom';

function Home() {
  return <div>
    当前页面是首页：
    <Link type="primary" to="/login">返回login</Link>
    <Link type="success" to="/home/son">进入子级路由</Link>
    <Outlet />
  </div>
}
export default Home;