import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routers from './router';

import './App.less';
// 渲染子路由
function chilidrenRoute({ children }: any) {
  if (!children) {
    return null
  }
  return children.map((value: any) => {
    return (
      <Route path={value.path} element={<value.compontent />} key={value.id}>
        {chilidrenRoute(value)}
      </Route>
    )
  })
}
const App = () => {
  console.log(routers);
  
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            {routers.map((item: any) => {
              return (
                <Route path={item.path} key={item.id} element={<item.compontent />}>
                  {chilidrenRoute(item)}
                </Route>
              )
            })}
          </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;