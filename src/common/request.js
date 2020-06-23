import axios from "axios"; // 引入axios
import qs from "qs"; // 引入qs模块，用来序列化post类型的数据，后面会提到

const http = axios.create({
  baseURL: "http://192.168.211.21:3000/get",
  timeout: "30000",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json"
  }
});

http.interceptors.request.use(
  function(config) {
    config.data = qs.stringify(config.data);
    //非登录接口做token判断
    let token = "getToken()";
    config.headers["Authorization"] = token;
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function(response) {
    console.log(response);
    let data = response.data;
    return data;
  },
  function(error) {
    console.log(error);
    let data = {
      info: "连接服务器出错!",
      status: 0,
      data: []
    };
    return data;
  }
);

export default http;
