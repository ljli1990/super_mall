import axios from "axios";

export function request(config) {
  //1.创建axios实例
  const axiosIntance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  });

  //2.axios拦截器
  //2.1 请求拦截
  axiosIntance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      console.log(err);
    }
  );

  //2.2 响应拦截
  axiosIntance.interceptors.response.use(
    res => {
      return res;
    },
    err => {
      console.log(err);
    }
  );

  //3.发发送真正的请求
  return axiosIntance(config);
}
