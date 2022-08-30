
import { Link } from 'react-router-dom';

function Home() {
  return <div>
    当前页面是首页：
    <Link type="primary" to="/login">返回login</Link>
    <Link type="success" to="/user/list">进入子级路由</Link>
  </div>
}
export default Home;