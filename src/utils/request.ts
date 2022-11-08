import axios from "axios";
import NProgress from "nprogress";
import { message, Modal } from "antd";
import { clear, get } from "./storage";

const service = axios.create({
  baseURL: "http://10.3.108.193:9527/",
  timeout: 5000
});
service.interceptors.request.use(
  (config: any) => {
    NProgress.start();
    config.headers["Authorization"] = get("token");
    return config;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);

service.interceptors.response.use((config: any) => {
  NProgress.done();
  if (!config.data.code) return Promise.reject(config.data);
  if (config.data.code === 200) {
    return config.data;
  } else if (config.data.code === 401) {
    clear();
    message.error("登录过期，请重新登录");
    Modal.confirm({
      title: "登录过期，请重新登录",
      onOk() {
        window.location.href = "/login";
      }
    });
  }else{
     message.error("请求失败！");
  }
}, (error) => {
  Modal.error({
    title: "网络错误",
  })
  NProgress.done();
  return Promise.reject(error);
});

export default service;