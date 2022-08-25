import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home";
import Login from "../pages/login";
import { ConfigProvider } from "antd";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <ConfigProvider>
          <Routes>
            {/* 登录 */}
            <Route element={<Login />} path="/login"></Route>
            <Route element={<Login />} path="/"></Route>
            {/* 列表 */}
            <Route element={<Home />} path="/home"></Route>
          </Routes>
          </ConfigProvider>
      </BrowserRouter>
    </>
  )
}
export default Router