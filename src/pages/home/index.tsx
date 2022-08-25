
import { Link } from 'react-router-dom';

function Home() {
  return <div>
    当前页面是首页：
    <Link type="primary" to="/login">返回login</Link>
  </div>
}
export default Home;