import { useRoutes } from "react-router-dom";
import router from './router';
import zhCN from 'antd/es/locale/zh_CN';
import './App.less';
import { ConfigProvider } from "antd";

// 渲染子路由
// function chilidrenRoute({ children }: any) {
//   if (!children) {
//     return null
//   }
//   return children.map((value: any) => {
//     return (
//       <Route path={value.path} element={<value.compontent />} key={value.key}>
//         {chilidrenRoute(value)}
//       </Route>
//     )
//   })
// }
function App() {

  return <ConfigProvider locale={zhCN} renderEmpty={undefined}>
    {useRoutes(router)}
  </ConfigProvider>

}
// const App = () => {
//   console.log('router', router)
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Suspense fallback={<div>loading...</div>}>
//           <Routes>
//             {router.map((item: any) => {
//               return (
//                 <Route path={item.path} key={item.key} element={<item.compontent />}>
//                   {chilidrenRoute(item)}
//                 </Route>
//               )
//             })}
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </div>
//   )
// }
export default App;