import service from "../request"

// 获取seller
export function getSeller(params:any){
  return service.request({
    method:'POST',
    url:'/api/v1/auth/register',
    data:params
  })
}
export function Login(params:any){
  return service.request({
    method:'POST',
    url:'/api/v1/auth/login',
    data:params
  })
}

