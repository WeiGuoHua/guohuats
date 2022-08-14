import axios from 'axios'

// 创建axios
const service = axios.create({
  // baseURL: '/api',
  baseURL: 'http://192.168.1.5:81/',
  timeout:80000
});

// 添加请求拦截器
service.interceptors.request.use(
  (config:any) => {
    let token:string =''//此处换成自己获取回来的token，通常存在在cookie或者store里面
    if (token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['X-Token'] = token
   
      config.headers.Authorization =  + token       
     }
    return config
  },
  error => {
    // Do something with request error
    console.log("出错啦", error) // for debug
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response:any) => {
   return response.data
 },    /*  */
 error => {
   console.log('err' + error) // for debug
   if(error.response.status == 403){
     // ElMessage.error('错了')
     console.log('错了');
     
   }else{
     // ElMessage.error('服务器请求错误，请稍后再试')
     console.log('服务器请求错误，请稍后再试');
   }
   return Promise.reject(error)
 }
)
export default service;

